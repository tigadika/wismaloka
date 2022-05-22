const router = require("express").Router();
const houseRoutes = require("./houseRoutes");
const specRoutes = require("./specRoutes");
const userRoutes = require("./userRoutes");

router.use("/houses", houseRoutes);
router.use("/specs", specRoutes);
router.use("/", userRoutes);

module.exports = router;
