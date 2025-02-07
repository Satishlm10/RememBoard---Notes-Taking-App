import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { User } from "../models/index.js"
import { auth } from "../middleware/auth.js"
import dotenv from 'dotenv';
dotenv.config();


const router = express.Router()

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body
    let user = await User.findOne({ where: { email } })

    if (user) {
      return res.status(400).json({ msg: "User already exists" })
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Save user with hashed password
    user = await User.create({ username, email, password: hashedPassword })

    const payload = { user: { id: user.id } }

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err
      res.json({ token })
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received login request:", req.body);

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Payload to include in the JWT
    const payload = { user: { id: user.id } };

    // Sign the JWT token and send it in the response
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;

      // Send the login success message and the token in a single response
      res.status(200).json({ msg: "Login successful", user, token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


// Get User Route (Protected)
router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    })
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

export default router
