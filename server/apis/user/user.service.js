const User = require('./user.model');

exports.create = async (user) => {
    const userObj = new User({
        email: user.email,
        passWord: user.passWord,
    });

    return await userObj.save();
}


exports.list = async () => {
    return await User.find();
}


exports.getUser = async (user) => {
    return await User.findOne({
        email: user.email,
        passWord: user.passWord,
    });
}