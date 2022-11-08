const User = require('../models/User');

exports.getPrivateData = (req, res, next) => {
    console.log("someone is trying to access private data");

    // return the names of all users in the database
    User.find({}, (err, users) => {
        data = users.map(user => user.email);
        if (err) {
            return next(new ErrorResponse('Could not find any users', 404));
        } else {
            res.status(200).json({
                success: true,
                data: data
            });
        }
    });
};

exports.deletePrivateData = (req, res, next) => {
    console.log("someone is trying to delete private data");

    // delete the first user in the database
    User.findOneAndDelete({}, (err, user) => {
        if (err) {
            return next(new ErrorResponse('Could not find any users', 404));
        } else {
            res.status(200).json({
                success: true,
                data: user
            });
        }
    });
}