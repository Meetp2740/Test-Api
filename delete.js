const dbConnect = require('./mongodb');

const deleteRecorde = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({name: "Samsung S10"});
   console.log(result);

   if(result.acknowledged){
       console.log("Record Deleted");
   }
}
deleteRecorde() ;
