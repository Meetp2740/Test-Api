const dbConnect = require('./mongodb');

const update = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        {name: "Oppo F15"},
        {$set: {price: 5000}}
        )
    console.warn(result);
}

update();