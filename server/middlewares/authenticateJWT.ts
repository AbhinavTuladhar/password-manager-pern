import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  const cookie = req.headers.cookie

  const cookieToken = cookie?.split('=')[1]

  if (!cookieToken) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  jwt.verify(token || cookieToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    }

    next()
  })
}

export default authenticateJWT
