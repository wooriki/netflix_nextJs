import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dlsltlvmfl:guARRvQidI2u0tEk@netflix.qszs4cv.mongodb.net/"
    );
    console.log("mongoDB is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
// guARRvQidI2u0tEk
