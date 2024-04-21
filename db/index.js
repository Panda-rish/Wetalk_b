const mongoose=require("mongoose");
const {DB_NAME}=require("../views/constant.js");



const connectDB=async()=>{
    try{
        const connectionInst=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected : ${connectionInst.connection.host}`);
         
    } catch(error){
        console.log("MONGODB connection error", error)
        process.exit(1)
    }
}

module.exports=connectDB;