import jwt from "jsonwebtoken" // Ensure jwt is imported

export const auth = (req, res, next) => {
  let token = req.header("Authorization")?.split(" ")[1] // Extract token from "Bearer <token>"
  
  if (!token) {
    token = req.header("x-auth-token") // Support x-auth-token as well
  }

  console.log("Extracted Token:", token) // Debugging

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log("Decoded Token:", decoded) // Debugging
    req.user = decoded.user
    next()
  } catch (err) {
    console.error("JWT Error:", err.message) // Debugging
    res.status(401).json({ msg: "Token is not valid" })
  }
}
