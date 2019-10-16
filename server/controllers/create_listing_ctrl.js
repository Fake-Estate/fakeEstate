const create = async(req, res) => {
    console.log('hit')
    try {
        const db = req.app.get('db')
        const {mls, address, city, state, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description, img} = req.body
        
        const realtor_id = req.session.realtor.id

        const capCity = city.toLowerCase()
        const capState = state.toLowerCase()

        let response = await db.listing.create_listing({mls, address, capCity, capState, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description, img, realtor_id})
        let newListing = response[0]
        
        res.status(200).send(newListing)

    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const getListings = async (req, res) => {
    try {
        const { search } = req.query
        console.log(search)
        const db = req.app.get('db')
        let listing = []
        if(Number.isInteger(search)){
            listings = await db.search.get_search_int([search])
        } else {
            listings = await db.search.get_search_str([search])
        }
        console.log(listings)
        return res.status(200).send(listings)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const getMapListings = async (req, res) => {
    try {
        const { search } = req.query
        const db = req.app.get('db')
        if(search){
            const searchListings = await db.listing.get_city_state(search)
            res.status(200).send(searchListings)
        }else{
        const response = await db.listing.get_all_listings()
        res.send(response)}
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
        const {id} = req.params

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
        // const {realtor_id} = req.session.realtor.id

        const {mls, address, city, state, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description} = req.body

        const capCity = city.toLowerCase()
        const capState = state.toLowerCase()

        let response = db.listing.update_listing({mls, address, capCity, capState, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description, id})

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
    deleteListing,
    getMapListings
}