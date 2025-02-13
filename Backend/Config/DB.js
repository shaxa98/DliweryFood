import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://shakhzodakhrorov:DGiQRMJrXc4DCtrd@cluster0.aewzd.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
