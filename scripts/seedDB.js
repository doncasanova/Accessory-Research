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


const productSeed = [
  {
    sku: "C108-Q8",
    name: "AR Static B Gone Heavy Duty",
    description: "Formulated for today's Hi-tech graphic arts, digital photo processing and printing equipment. Used where machinery and processes generate static electricity.",
    features: "Kills static on contact. Once applied to a work station or machine it lasts for hours.",
    size: "quart- 8 per case",
    price: 100.50,
    images:["/public/images/HeavyDuty.jpg"],
    stock: 100
  },
  {
    sku: "C108-S",
    name: "AR Static B Gone Heavy Duty",
    description: "Formulated for today's Hi-tech graphic arts, digital photo processing and printing equipment. Used where machinery and processes generate static electricity.",
    features: "Kills static on contact. Once applied to a work station or machine it lasts for hours.",
    size: "8oz spray bottle- 25 per casee",
    price: 100.50,
    images:["/public/images/HeavyDuty.jpg"],
    stock: 100
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

  db.Product
    .remove({})
    .then(() => db.Product.collection.insertMany(productSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
