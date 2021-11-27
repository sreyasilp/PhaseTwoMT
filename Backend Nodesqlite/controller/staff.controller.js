const staffDao = require('../dao/staff.dao');
var staffController = {
    addStaff: addStaff,
    findStaffs: findStaffs,
    findStaffById: findStaffById,
    updateStaff: updateStaff,
    deleteById: deleteById
}

function addStaff(req, res) {
    let staff = req.body;
    staffDao.create(staff).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findStaffById(req, res) {
    staffDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    staffDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Staff deleted successfully",
                staff: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateStaff(req, res) {
    staffDao.updateStaff(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Staff updated successfully",
                staff: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findStaffs(req, res) {
    staffDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = staffController;