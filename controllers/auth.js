const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
    // destructuring the request body
    const { username, email, password } = req.body;
    
    // try catch block for error handling
    try {
        // create a new user
        const user = await User.create({
            username,
            email,
            password,
        });
        
        res.status(201).json({
            success: true,
            user,
        });

    } catch (error) {
        next(error)
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400));
    }

    try {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        res.status(200).json({ success: true, token: "your token"});
    } catch (error) {
        next(error)
    }
};

exports.logout = (req, res, next) => {
    res.send("Logout Route");
};


exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route ");
};

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route");
};