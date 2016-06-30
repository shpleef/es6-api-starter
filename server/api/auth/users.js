import resource from 'resource-router-middleware'
import User from '../../models/user'

export default resource({
  /** Property name to store preloaded entity on `request`. */
  id: 'user',
  /** GET / - List all entities */
  index({ params }, res) {
    User.find({}, (err, users) => {
      res.json(users)
    })
  },

})
