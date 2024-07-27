import jwt from 'jsonwebtoken'

const jwtOptions: jwt.SignOptions = {
  expiresIn: '1d',
}

export default jwtOptions
