zz<<<<<<< HEAD
import { config } from "./config.js";
=======
>>>>>>> 132e7e072fb205b63eecd0cd77b13f2b07172b23
import mongoose from "mongoose";

const connectDB = async () => {
  try {
<<<<<<< HEAD
    const connectionInstance = await mongoose.connect(config.databaseUrl);
    console.log(`MongoDB Connected: ${connectionInstance}`);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
=======
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // To avoid warnings in the console
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
>>>>>>> 132e7e072fb205b63eecd0cd77b13f2b07172b23
    process.exit(1);
  }
};

export default connectDB;
