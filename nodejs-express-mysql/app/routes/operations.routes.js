module.exports = app => {
    const operation = require("../controller/operations.controller.js");
    var router = require("express").Router();
    // Create a new Operation
    router.post("/", operation.create);
    // Retrieve all Operation
    router.get("/", operation.findAll);
    // Retrieve a single Operation with id
    router.get("/:id", operation.findBYType);
    // Update a Operation with id
    router.put("/:id", operation.update);
    // Delete a Operation with id
    router.delete("/:id", operation.delete);
    // Delete all Operation
    router.delete("/", operation.deleteAll);
    app.use('/api/operation', router);
  };
