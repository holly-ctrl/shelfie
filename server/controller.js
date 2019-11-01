module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db')
        db.get_all_products()
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}