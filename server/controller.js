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
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        console.log(req.body)
        db.add_product([name, price, img])
            .then(result => {
                res.status(200).send(result)
            })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product([id])
            .then(result => {
                res.status(200).send(result)
            })
    },
    editProducts: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        db.edit_product([name, price, img])
            .then(result => {
                res.status(200).send(result)
            })
    }
}