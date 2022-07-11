require('./db/dbConnect');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoute');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(bodyParser.json());


app.use('/api/v1/products', productRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT} ..`);
})