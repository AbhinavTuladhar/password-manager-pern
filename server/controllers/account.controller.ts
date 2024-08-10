import { Request, Response } from 'express'
import prisma from '../prisma'
import { AccountBody, WebsiteBody } from '../types'
import { encrypt } from '../utils/crypto.utils'

export const addAccount = async (
  req: Request<{ websiteId: string }, {}, AccountBody>,
  res: Response,
) => {
  const { userName, password } = req.body

  const { websiteId } = req.params

  // Check if any similar username exists in the website.
  const foundAccount = await prisma.account.findFirst({
    where: {
      userName,
    },
  })

  if (foundAccount) {
    return res.status(409).json({ message: 'Account already exists.' })
  }

  if (!password || !userName) {
    return res.status(400).json({ message: 'Password and username are required.' })
  }

  const encryptedPassword = encrypt(password)

  const createdAccount = await prisma.account.create({
    data: {
      userName,
      password: encryptedPassword,
      websiteId,
    },
  })

  return res.status(201).json({ message: 'Account successfully created.', account: createdAccount })
}
