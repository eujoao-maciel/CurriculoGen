import { User } from "../../models/User.js"

export const createUser = async (password="passwordtest") => {
    const user = await User.create({
        name: "name",
        email: "name@email.com",
        password  
    })

    return user
}
