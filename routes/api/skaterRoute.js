const router = require("express").Router();
const skaterController = require("../../controllers/skaterController");

// skater routes
router.route("/")
.get(skaterController.findAll)
.post(skaterController.create)

router.route(":id")
.get(skaterController.findById)
.put(skaterController.update)
.delete(skaterController.remove)

module.exports = router;