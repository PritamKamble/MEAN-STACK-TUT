const empService  = require("./employee.service")

exports.getEmployees = (req, res, next) => {
    res.status(200).json(empService.getEmployees());
}