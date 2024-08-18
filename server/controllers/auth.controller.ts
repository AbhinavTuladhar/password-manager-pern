import { Request, Response } from 'express'
import { Credentials } from '../types'
import prisma from '../prisma'
import bcrypt from 'bcrypt'
import jwtOptions from '../config/jwt.config'
import jwt from 'jsonwebtoken'

// Register User
export const registerUser = async (req: Request<{}, {}, Credentials>, res: Response) => {
  const { password } = req.body

  if (!password) {
    return res.status(400).json({ message: 'Password is required.' })
  }

  // Check if there is already a registered master user
  const masterUser = await prisma.masterUser.findMany()

  if (masterUser.length !== 0) {
    return res.status(409).json({ message: 'Master user already exists.' }) // Conflict
  }

  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = await prisma.masterUser.create({
    data: {
      passwordHash: hashedPassword,
    },
  })

  return res.status(201).json({ message: 'Master user successfully created.', id: newUser.id })
}

// Login User
export const loginUser = async (req: Request<{}, {}, Credentials>, res: Response) => {
  const { password: sentPassword } = req.body

  // Check if master user exists
  const foundUser = await prisma.masterUser.findFirst()

  if (!foundUser) {
    return res.status(404).json({ message: 'Master user not found.' }) // Not Found
  }

  const { passwordHash } = foundUser

  // Check if the passwords match
  const passwordMatch = await bcrypt.compare(sentPassword, passwordHash)

  if (passwordMatch) {
    // Sign the JWT token and send it as a cookie
    const { passwordHash, ...user } = foundUser
    const token = jwt.sign(user, process.env.JWT_SECRET, jwtOptions)

    return res
      .status(200)
      .cookie('accessToken', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      })
      .json({ message: 'Successfully logged in!', accessToken: token, userId: foundUser.id })
  } else {
    return res.status(401).json({ message: 'The password does not match!' }) // Unauthorized
  }
}

export const logoutUser = async (req: Request, res: Response) => {
  return res
    .clearCookie('accessToken', { httpOnly: true })
    .status(200)
    .json({ message: 'Successfully logged out!' })
}
