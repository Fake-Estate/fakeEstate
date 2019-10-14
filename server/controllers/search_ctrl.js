const getSearch = async(req, res) => {
    try {
        const {results} = req.query
        console.log(req.query)
        const db = req.app.get('db')
        if(results){
            const searchListings = await db.search.get_search({results})
            res.status(200).send(searchListings)
        } else{
            const allListings = await db.listing.get_all_listings()
            res.status(200).send(allListings)
        }
       
    } catch (error) {
        if(error) throw error
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

module.exports = {
    getSearch
}