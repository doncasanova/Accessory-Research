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
      res.send({});
    }
  });
  
  // REGISTER:
  router.post('/register', (req, res, next) => {
    const email = req.body.email;
    const password = encryptLib.encryptPassword(req.body.password);
    const newCustomer = new Customer({ email, password });
    newCustomer.save()
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => { next(err); });
  });
  
  // LOGIN:
  router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.json({
      user_id: req.user._id
    }); 
  });

  router.get('/check-login', (req, res) => {
    res.json({
      status: !!req.user,
      user: req.user
    });
  });
  
  // LOGOUT (clear session data):
  router.get('/logout', (req, res) => {
    // Use passport's built-in method to log out the user
    req.logout();
    res.sendStatus(200);
  });
  
  // </passport-stuff>
  
module.exports = router;
