// get an instance of mongoose and mongoose.Schema
import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
import { isEmail } from 'validator'

var Schema = mongoose.Schema

var userSchema = new Schema({
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    dropDups: true,
    validate: function (email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
}, {collection: 'user'})

// methods ======================

// generating a hash
userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// checking if password is valid
userSchema.methods.validPassword = (password, savedpassword) => {
  return bcrypt.compareSync(password, savedpassword)
}

// set up a mongoose model and pass it using module.exports

var exports = mongoose.model('User', userSchema)

export default exports
