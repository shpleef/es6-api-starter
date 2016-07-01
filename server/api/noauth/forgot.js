import User from '../../models/user'
import nodemailer from 'nodemailer'

export default ({ body }, res) => {
  let user = body.user
  User.findOne({ email: user.email }, function (err, user) {
    if (!user) {
      req.flash('error', 'No account with that email address exists.')
      return res.json({success: false, message: 'no such email'})
    }
    var random = getRandom()
    // have to allow low authentication mechanism in google to let it fire emails from this client
    var smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
        user: GLOBAL.ADMINEMAIL,
        pass: GLOBAL.ADMINPASSWORD
      }
    })

    var mailOptions = {
      to: user.email,
      from: GLOBAL.ADMINEMAIL,
      subject: 'Password Reset',
      text: 'Your Password is ' + random + '. Please change this password asap its just a temporary one'
    }

    user.password = user.generateHash(random)
    user.save((err) => {
      if (err) { return res.json({success: false, message: err})} else {
        smtpTransport.sendMail(mailOptions, function (err) {
          if (err) {
            console.log(err)
            return res.json({success: false, message: 'Error'})
          }
          res.json({success: true,message: 'email sent to ur account please check ur inbox'})
        })
      }
    })
  })
}

function getRandom () {
  return Math.random().toString(36).substr(2, 5)
}
