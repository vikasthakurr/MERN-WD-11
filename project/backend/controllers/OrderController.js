import express from "express";
import jwt from "jsonwebtoken";
import Order from "../Schema/Order.js";
import User from "../Schema/User.js";
import dotenv from "dotenv";

dotenv.config();

const OrderController = express.Router();

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Authorization header missing" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// Middleware to check if admin
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user && user.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Require Admin Role" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new order
OrderController.post("/", verifyToken, async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod, paymentStatus } = req.body;
    const newOrder = new Order({
      user: req.user.id,
      items,
      totalAmount,
      paymentMethod,
      paymentStatus: paymentStatus || "pending",
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all orders (Admin Only)
OrderController.get("/all", verifyToken, isAdmin, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "username email")
      .sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user orders
OrderController.get("/myorders", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default OrderController;
