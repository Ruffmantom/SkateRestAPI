const router = require("express").Router();
const skaterRoute = require("./skaterRoute");


// gig routes
router.use("/skaters", skaterRoute);


module.exports = router;
