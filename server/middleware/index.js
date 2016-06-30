import { Router } from 'express'
import jwtAuth from './jwtAuth'
import config from '../config'

export default function() {
  var routes = Router()

  routes.use(`/api/auth/${config.version}/`, jwtAuth)
  // add middleware here

  return routes
}
