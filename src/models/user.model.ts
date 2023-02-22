import mongoose from "mongoose";

export interface User {
    firstName: string; 
    lastName: string;
}

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true}, 
    lastName: {type: String, requuired: true}
})

const UserModel = mongoose.model("user", userSchema);

export default UserModel;