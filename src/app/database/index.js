import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dlsltlvmflh6mOKPM0Sw2b2AOf@cluster0.gbmnjyw.mongodb.net/"
    );
    console.log("mongoDB is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
// h6mOKPM0Sw2b2AOf
