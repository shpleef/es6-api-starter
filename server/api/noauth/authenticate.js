import User from '../../models/user'
import resource from 'resource-router-middleware'
import express from 'express'
import jwt from 'jsonwebtoken'
import app from '../../'

export default resource({
  /** POST / - Create a new entity */
  create({ body }, res) { // 
    User.findOne({
      name: body.user.email
    }, (err, user) => {
      if (err) throw err

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' })
      } else if (user) {
        // check if password matches
        if (!user.validPassword(body.user.password, user.password)) {
          return res.json({ success: false, message: 'Authentication failed. Wrong password.' })
        } else {
          // if user is found and password is right
          // create a token

          var token = jwt.sign(user, app.get('superSecret'), {
            expiresIn: 1440 // expires in 24 hours
          })

          // return the information including token as JSONs
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          })
        }
      }
    })
  },

})
