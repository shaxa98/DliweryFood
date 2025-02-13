import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://webstack:77557755@cluster0.uh6fz.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
