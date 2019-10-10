const getStyles = async (req, res) => {
    const styles = await req.app.get('db').style.get_style()
        return res.status(200).send(styles)
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

const getType = async(req, res) => {
    try {
        const db = req.app.get('db')

        let response = await db.type.get_type()
        res.send(response)
    } catch(error) {
        if(error) throw error
        console.log('Abort, Abort', error)
    }
}





module.exports = {
    getStyles,
    create,
    getListings,
    getType
}