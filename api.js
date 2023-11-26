const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');


const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
});  

app.post('/insert', async (req, res) => {
    console.log(req.body);
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    console.log(result);
    res.send(result);
});

app.put('/:name', async (req, res) => {
    console.log(req.body);
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: req.params.name},
        {$set : req.body}
    );
    console.log(result);
    res.send("record updated");
});

app.delete('/:id', async (req, res) => {
     console.log(req.params.id);
     let data = await dbConnect();  
     let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
     res.send("record deleted");
  });
app.listen(3000,() => {
    console.log("serve r is running on port  3000")
});