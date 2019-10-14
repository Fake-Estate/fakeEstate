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
app.post('/api/listing/create', authMidd.authenticateUser, createCtrl.create )
app.post('/api/auth/listing/create', authMidd.authenticateUser, createCtrl.create )

app.get('/api/listings', createCtrl.getListings)
app.get('/api/listing/:id', createCtrl.getListingById)
app.get('/api/auth/listings', authMidd.authenticateUser, createCtrl.getRealtorsListings)
app.put('/api/auth/listing/edit/:id', authMidd.authenticateUser, createCtrl.editListing)
app.delete('/api/auth/listing/delete/:id', authMidd.authenticateUser, createCtrl.deleteListing)

// Type Endpoints
app.get('/api/auth/listing/type', authMidd.authenticateUser, createCtrl.getType)
app.post('/api/auth/listing/create/type/:id', authMidd.authenticateUser, createCtrl.createType)
app.delete('/api/auth/listing/type/:id', authMidd.authenticateUser, createCtrl.deleteType)

//Styles
app.get('/api/auth/listing/style', authMidd.authenticateUser, createCtrl.getStyles)
app.post('/api/auth/listing/style/:id', authMidd.authenticateUser, createCtrl.insertStyle)
app.delete('/api/auth/listing/:id', authMidd.authenticateUser, createCtrl.deleteStyle)

//Interior Features
app.get('/api/auth/listing/intfeatures', authMidd.authenticateUser, createCtrl.getIntFeatures)
app.post('/api/auth/listing/intfeatures/:id', authMidd.authenticateUser, createCtrl.insertIntFeatures)

//Other Features
app.get('/api/auth/listing/otherfeatures', authMidd.authenticateUser, createCtrl.getOtherFeatures)
app.post('/api/auth/listing/otherfeatures/:id', authMidd.authenticateUser, createCtrl.insertOtherFeatures)

// Rooms Included Endpoints
app.get('/api/auth/listing/roomsinc', authMidd.authenticateUser, createCtrl.getRoomsIncluded)
app.post('/api/auth/listing/roomsinc/:id', authMidd.authenticateUser, createCtrl.insertRooms)

// Ext Feature Endpoints
app.get('/api/auth/listing/extfeature', authMidd.authenticateUser, createCtrl.getExtFeatures)
app.post('/api/auth/listing/create/extfeature/:id', createCtrl.createExtFeatures)
app.delete('/api/auth/listing/extfeatures/:id', authMidd.authenticateUser, createCtrl.deleteExtFeatures)

// Hoa Info 
app.delete('/api/auth/listing/hoa/:id', authMidd.authenticateUser, createCtrl.deleteHoa)
app.get('/api/auth/listing/extfeature', authMidd.authenticateUser, createCtrl.getExtFeatures)
app.post('/api/auth/listing/create/extfeature/:id', authMidd.authenticateUser, createCtrl.createExtFeatures)

// Hoa Info 
app.delete('/api/auth/listing/hoa/:id', authMidd.authenticateUser, createCtrl.deleteHoa)
app.get('/api/auth/listing/hoa', authMidd.authenticateUser, createCtrl.getHoa)
app.post('/api/auth/listing/create/hoa/:id', authMidd.authenticateUser, createCtrl.createHoa)

// Inclusions 
app.get('/api/auth/listing/inclusions', authMidd.authenticateUser, createCtrl.getInclusions)
app.post('/api/auth/listing/inclusions/:id', authMidd.authenticateUser, createCtrl.insertInclusions)
app.delete('/api/auth/listing/inclusions/:id', authMidd.authenticateUser, createCtrl.deleteInclusions)

// Search


app.listen(SERVER_PORT, () => console.log(chalk.cyan(`Serving on port ${SERVER_PORT} 🚀`)))