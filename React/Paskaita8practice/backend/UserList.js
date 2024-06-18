import mongoose from "mongoose"

const userListSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String
})

export default mongoose.model("UserList", userListSchema)