import { Router } from 'express'
import users from './users'

export default (req, res) => {
  var auth = Router()
  auth.use('/users', users)

  auth.get('/', (req, res) => {
    res.json({
      message: 'auth path'
    })
  })

  return auth
}
