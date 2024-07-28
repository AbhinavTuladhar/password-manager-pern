import { Request, Response } from 'express'
import prisma from '../prisma'
import { AccountBody, WebsiteBody } from '../types'

export const addAccount = async (req: Request<{}, {}, AccountBody>, res: Response) => {
  const { userName, password, websiteId } = req.body

  // Check if any similar username exists in the website.
  const foundAccount = await prisma.account.findFirst({
    where: {
      OR: [{ userName }, { websiteId }],
    },
  })

  if (foundAccount) {
    return res.status(400).json({ message: 'Account already exists.' })
  }

  if (!password || !websiteId || !userName) {
    return res.status(400).json({ message: 'Password, website id and username are all required.' })
  }

  await prisma.account.create({
    data: {
      userName,
      password,
      websiteId,
    },
  })

  return res.status(201).json({ message: 'Account successfully created.' })
}
