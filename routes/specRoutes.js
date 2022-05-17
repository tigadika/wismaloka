const specifitationRoute = require("express").Router();
const SpecController = require("../controllers/specController");

specifitationRoute.get("/", SpecController.getAllSpecs);
specifitationRoute.post("/", SpecController.createSpec);
specifitationRoute.put("/:id", SpecController.updateSpec);
specifitationRoute.delete("/:id", SpecController.deleteSpec);

module.exports = specifitationRoute;
