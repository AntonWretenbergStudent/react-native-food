import mongoose from "mongoose"
import 'dotenv/config'; // Make sure you're importing dotenv


export const connectDB = async () => {

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database connected ${conn.connection.host}`);
  } catch (error) {
    console.log('Error connecting to database', error);
    process.exit(1)
  }
}