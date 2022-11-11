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
        
        // send the token
        sendToken(user, 201, res);
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
        sendToken(user, 200, res);
        console.log("User Logged In")
    } catch (error) {
        console.log("error logging in")
        next(error)
    }
};

exports.logout = (req, res, next) => {
    res.send("Logout Route");
};


exports.forgotpassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user) {
            return next(new ErrorResponse("Email could not be sent", 404));
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

        const message = `
            <h1>You have requested a password reset</h1>
            <p>Please go to this link to reset your password</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `;

        try {
        
        } catch(error) {

        }

    } catch(error) {
        next(error) 
    }
};

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route");
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token });
}