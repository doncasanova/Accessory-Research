const router = require("express").Router();
const productRoutes = require("./products");
const customerRoutes = require("./customers");

// product routes
router.use("/products", productRoutes);
// ProductDescription routes
router.use("/ProductDescription", productRoutes);
// customer routes
router.use("/customers", customerRoutes);

module.exports = router;
