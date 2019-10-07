const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    try {
        const db = req.app.get('db')
        const {first_name, last_name, email, password} = req.body
        
        let users = await db.user.get_user(email)
        let user = users[0]

        if(user) {
            return res.status(409).send('Already registered. Please sign in.')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let response = await db.user.create_user({
            first_name: first_name, last_name: last_name, email, hash
        })
        let newUser = response[0]

        delete newUser.password

        req.session.user = newUser
        res.send(req.session.user)
    } catch (error) {
        if (error) throw error
        console.log('There was an error')
        res.status(500).send(error)
    }
}

module.exports = {
    register
}