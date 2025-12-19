import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// PLACE ORDER
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order Placed Successfully" });
});

// GET ALL ORDERS
router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ date: -1 });
  res.json(orders);
});

// UPDATE STATUS (Admin)
router.put("/:id", async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  });
  res.json({ message: "Status Updated" });
});

export default router;
