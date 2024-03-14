const Product = require('../models/productModel');

//create new workout
const createProduct = async (req, res) => {
    const { name, load, reps } = req.body

    let emptyFields = []
    if (!name) {emptyFields.push('name')}


    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }
    // add doc to db
    try {
        const product = await Product.create({ name, load, reps })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {

    createProduct,

}