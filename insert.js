const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {
                "name": "Samsung A15",
                "brand": "Samsung",
                "price": 15000,
                "category": "mobile"  
              },
              {
                "name": "Vivo V15",
                "brand": "Vivo",
                "price": 15000,
                "category": "mobile"  
              },
              {
                "name": "Oppo F15",
                "brand": "Oppo",
                "price": 11000,
                "category": "mobile"  
              },
        ]
       
    )
    if(result.acknowledged){
        console.log("data inserted");
    }
    
}
insert();