import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "Database connected successfully at HOST:",
      response.connection.host
    );
  } catch (error) {
    console.log("Database connection failed", error);
    return error;
  }
};
export default dbConnection;
