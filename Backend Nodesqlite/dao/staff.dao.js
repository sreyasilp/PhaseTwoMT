const Staff = require("../models/Staff");
var staffDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateStaff: updateStaff,
};

function findAll() {
  return Staff.findAll();
}

function findById(id) {
  return Staff.findByPk(id);
}

function deleteById(id) {
  return Staff.destroy({ where: { id: id } });
}

function create(staff) {
  var newStaff = new Staff(staff);
  return newStaff.save();
}

function updateStaff(staff, id) {
  var updateStaff = {
    email: staff.email,
    password: staff.password,
    first_name: staff.first_name,
    last_name: staff.last_name,
    mobile_no: staff.mobile_no,
    date: staff.date,
  };
  return Staff.update(updateStaff, { where: { id: id } });
}
module.exports = staffDao;
