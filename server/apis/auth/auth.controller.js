const authService = require('./auth.service');
const userService = require('../user/user.service');

exports.login = (req, res, next) => {
    
    const data = userService.getUser(req.body);
    if (data) {
        res.status(200).json({ data: data });
    } else {
        res.status(200).json({ msg: 'Account does not exist' });
    }

};

exports.register = async (req, res, next) => {
    try {
        const isUserExist = await userService.getUser(req.body);
        console.log('isUserExist', isUserExist)
        if (isUserExist) {
            res.status(200).json({ msg: 'Account already exist' });
        } else {
            const result = await userService.create(req.body);
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

