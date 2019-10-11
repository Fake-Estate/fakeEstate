const getStyles = async (req, res) => {
    try{
        const styles = await req.app.get('db').style.get_style()
        return res.status(200).send(styles)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const insertStyle = async (req, res) => {
    try {
        const {id} = req.params
        console.log(typeof id)
        const {style_id} = req.body
        const styles = await req.app.get('db').style.create_style({style_id, id:+id})
        res.status(200).send(styles)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }

}

const getRoomsIncluded = async (req, res) => {
    try {
        const db= req.app.get('db')
        let response = await db.rooms_included.get_rooms_included()
        res.send(response)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
} 

const insertRooms = async (req, res) => {
    try {
        const db = req.app.get('db')
        const {id} = req.params
        const {rooms_included_id} = req.body

        let response = await db.rooms_included.create_rooms_included({rooms_included_id, id: +id})
        res.send(response)
    } catch (error) {
        if(error) throw error
        console.log('There has been an error', error)
        res.status(500).send(error)
    }
}

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
const getType = async(req, res) => {
    try {
        const db = await req.app.get('db')
        let response = await db.type.get_type()
        res.send(response)
         
    } catch(error) {
        if(error) throw error
        console.log('Abort, Abort', error)
        res.status(500).send(error)
    }
}

const createType = async(req,res) => {
    try{
        const {id} =req.params
        const {type_id} = req.body
        const db = await req.app.get('db')
        let response = await db.type.create_type({type_id,id:+id})
        res.send(response)
    } catch(error) {
        if(error) throw error
        console.log('ACCESS DENIED',error)
        res.status(500).send(error)
    }
}

const getIntFeatures = async (req, res) => {
    try{
        const intFeatures = await req.app.get('db').int_features.get_int_features()
        return res.status(200).send(intFeatures)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
const getExtFeatures = async(req,res) => {
    try{
        const db = await req.app.get('db')
        let response = await db.ext_features.get_extfeature()
        res.send(response)
    } catch(error) {
        if(error) throw error
        console.log('This is not an error...JK',error)
        res.status(500).send(error)
    }
}

const insertIntFeatures = async (req, res) => {
    try {
        const {id} = req.params
        const {interior_features_id} = req.body
        const intFeatures = await req.app.get('db').int_features.create_int_features({interior_features_id, id:+id})
        res.status(200).send(intFeatures)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }

}
const createExtFeatures = async(req,res) => {
    try{
        const {id} =req.params
        const {extfeatures_id} = req.body
        const db = await req.app.get('db')
        let response = await db.ext_features.create_extfeature({extfeatures_id,id:+id})
        res.send(response)
    } catch(error) {
        if(error) throw error
        console.log('Insert witty error message here',error)
        res.status(500).send(error)
    }
}

const getHoa = async(req,res) => {
    try{
        const db = await req.app.get('db')
        let response = await db.hoa.get_hoa()
        res.send(response)
    } catch(error) {
        if(error) throw error
        console.log('Booooo', error)
        res.status(500).send(error)
    }
}

const createHoa = async(req,res) => {
    try{
        const {id} = req.params
        const {hoa_info_id} = req.body
        const db = await req.app.get('db')
        let response = await db.hoa.create_hoa({hoa_info_id,id:+id})
        res.send(response)
    } catch(error) {
        if(error) throw error
        console.log('Server has successfully failed', error)
    }
}


const getOtherFeatures = async (req, res) => {
    try{
        const otherFeatures = await req.app.get('db').other_features.get_other_features()
        return res.status(200).send(otherFeatures)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

const insertOtherFeatures = async (req, res) => {
    try {
        const {id} = req.params
        const {other_features_id} = req.body
        const otherFeatures = await req.app.get('db').other_features.create_other_features({other_features_id, id:+id})
        res.status(200).send(otherFeatures)
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

module.exports = {
    getStyles,
    insertStyle,
    create,
    getListings,
    getListingById,
    getRealtorsListings,
    editListing,
    deleteListing,
    getType,
    createType,
    getRoomsIncluded,
    insertRooms,
    getIntFeatures,
    insertIntFeatures,
    getOtherFeatures,
    insertOtherFeatures,
    getExtFeatures,
    createExtFeatures,
    getHoa,
    createHoa
}