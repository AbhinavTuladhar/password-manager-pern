import { Request, Router } from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { Credentials } from '../types'
import jwtOptions from '../config/jwt.config'

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

  return res.status(201).json({ message: 'Master user successfully created.', id: newUser.id })
})

authRouter.post('/login', async (req: Request<{}, {}, Credentials>, res) => {
  const { password: sentPassword } = req.body

  const foundUser = await prisma.masterUser.findFirst()

  if (!foundUser) {
    return res.status(400).json({ message: 'Master user not found.' })
  }

  const { passwordHash } = foundUser

  // Check if the passwords match
  const passwordMatch = await bcrypt.compare(sentPassword, passwordHash)

  if (passwordMatch) {
    // Sign the JWT token
    const { passwordHash, ...user } = foundUser
    const token = jwt.sign(user, process.env.JWT_SECRET, jwtOptions)

    return res.status(200).json({ message: 'Successfully logged in!', accessToken: token })
  } else {
    return res.status(400).json({ message: 'The password does not match!' })
  }
})

export default authRouter
