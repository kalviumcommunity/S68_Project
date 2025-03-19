require("dotenv").config({ path: "./src/config/.env" }); // Ensure .env is loaded
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./src/controllers/Router");
const authMiddleware = require("./src/middleware/authMiddleware");

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Check MongoDB URI
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("❌ MONGO_URI is undefined. Make sure .env file is loaded.");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/tasks", authMiddleware, router); // Use Task Routes with Authentication

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Daily Routine & To-Do List API!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
