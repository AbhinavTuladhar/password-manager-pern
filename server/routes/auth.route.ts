import { Request, Router } from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

import { Credentials } from '../types'

const authRouter = Router()
const prisma = new PrismaClient()

authRouter.post('/register', async (req: Request<{}, {}, Credentials>, res) => {
  const { password } = req.body

  if (!password) {
    return res.status(400).json({ message: 'Password is required.' })
  }

  // Check if there is already a registered master user
  const masterUser = await prisma.masterUser.findMany()

  if (masterUser.length !== 0) {
    return res.status(400).json({ message: 'Master user already exists.' })
  }

  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = await prisma.masterUser.create({
    data: {
      passwordHash: hashedPassword,
    },
  })

  return res
    .status(201)
    .json({ message: 'Master user successfully created.', id: newUser.id })
})

export default authRouter
