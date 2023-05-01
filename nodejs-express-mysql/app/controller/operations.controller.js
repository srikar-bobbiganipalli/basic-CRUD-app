const db = require("../models");
const Operations = db.operations;
const Op = db.Sequelize.Op;
// Create and Save a new Operations
exports.create = (req, res) => {
    // Validate request
    console.log(req.body)
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Operations
    const operation = {
      title: req.body.title,
      description: req.body.description,
      type: req.body.type
    };
    // Save Operations in the database
    Operations.create(operation)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Operations."
        });
      });
  };
// Retrieve all Operationss from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Operations.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Operationss."
        });
      });
  };
// Find a single Operations with an type
exports.findBYType = (req, res) => {
    const type = req.params.id;
    console.log(type)
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
    console.log(condition)
    Operations.findAll({ where: condition })
          .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Operations with type=${type}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Operations with id=" + id
        });
      });
  };
// Update a Operations by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Operations.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operations was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Operations with id=${id}. Maybe Operations was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Operations with id=" + id
        });
      });
  };
// Delete a Operations with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Operations.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operations was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Operations with id=${id}. Maybe Operations was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Operations with id=" + id
        });
      });
  };
// Delete all Operationss from the database.
exports.deleteAll = (req, res) => {
    Operations.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Operationss were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Operationss."
        });
      });
  };