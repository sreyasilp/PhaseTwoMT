const Visit = require("../models/Visit");
var visitDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateVisit: updateVisit,
};

function findAll() {
  return Visit.findAll();
}

function findById(id) {
  return Visit.findByPk(id);
}

function deleteById(id) {
  return Visit.destroy({ where: { id: id } });
}

function create(visit) {
  var newVisit = new Visit(visit);
  return newVisit.save();
}

function updateVisit(visit, id) {
  var updateVisit = {
    customer_name: visit.customer_name,
    password: visit.password,
    first_name: visit.first_name,
    last_name: visit.last_name,
    mobile_no: visit.mobile_no,
    date: visit.date,
  };
  return Visit.update(updateVisit, { where: { id: id } });
}
module.exports = visitDao;
