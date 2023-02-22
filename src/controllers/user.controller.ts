import UserModel, { User } from "../models/user.model";
import { Request, Response } from "express";

const addUser = async (req: Request, res: Response) => {
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
}

// const addPropertyToUser = (user: User) => {
//     const newUser = {...user, newProperty: true}
// }

export { addUser }