import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in ms
    httpOnly: true, // don't let js access this cookie , prevent xss attacks
    sameSite: "strict", // prevent csrf attacks
    secure: process.env.NODE_ENV !== "development", // prevent csrf attacks
  });
};

export default generateTokenAndSetCookie;
