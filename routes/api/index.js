const router = require("express").Router();
const productRoutes = require("./products");

// product routes
router.use("/products", productRoutes);
// ProductDescription routes
router.use("/ProductDescription", productRoutes);

module.exports = router;
