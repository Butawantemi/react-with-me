import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB is connected successfully");
    });
  } catch (error) {
    console.log({ message: error });
  }
};

export default connect;
