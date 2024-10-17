import User from "../models/User.js";

const authService = {
    register(username, email, password){
        return User.create({
            username,
            email,
            password
        });
    }
};

export default authService;