const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/products", bookRoutes);

module.exports = router;
