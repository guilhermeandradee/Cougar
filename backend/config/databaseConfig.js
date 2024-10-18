import mongoose, { mongo } from 'mongoose';
import { configDotenv } from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

configDotenv()

const uri = process.env.MONGODB_URI

export const connectDB = async () => {
    await mongoose.connect(uri);
}

export const closeConnectionDB = async () => {
    await mongoose.connection.close();
}