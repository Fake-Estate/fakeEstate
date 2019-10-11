require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const cors = require('cors')
const chalk = require('chalk')

const userCtrl = require('./controllers/users_ctrl')
const realCtrl = require('./controllers/realtor_ctrl')
const createCtrl = require('./controllers/create_listing_ctrl')
const authMidd = require('./middleware/auth_middleware')

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

// Listing Endpoints
app.get('/api/auth/listing/style', authMidd.authenticateUser, createCtrl.getStyles)
app.post('/api/listing/create', authMidd.authenticateUser, createCtrl.create )
app.post('/api/auth/listing/style/:id', createCtrl.insertStyle)
app.post('/api/auth/listing/create', authMidd.authenticateUser, createCtrl.create )
app.post('/api/auth/listing/create/type/:id', createCtrl.createType)
app.get('/api/listings', createCtrl.getListings)
app.get('/api/listing/:id', createCtrl.getListingById)
app.get('/api/auth/listings', authMidd.authenticateUser, createCtrl.getRealtorsListings)
app.put('/api/auth/listing/edit/:id', authMidd.authenticateUser, createCtrl.editListing)
app.delete('/api/auth/listing/delete/:id', authMidd.authenticateUser, createCtrl.deleteListing)
app.get('/api/auth/listing/type', createCtrl.getType)

// Rooms Included Endpoints
app.get('/api/auth/listing/roomsinc', authMidd.authenticateUser, createCtrl.getRoomsIncluded)
app.post('/api/auth/listing/roomsinc/:id', authMidd.authenticateUser, createCtrl.insertRooms)



app.listen(SERVER_PORT, () => console.log(chalk.cyan(`Serving on port ${SERVER_PORT} 🚀`)))