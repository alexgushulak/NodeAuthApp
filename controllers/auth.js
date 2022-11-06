const User = require("../models/User");

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
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).json({ success: false, error: "Please provide an email and password"})
    }

    try {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            res.status(404).json({ success: false, error: "Invalid Credentials"});
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            res.status(404).json({ success: false, error: "Invalid Credentials"});
        }

        res.status(200).json({ success: true, token: "your token"});
    } catch (error) {
        res.status(500).json({ success: false, error: error.message});
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