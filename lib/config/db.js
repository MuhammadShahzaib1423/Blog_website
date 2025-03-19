import mongoose from "mongoose";

export const ConnectDB = async () => {

    await mongoose.connect('mongodb+srv://Shahzaib:11223355@cluster0.h1y2x.mongodb.net/blog-app')
    console.log('Database Connected');
}