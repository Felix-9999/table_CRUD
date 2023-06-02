import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb+srv://felix:user@table.e5o1zkb.mongodb.net/");

        if(connection.readyState == 1){
            return Promise.resolve(true)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo;