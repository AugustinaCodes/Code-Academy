import UserList from "./UserList.js";

export async function getUserList(req, res) {
    try {
        const userList = await UserList.find();

        res.json(userList)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function addUserList(req, res) {
    const { name, username, email } = req.body;

    if (!name || !username || !email) {
        res.status(400).json({ error: "All fields required" });
    return;
    }

    try {
        const newUserList = new UserList({
            name,
            username,
            email
        });

        await newUserList.save();

        res.json(newUserList)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}