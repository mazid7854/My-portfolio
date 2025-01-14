import mongoose from "mongoose";

/* configure dotenv */
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((err) => {
    console.error(err); //handle error here
  });

export default mongoose;
