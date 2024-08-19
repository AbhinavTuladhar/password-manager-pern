import { Request, Response } from 'express'
import prisma from '../prisma'
import { AccountBody, AccountCreation, DeleteResourceBody, WebsiteBody } from '../types'
import { decrypt, encrypt } from '../utils/crypto.utils'

export const getAllAccounts = async (req: Request, res: Response) => {
  const accounts = await prisma.account.findMany({})

  // Send only the relevant data in the api response.
  const reducedData = accounts.map((account) => {
    const { password, userName, websiteName, websiteUrl, email, id } = account

    const decryptedPassword = decrypt(password)

    return {
      id,
      userName,
      password: decryptedPassword,
      websiteName,
      websiteUrl,
      email,
    }
  })

  return res.status(200).json({ message: 'Success!', data: reducedData })
}

export const addAccount = async (req: Request<{}, {}, AccountCreation>, res: Response) => {
  // const { userName, password } = req.body

  const { email, password, websiteName, websiteUrl, userId } = req.body
  const userName = req.body?.userName || ''

  // Check if any similar username exists in the website.
  const foundAccount = await prisma.account.findFirst({
    where: {
      AND: [{ userName }, { email }, { websiteName }],
    },
  })

  if (foundAccount) {
    return res.status(409).json({ message: 'Account already exists.' })
  }

  if (!password || !userName || !email || !websiteName || !websiteUrl) {
    return res.status(400).json({ message: 'All fields are required.' })
  }

  const encryptedPassword = encrypt(password)

  const newAccount = await prisma.account.create({
    data: {
      userId,
      userName,
      email,
      password: encryptedPassword,
      websiteName,
      websiteUrl,
    },
  })

  const { id } = newAccount

  return res.status(201).json({
    message: 'Account successfully created.',
    account: { id, userName, password, websiteName, websiteUrl, email },
  })
}

export const deleteAccount = async (req: Request<{}, {}, DeleteResourceBody>, res: Response) => {
  const { id } = req.body

  // Check if account exists
  const foundAccount = await prisma.account.findFirst({ where: { id } })

  if (!foundAccount) {
    return res.status(404).json({ message: 'Account not found.' })
  }

  // Delete account
  await prisma.account.delete({ where: { id } })

  return res.status(200).json({ message: 'Account successfully deleted.' })
}
