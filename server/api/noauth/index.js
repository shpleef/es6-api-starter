import { Router } from 'express'
import facets from './facets'
import authenticate from './authenticate'
import setup from './setup'
import forgot from './forgot'

export default (req, res) => {
  var noauth = Router()

  noauth.use('/facets', facets)
  noauth.post('/signup', setup)
  noauth.post('/forgot', forgot)
  noauth.use('/authenticate', authenticate)

  noauth.get('/', (req, res) => {
    res.json({
      message: 'noauth path'
    })
  })
  return noauth
}
