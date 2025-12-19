import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: Array,
  totalAmount: Number,
  status: {
    type: String,
    default: "Placed"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Order", orderSchema);
