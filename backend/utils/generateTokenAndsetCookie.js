import jwt from "jsonwebtoken";
import { config } from "../db/config.js";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, config.jwtSecret, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // more secure
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    sameSite: "strict", // CSRF
  });

  return token;
};

export default generateTokenAndSetCookie;
