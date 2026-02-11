import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error with connecting database");
    console.log(error.message);
  }
};
