import User from '../../models/user'

export default ({ body }, res) => {
  // create a sample user
  let user = body.user
  if (!user) {
    return res.json({success: false, message: 'no user data sent'})
  }

  var newuser = new User()
  newuser.email = user.email,
  newuser.password = newuser.generateHash(user.password),
  newuser.admin = user.admin
  // save the sample user
  newuser.save((err) => {
    if (err) return res.json({success: false, message: err })

    console.log('User saved successfully')
    res.json({ success: true, message: 'User saved Successfully' })
  })
}
