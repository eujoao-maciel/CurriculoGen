import { User } from "../../models/User.js"
import jwt from "jsonwebtoken"

export const generateToken = async () => {
    const user = await User.create({
        name: "name",
        email: "name@email.com",
        password: "passwordTest",
    })

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    return { token, user }
}
