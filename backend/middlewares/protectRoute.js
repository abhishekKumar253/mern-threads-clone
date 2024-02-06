import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decode.userId).select("-password");

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in protect route: ", error.message);
  }
};

export default protectRoute