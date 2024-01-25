import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "20d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // more secure
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    sameSite: "strict", // CSRF
  });

  return token;
};

export default generateTokenAndSetCookie;
