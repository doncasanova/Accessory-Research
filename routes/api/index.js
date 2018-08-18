const router = require("express").Router();
const productRoutes = require("./products");
const customerRoutes = require("./customers");
const upsRoutes = require("./ups");
// product routes
router.use("/products", productRoutes);
// ProductDescription routes
router.use("/ProductDescription", productRoutes);
// customer routes
router.use("/customers", customerRoutes);
// ups routes
router.use("/ups", upsRoutes);

module.exports = router;
