import { NextFunction, Request, Response } from 'express'

export const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('This is a logging middleware')
  next()
}
