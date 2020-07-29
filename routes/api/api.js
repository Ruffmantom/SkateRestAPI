const router = require("express").Router();
const skaterController = require("../../controllers/skaterController");

// skater routes
router.route("/skaters")
.get(skaterController.findAll)
.post(skaterController.create)

router.route("/skater/:id")
.get(skaterController.findById)
.put(skaterController.update)
.delete(skaterController.remove)
