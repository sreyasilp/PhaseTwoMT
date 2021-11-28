const visitDao = require('../dao/visit.dao');
var visitController = {
    addVisit: addVisit,
    findVisits: findVisits,
    findVisitById: findVisitById,
    updateVisit: updateVisit,
    deleteById: deleteById
}

function addVisit(req, res) {
    let visit = req.body;
    visitDao.create(visit).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findVisitById(req, res) {
    visitDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    visitDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Visit deleted successfully",
                visit: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateVisit(req, res) {
    visitDao.updateVisit(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Visit updated successfully",
                visit: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findVisits(req, res) {
    visitDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = visitController;