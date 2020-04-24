const data = require('../../data/users/user.json')

export default {
  get(): any {
    return [
      200,
      data
    ]
  }
}
