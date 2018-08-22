const router = require("express").Router();
const productRoutes = require("./products");
const customerRoutes = require("./customers");
const upsRoutes = require("./ups");

const encryptLib = require('../../modules/encryption.js'); // The '.js' is optional, but I like it
const Customer = require('../../models/customer.js');
const userStrategy = require('../../strategies/user-strategy.js');

// product routes
router.use("/products", productRoutes);
// ProductDescription routes
router.use("/ProductDescription", productRoutes);
// customer routes
router.use("/customers", customerRoutes);
// ups routes
router.use("/ups", upsRoutes);

// <passport-stuff>
router.get('/', (req, res) => {
    // check if logged in
    if (req.isAuthenticated()) {
      res.send(req.user);
    } else {
      res.sendStatus(403);
    }
  });
  
  // REGISTER:
  router.post('/register', (req, res, next) => {
    const email = req.body.email;
    const password = encryptLib.encryptPassword(req.body.password);
    const newCustomer = new Customer({ email, password });
    console.log(email, password, "register")
    newCustomer.save()
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => { next(err); });
  });
  
  // LOGIN:
  router.post('/login', userStrategy.authenticate('local'), (req, res) => {
console.log("in post route")
    res.sendStatus(200);
  });
  
  // LOGOUT (clear session data):
  router.get('/logout', (req, res) => {
    // Use passport's built-in method to log out the user
    req.logout();
    res.sendStatus(200);
  });
  
  // </passport-stuff>
  
module.exports = router;
