import mongoose from "mongoose";

let isconnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isconnected){
        console.log('Mongodb is already running')
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName :'shareprompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        
    }
}