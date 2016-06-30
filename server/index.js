import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import db from './db'
import middleware from './middleware'
import api from './api'
import config from './config'
import morgan from 'morgan'

var app = express()

app.server = http.createServer(app)

// jwt seceret
app.set('superSecret', config.secret) // secret variable

app.set('version', config.version) // versioning

// 3rd party middleware
app.use(cors({
  exposedHeaders: ['Link']
}))

app.use(bodyParser.json({
  limit: '100kb'
}))

// use morgan to log requests to the console
app.use(morgan('dev'))

// connect to db
db(λ => {

  // internal middleware
  app.use(middleware())

  // api router
  app.use('/api', api())

  app.server.listen(process.env.PORT || 8080)

  console.log(`Started on port ${app.server.address().port}`)
})

export default app
