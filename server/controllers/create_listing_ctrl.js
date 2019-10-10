const getStyles = async (req, res) => {
    const styles = await req.app.get('db').style.get_style()
        return res.status(200).send(styles)
}








module.exports = {
    getStyles
}