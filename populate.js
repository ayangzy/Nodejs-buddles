require('./db/dbConnect');

const Product = require('./models/productModel');

const jsonProducts = require('./products.json');

const start = async() => {
    try {
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("success !!!");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();