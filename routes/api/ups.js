const router = require("express").Router();


// Matches with "/api/products"
router.route("/")
 .post((req, res) => {
     console.log("hello there ", req.body)
     res.sendStatus(201);
 });

module.exports = router;