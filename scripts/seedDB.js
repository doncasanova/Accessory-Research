const mongoose = require("mongoose");
const db = require("../models");

// This file empties collections and inserts test data

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/accessory-research"
);


const customerSeed = [
  {
    email: "mary@gmail.com",
    password: "password",
    shippingAddress: {name: 'Mary Doe', addr1: 'Suite 1010', addr2: '1000 Park Place', city: 'Anytown', state: 'NY', zip: '21212'},
    billingAddress:{name: 'Mary Doe', addr1: 'Suite 1010', addr2: '1000 Park Place', city: 'Anytown', state: 'NY', zip: '21212'}
  },
  {
    email: "james@gmail.com",
    password: "password",
    shippingAddress: {name: 'James Johnson', addr1: '1000 Main St', city: 'Southtown', state: 'NJ', zip: '31313-3232'},
    billingAddress: {name: 'James Johnson', addr1: '1000 Main St', city: 'Southtown', state: 'NJ', zip: '31313-3232'}
  }
];

db.Customer
  .remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
