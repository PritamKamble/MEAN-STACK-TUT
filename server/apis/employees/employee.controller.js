const empService  = require("./employee.service")

exports.getEmployees = (req, res, next) => {
    console.log('req.params', req.params)
    res.status(200).json(empService.getEmployees());
}