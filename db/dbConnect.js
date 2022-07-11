const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/store")
.then(() => {
    console.log("Db connection successful");
})