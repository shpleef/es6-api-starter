import mongoose from 'mongoose'
import config from './config'

export default function(callback) {
  // connect to a database if needed
  mongoose.connect(config.database) // connect to database
  console.log('Connected to DB five')
  callback()
}
