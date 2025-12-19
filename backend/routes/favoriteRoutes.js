import express from "express";
import Favorite from "../models/Favorite.js";

const router = express.Router();

// GET favorites
router.get("/", async (req, res) => {
  const favs = await Favorite.find();
  res.json(favs);
});

// ADD favorite
router.post("/", async (req, res) => {
  const fav = new Favorite(req.body);
  await fav.save();
  res.json({ message: "Added to Favorite" });
});

// REMOVE favorite
router.delete("/:id", async (req, res) => {
  await Favorite.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed from Favorite" });
});

export default router;
