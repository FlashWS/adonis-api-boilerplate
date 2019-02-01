"use strict"
const User = use('App/Models/User')

class AuthController {
  async login({ request, auth, response }) {
    let { email, password } = request.all()
    try {
      let token = await auth.attempt(email, password)
      return response.json(token)
    } catch (error) {
      console.log(error)
      return response.json({ message: "You are not registered!" })
    }
  }

  async register({ request, auth, response }) {
    try {
      const user = new User()
      let {username, email, password} = request.all()
      user.username = username
      user.email = email
      user.password = password
      await user.save()

      return user.toJSON()
    } catch (error) {
      console.log(error)
      return response.json({ message: "You are not registered!" })
    }
  }
}

module.exports = AuthController
