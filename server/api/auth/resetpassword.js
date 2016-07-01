import User from '../../models/user'

export default ({ body }, res) => {
  let userF = body.user
  User.findOne({ email: userF.email }, function (err, user) {
    if (!user) {
      req.flash('error', 'No account with that email address exists.')
      return res.json({success: false, message: 'no such email'})
    } else if (user) {
      let newpass = userF.newpassword
      let oldpass = userF.oldpassword

      if (!user.validPassword(userF.oldpassword, user.password)) {
        return res.json({ success: false, message: 'Wrong Old password.' })
      } else {
        user.password = user.generateHash(userF.newpassword)
        user.save((err) => {
          if (err) return res.json({success: false, message: err })

          console.log('User saved successfully')
          res.json({ success: true, message: 'User Password Updated' })
        })
      }
    }
  })
}
