const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    try {
        const {first_name, last_name, email, password, license, id} = req.body
        const db = req.app.get('db')

        let realtors = await db.realtor.get_realtor(email)
        let realtor = realtors[0]

        if(realtor){
            return res.status(409).send('Already registered. Please sign in.')
        }

        const salt = bcrypt.genSaltSync(15)
        const hash = bcrypt.hashSync(password, salt)

        let response = await db.realtor.create_realtor({first_name, last_name, email, hash, license, is_admin: true})
        let newAgent = response[0]

        delete newAgent.password

        req.session.realtor = newAgent
        res.send(req.session.realtor)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const login = async(req, res) => {
    try {
        const db = req.app.get('db')
        const {email, password} = req.body

        let realtors = await db.realtor.get_realtor(email)
        let realtor = realtors[0]

        if(!realtor){
            return res.status(401).send('Email or password is incorrect')
        }

        let isAuthenticated = bcrypt.compareSync(password, realtor.password)

        if(!isAuthenticated){
            return res.status(401).send('Email or password is incorrect')
        }

        delete realtor.password

        req.session.realtor = realtor
        res.send(req.session.realtor)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const logout = (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
}

module.exports = {
    register,
    login,
    logout
}