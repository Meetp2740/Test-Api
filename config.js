const mongoose = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017';
const database = 'e-comm';
// mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
let url = "mongodb+srv://Prajay1:Prajay2534@testapi.pg9ozja.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url).then(() => {
    console.log('database connected');
})