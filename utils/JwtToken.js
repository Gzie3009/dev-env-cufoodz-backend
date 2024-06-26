const user = require("../models/userModel");

// Creating a Token and saving it in cookie
const sendToken = (user ,statusCode , res) => {
    const token = user.getJWTToken();

    // Options for Cookie
    const options = {
        expires : new Date (
           Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        // secure: true,
        // sameSite: 'none',
        httpOnly : true,
    };

    res.status(statusCode).cookie('token',token,options).json({
        success: true,
        user,
        token,
    })

}

module.exports = sendToken;