import express from "express";
import { UserController } from "../controllers/users.controller.js";

const router = express.Router();

const userController = new UserController(); 

router.post("/register",userController.register);
router.post("/login", userController.login);

export { router as userRouter };
