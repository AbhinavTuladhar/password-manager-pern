import { Request, Response } from 'express'
import prisma from '../prisma'
import { WebsiteBody } from '../types'
import { decrypt } from '../utils/crypto.utils'

export const addWebsite = async (req: Request<{}, {}, WebsiteBody>, res: Response) => {
  const { name, url } = req.body

  if (!name || !url) {
    return res.status(400).json({ message: 'Name and URL are required.' })
  }

  // Check if any similar website name or URL exists
  const foundWebsite = await prisma.website.findFirst({
    where: {
      OR: [{ name }, { url }],
    },
  })

  if (foundWebsite) {
    return res.status(409).json({ message: 'Website already exists.' })
  }

  // ! TEMPORARY: Hardcoded user id
  await prisma.website.create({
    data: {
      name,
      url,
      userId: '967cef12-3210-4ded-bef9-e809271e3c14',
    },
  })

  return res.status(201).json({ message: 'Website successfully created.' })
}

export const getAllWebsites = async (req: Request, res: Response) => {
  const websites = await prisma.website.findMany()

  return res.status(200).json({ message: 'Success!', data: websites })
}

export const getAccountsFromWebsite = async (
  req: Request<{ websiteId: string }, {}, {}>,
  res: Response,
) => {
  const { websiteId } = req.params

  const accounts = await prisma.account.findMany({
    where: {
      websiteId,
    },
  })

  const website = await prisma.website.findUnique({
    where: {
      id: websiteId,
    },
  })

  const decryptedAccounts = accounts.map((account) => {
    const { password, userName } = account
    const decryptedPassword = decrypt(password)
    return {
      website: website?.name,
      userName,
      password: decryptedPassword,
    }
  })
  return res.status(200).json({ message: 'Success!', data: decryptedAccounts })
}
