import bcrypt from 'bcrypt';

import jwt from "../lib/jwt.js";
import User from "../models/User.js";

const authService = {
    async register(username, email, password, rePassword){
        const user = await User.findOne({ $or: [{ email }, { username }] }); // with MongoDB
        // const user = User.findOne().or([{ email }, { username }]); // with Mongoose

        if (password !== rePassword){
            throw new Error('Password missmatch')
        }

        if (user){
            throw new Error('User already exists')
        }

        const newUser = await User.create({
            username,
            email,
            password
        });

        return this.generateToken(newUser);
    },
    async login(email, password){
        const user = await User.findOne({ email });

        if (!user){
            throw new Error('Invalid user!');
        };

        const isValid  = await bcrypt.compare(password, user.password);

        if (!isValid){
            throw new Error('Invalid user or password!');
        };

        return this.generateToken(user);
    },
    async generateToken(user){
        const payload = {
            _id: user._id,
            email: user.email,
            username: user.username
        };
        const header = { expiresIn: '2h' };

        const token = await jwt.sign(payload, process.env.JTW_SECRET, header);

        return token;
    }
};

export default authService;