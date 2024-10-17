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

        return User.create({
            username,
            email,
            password
        });
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

        const payload = {
            _id: user._id,
            email,
            username: user.username
        };

        const token = await jwt.sign(payload, process.env.JTW_SECRET);

        return token;
    }
};

export default authService;