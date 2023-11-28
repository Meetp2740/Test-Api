const express = require("express");
require("./config");

const Product = require("./products");

const app = express();

app.use(express.json());``

app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    let result = await data.save();
    resp.send(result);
    console.log(req.body);
}),
    app.get("/list", async (req, resp) => {  
        let data = await Product.find();
        if (data.length > 0) {
            resp.send(data);
        } else {
            resp.send("No record found");
        }
    }),
    app.delete("/delete/:_id", async (req, resp) => {
        const result = await Product.deleteOne(req.params);
        resp.send(result);
        console.log(req.params);
    
    }),
    app.put("/update/:_id", async (req, resp) => {
        const result = await Product.updateOne(
            { _id: req.params},
            { $set: req.body }
        );
        resp.send(result);
        console.log(req.body);
    
    }),
    app.get("/search/:key", async (req, resp) => { 
        let result = await Product.find({
            "$or": [
                { name: { $regex: req.params.key } },
                { category: { $regex: req.params.key } }
            ]
        });
        resp.send(result);
        console.log(req.params.key);

    })

app.listen(process.env.PORT || 3000,()=>{
   console.log("server started");
})


// dbConnect().then((collection)=>{
// collection.find().toArray().then((response)=>{
//   console.log(response);
// })
// })

// const dbConnect = require('./mongodb');
// const main = async () => {
//    let data = await dbConnect();
//    data = await data.find().toArray();
//    console.log(data);
// }
// main();

// const mongoose = require('mongoose');
//  mongoose.connect("mongodb://localhost:27017/e-comm");
// const productSchema = new mongoose.Schema({
//    name: String,
//    price: Number,
//    brand: String,
//    category: String
// });



// const saveInDb = async () => {

//     const Product = mongoose.model("products", productSchema);
//     let data = new Product({name: "Iphone 15",price : 150000,brand:"I Phone",category : "Mobile"});
//     const result = await data.save();
//     console.log(result);
// }

// const updateInDb = async () => {
//    const Product = mongoose.model("products", productSchema);
//    let data = await Product.updateOne({name: "Iphone 14"},{$set : {price : 100000}});
//    console.log(data); 
// }


// const deleteInDb = async () => {
//    const Product = mongoose.model("products", productSchema);
//    let data = await Product.deleteOne({name: "Iphone 15"});
//    console.log(data);  //it will return a object with deleted count and deleted documents.
// }


// // saveInDb();
// // updateInDb();
// deleteInDb();

// module.exports =  mongoose.model("products", productSchema);
