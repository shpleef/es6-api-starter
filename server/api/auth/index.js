import { Router } from 'express'
import users from './users'
import resetpassword from './resetpassword'

export default (req, res) => {

  var auth = Router()

  auth.use('/users', users)
  auth.post('/resetpassword', resetpassword)

  // default
  auth.get('/', (req, res) => {
    res.json({
      message: 'auth path'
    })
  })

  return auth
}
