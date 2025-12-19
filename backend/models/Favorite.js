import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  foodId: String,
  name: String,
  price: Number,
  image: String
});

export default mongoose.model("Favorite", favoriteSchema);
