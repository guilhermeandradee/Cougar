import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB_URI

export const connectDB = async () => {
    await mongoose.connect(uri);
}

export const closeConnectionDB = async () => {
    await mongoose.connection.close();
}