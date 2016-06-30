import { Router } from 'express'

import auth from './auth'
import noauth from './noauth'
import config from '../config'

export default function() {
  var api = Router()

  // mount the noauth resource
  api.use(`/noauth/${config.version}`, noauth())

  // rest of all routes with data should be in auth for token authentication
  api.use(`/auth/${config.version}`, auth())

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({
      version: config.version
    })
  })

  return api
}
