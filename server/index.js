require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const cors = require('cors')
const chalk = require('chalk')

const userCtrl = require('./controllers/users_ctrl')
const realCtrl = require('./controllers/realtor_ctrl')

const app = express()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())
app.use(cors())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 31556952000
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(chalk.blue('Database Connected 🦄'))
}).catch(error => console.log(chalk.bgRed('Connection Failed', error)))

// Realtor Endpoints
app.post('/api/realtor/create', realCtrl.register)
app.post('/api/realtor/login', realCtrl.login)

// User Endpoints
app.post('/api/profile/create', userCtrl.register)
app.post('/api/profile/login', userCtrl.login)
app.get('/api/profile/logout', userCtrl.logout)

app.listen(SERVER_PORT, () => console.log(chalk.cyan(`Serving on port ${SERVER_PORT} 🚀`)))