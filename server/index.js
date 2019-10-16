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
const searchCtrl = require('./controllers/search_ctrl')

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


// Realtor Endpoints`   
app.post('/api/realtor/create', realCtrl.register)
app.post('/api/realtor/login', realCtrl.login)
app.get('/api/realtor/:id/listing', authMidd.authenticateUser, createCtrl.getRealtorsListings)
app.post('/api/realtor/:id/listing/create', authMidd.authenticateUser, createCtrl.create )
app.put('/api/realtor/listing/edit/:id', authMidd.authenticateUser, createCtrl.editListing)
app.delete('/api/realtor/listing/delete/:id', authMidd.authenticateUser, createCtrl.deleteListing)

// Listing Endpoints
app.get('/api/listings', createCtrl.getListings)
app.get('/api/listing/:id', createCtrl.getListingById)
app.get('/api/map/listings', createCtrl.getMapListings)



// Search
app.get('/api/search', searchCtrl.getSearch)

app.listen(SERVER_PORT, () => console.log(chalk.cyan(`Serving on port ${SERVER_PORT} 🚀`)))