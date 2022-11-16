const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.checkToken = async (req, res, next) => {
    let token;

    // Check if the token is in the header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        next()
    }

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
            const user = await User.findById(decoded.id);
    
            if (user) {
                next()
            }
    
            if (!user) {
                next()
            }
    
        } catch (error) {
            return next(new ErrorResponse('Not authorized to access this route because your token could not be verified', 401));
        }
    }
}