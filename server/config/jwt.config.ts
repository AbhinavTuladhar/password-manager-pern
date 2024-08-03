import jwt from 'jsonwebtoken'

const jwtOptions: jwt.SignOptions = {
  expiresIn: '15m',
}

export default jwtOptions
