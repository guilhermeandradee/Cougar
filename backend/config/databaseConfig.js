import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB_URI

export const connectDB = async () => {
    console.log('connect DB', uri)

    await mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology: true})
}

export const closeConnectionDB = async () => {
    await mongoose.connection.close();
}