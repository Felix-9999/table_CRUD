// const MONGO_URL = "mongodb+srv://user321:user321@table.og90u3x.mongodb.net/"
import mongoose from 'mongoose';
const connectMongo =  async ()=>{
    try {
      const {connection} = await mongoose.connect(process.env.TABLE_MONGO_URL)
   
      if(connection.readyState=== 1) {
        console.log("Database Connected");
      }
   
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo
// connTable