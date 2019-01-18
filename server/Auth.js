module.exports = {
  login: async (req, res) => {
    try {
      const db = req.app.get('db')
      const { username, password } = req.body
      let userResponse = await db.getUsername(username)
      let user = userResponse[0]

      if (!user) {
        return res.status(401).send('Username Not Found')
      }

      const isAuthenticated = password === user.password

      if (!isAuthenticated) {
        return res.status(403).send('Incorrect Password')
      }

      delete user.password
      req.session.user = user
      res.send(req.session.user)

    } catch (error) {
      console.log('Error Logging In:', error)
      res.status(500).send(error)
    }
  },

  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },

  getCurrentUser: (req, res) => {
    res.send(req.session.user)
  }
}