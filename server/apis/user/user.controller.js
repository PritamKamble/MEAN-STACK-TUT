const userService = require('./user.service');


exports.getUsers = async (req, res, next) => {
    try {
        const result = await userService.list();
        res.status(500).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}