const router = require("express").Router();
const bookRoutes = require("./products");

// Book routes
router.use("/products", bookRoutes);

module.exports = router;
