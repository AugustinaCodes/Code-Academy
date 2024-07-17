import User from '../Models/User.js'
import bcrypt from  'bcrypt';

export async function registerNewUser(req, res) {
    const { username, password, name } = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        username,
        password: hashedPassword,
        name
    })

    await newUser.save();

    res.json(newUser)
}

export async function loginUser(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username })

    if (!user) {
        return res.status(404).json({ err: "user not found" })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (isPasswordCorrect) {
        res.json({ message: "you are logged in" })
    } else {
        res.json({ message: "password incorrect"})
    }

}