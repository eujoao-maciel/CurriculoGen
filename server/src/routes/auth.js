import { Router } from "express"
import {
    registerUser, loginUser,
    getUserById, getUserResumes,
} from "../controllers/userController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

export const authRoutes = Router()

authRoutes.post("/register", registerUser)
authRoutes.post("/login", loginUser)
authRoutes.get("/data", authMiddleware, getUserById)
authRoutes.get("/resumes", authMiddleware, getUserResumes)
