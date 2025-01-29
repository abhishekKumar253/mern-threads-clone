import express from "express";
import {
  signup,
  login,
  logout,
  getMe,
  freezeAccount,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/freeze", protectRoute, freezeAccount);

export default router;
