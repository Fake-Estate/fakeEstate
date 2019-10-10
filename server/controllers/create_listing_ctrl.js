const create = async(req, res) => {
    try {
        const db = req.app.get('db')
        const {mls, address, city, state, acreage, square_footage, bedrooms, bathrooms, price, description} = req.body
        const {id} = req.session.realtor

        let response = await db.listing.create_listing({mls, address, city, state, acreage, square_footage, bedrooms, bathrooms, price, description, id})
        let newListing = response[0]

        req.session.house = newListing
        res.send(req.session.house)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const getListings = async(req, res) => {
    try {
        const db = req.app.get('db')

        let response = await db.listing.get_all_listings()
        res.send(response)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const getListingById = async(req, res) => {
    try {
        const db = req.app.get('db')
        const {id} = req.params

        let response = await db.listing.get_listing_by_id(+id)
        res.send(response)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const getRealtorsListings = async(req, res) => {
    try {
        const db = req.app.get('db')
        const {id} = req.session.realtor

        let response = await db.listing.get_realtors_listings({id})
        res.send(response)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const editListing = async(req, res) => {
    try {
        const db = req.app.get('db')
        const {id} = req.params
        // const {realtor_id} = req.session.realtor

        const {mls, address, city, state, acreage, square_footage, bedrooms, bathrooms, price, description} = req.body

        let response = db.listing.update_listing({mls, address, city, state, acreage, square_footage, bedrooms, bathrooms, price, description, id})

        res.send(response)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const deleteListing = (req, res) => {
    try {
        const db = req.app.get('db')
        const {id} = req.params
        
        let response = db.listing.delete_listing({id})
        res.status(200).send('Listing successfully deleted')
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}






module.exports = {
    create,
    getListings,
    getListingById,
    getRealtorsListings,
    editListing,
    deleteListing
}