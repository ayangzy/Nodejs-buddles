require('./db/dbConnect');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoute');

app.use(bodyParser.json());


app.use('/api/v1/products', productRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT} ..`);
})