import User from "../models/User.js";

const authService = {
    register(username, email, password, rePassword){
        const user = User.findOne({ $or: [{ email }, { username }] }); // with MongoDB
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
    }
};

export default authService;