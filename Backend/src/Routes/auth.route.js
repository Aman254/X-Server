import express from "express";
import trimrequest from "trim-request";
import {
  register,
  login,
  logout,
  refreshToken,
} from "../Controllers/auth.controller.js";

import {
  getAllUsers,
  getUser,
  updateUser,
} from "../Controllers/user.controller.js";

const router = express.Router();

router
  .route("/register")
  .post(trimrequest.all, register)
  .get(trimrequest.all, getAllUsers)
  .get(trimrequest.all, getUser);

router.route("/register/:id").patch(trimrequest.all, updateUser);

router.route("/login").post(trimrequest.all, login);

router.route("/logout").post(trimrequest.all, logout);

router.route("/refreshToken").post(trimrequest.all, refreshToken);

export default router;
