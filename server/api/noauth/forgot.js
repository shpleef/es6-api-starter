import User from '../../models/user'
import nodemailer from 'nodemailer'

export default ({ body }, res) => {
  let user = body.user
  User.findOne({ email: req.body.email }, function (err, user) {
    if (!user) {
      req.flash('error', 'No account with that email address exists.')
      return res.json({success: false, message: 'no such email'})
    }
    var smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
        user: '!!! YOUR SENDGRID USERNAME !!!',
        pass: '!!! YOUR SENDGRID PASSWORD !!!'
      }
    })
  })
}
