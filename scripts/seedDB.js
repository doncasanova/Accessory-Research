const mongoose = require("mongoose");
const db = require("../models");

// This file empties collections and inserts test data

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/accessory-research"
  // "mongodb://heroku_tqfzrg5k:m7h5v314ub469ebraais72k7hf@ds113122.mlab.com:13122/heroku_tqfzrg5k"
);


const customerSeed = [
  {
    _id: mongoose.Types.ObjectId("5b61135457150d66ee255b2a"),
    email: "mary@gmail.com",
    password: "password",
    shippingAddress: { name: 'Mary Doe', addr1: 'Suite 1010', addr2: '1000 Park Place', city: 'Anytown', state: 'NY', zip: '21212' },
    billingAddress: { name: 'Mary Doe', addr1: 'Suite 1010', addr2: '1000 Park Place', city: 'Anytown', state: 'NY', zip: '21212' },
    orders: ["5b6118dd7a0ae86779da6364"]
  },
  {
    _id: mongoose.Types.ObjectId("5b61135457150d66ee255b2b"),
    email: "james@gmail.com",
    password: "password",
    shippingAddress: { name: 'James Johnson', addr1: '1000 Main St', city: 'Southtown', state: 'NJ', zip: '31313-3232' },
    billingAddress: { name: 'James Johnson', addr1: '1000 Main St', city: 'Southtown', state: 'NJ', zip: '31313-3232' }
  }
];


const productSeed = [
  {
    _id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f047"),
    sku: "C108-Q8",
    name: "AR Static B Gone Heavy Duty (Quart Cans)",
    description: "Formulated for today's Hi-tech graphic arts, digital photo processing and printing equipment. Used where machinery and processes generate static electricity.",
    features: "Kills static on contact. Once applied to a work station or machine it lasts for hours.",
    size: "quart- 8 per case",
    price: 246.75,
    images: ["/images/HeavyDuty.jpg"],
    stock: 100,
    shipping_weight: {value: 14, units: "lbs"},
    cart_id: "S2UY7NNLY3DK4"
  },
  {
    _id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f048"),
    sku: "C108-S",
    name: "AR Static B Gone Heavy Duty (Spray Bottles)",
    description: "Formulated for today's Hi-tech graphic arts, digital photo processing and printing equipment. Used where machinery and processes generate static electricity.",
    features: "Kills static on contact. Once applied to a work station or machine it lasts for hours.",
    size: "8oz spray bottle- 25 per case",
    price: 287.70,
    images: ["/images/HeavyDuty.jpg"],
    stock: 100,
    shipping_weight: {value: 14, units: "lbs"},
    cart_id: "FKSL8TW7AZDB2"
  },
  {
    _id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f049"),
    sku: "F110-Q8",
    name: "AR Static B Gone Plastic Cleaner (Quart Cans)",
    description: "Is completely safe for most types of plastic, including Acrylic and Polycarbonate. Will not attack flame treated edges. Dries fast -- will not streak or leave a residue. Cleans the surface and kills all static electricity while preparing the piece for Screen Printing or Painting. One quick application and wipe removes dirt, grease and fingerprints.The AR anti-static action keeps dust and dirt from being attracted to the cleaned surface.",
    features: "Kills static on contact. Will not streak or leave a residue. The best and most cost effective plastic cleaner on the market.",
    size: "quart- 8 per case",
    price: 246.75,
    images: ["/images/Plastic.jpg"],
    stock: 100,
    shipping_weight: {value: 14, units: "lbs"},
    cart_id: "825S3G64SF4SW"
  },
  {
    _id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f050"),
    sku: "F110-S",
    name: "AR Static B Gone Plastic Cleaner (Spray Bottles)",
    description: "Is completely safe for most types of plastic, including Acrylic and Polycarbonate. Will not attack flame treated edges. Dries fast -- will not streak or leave a residue. Cleans the surface and kills all static electricity while preparing the piece for Screen Printing or Painting. One quick application and wipe removes dirt, grease and fingerprints.The AR anti-static action keeps dust and dirt from being attracted to the cleaned surface.",
    features: "Kills static on contact. Will not streak or leave a residue. The best and most cost effective plastic cleaner on the market.",
    size: "8oz spray bottle- 25 per case",
    price: 287.70,
    images: ["/images/Plastic.jpg"],
    stock: 100,
    shipping_weight: {value: 14, units: "lbs"},
    cart_id: "RSYK77JNEPHQJ"
  },
  {
    _id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f051"),
    sku: "B104-Q8",
    name: "AR Static B Gone Film Cleaner (Quart Cans)",
    description: "AR Static B Gone Film Cleaner dries extremely fast -- will not streak or leave a residue. Compatible with, and will not dissolve or remove, a water base opaque. One quick application and wipe removes dirt, grease, fingerprints, permanent marker and tape marks from expensive film. The AR anti-static action keeps dust and dirt from collecting on the clean surface. ",
    features: "Completely safe for cleaning any film base, emulsion and prints.",
    size: "quart- 8 per case",
    price: 308.70,
    images: ["/images/FilmCleaner.jpg"],
    stock: 100,
    shipping_weight: {value: 14, units: "lbs"},
    cart_id: "MNX8KAJ6PGNL2"
  },
  {
    _id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f052"),
    sku: "B104-S",
    name: "AR Static B Gone Film Cleaner (Spray Bottles)",
    description: "AR Static B Gone Film Cleaner dries extremely fast -- will not streak or leave a residue. Compatible with, and will not dissolve or remove, a water base opaque. One quick application and wipe removes dirt, grease, fingerprints, permanent marker and tape marks from expensive film. The AR anti-static action keeps dust and dirt from collecting on the clean surface.",
    features: "Completely safe for cleaning any film base, emulsion and prints.",
    size: "8oz spray bottle- 25 per case",
    price: 321.30,
    images: ["/images/FilmCleaner.jpg"],
    stock: 100,
    shipping_weight: {value: 14, units: "lbs"},
    cart_id: "V2ZV95KRWXN48"
  },
  {
    _id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f053"),
    sku: "J140-Q8",
    name: "AR Static B Gone Sreen Printers (Quart Cans)",
    description: "AR Static B Gone Screen Printers can be used to eliminate static electricity on most plastics and substrates to be screened. Static Killer dries quickly and is greaseless. Excellent for cleaning regular films and printer's screen tints.",
    features: "AR Static B Gone Screen Printers  will insure an absolutely clean, static free screen that will not attract dust and dirt.",
    size: "quart- 8 per case",
    price: 246.75,
    images: ["/images/Screen.jpg"],
    stock: 100,
    shipping_weight: {value: 14, units: "lbs"},
    cart_id: "TA3DLMBLNGUSU"
  },
  {
    _id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f054"),
    sku: "J140-S",
    name: "AR Static B Gone Sreen Printers (Spray Bottles)",
    description: "AR Static B Gone Screen Printers can be used to eliminate static electricity on most plastics and substrates to be screened. Static Killer dries quickly and is greaseless. Excellent for cleaning regular films and printer's screen tints.",
    features: "AR Static B Gone Screen Printers  will insure an absolutely clean, static free screen that will not attract dust and dirt.",
    size: "8oz spray bottle- 25 per case",
    price: 287.70,
    images: ["/images/Screen.jpg"],
    stock: 100,
    shipping_weight: {value: 14, units: "lbs"},
    cart_id: "LYLEKUFPGPHXU"
  },
  {
    _id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f055"),
    sku: "D106-S",
    name: " AR Static B Gone Glass & Lens Cleaner (Spray Bottle)",
    description: "AR Static B Gone Glass & Lens Cleaner is formulated for today's Hi-tech graphic arts processes. Use on scanner beds, monitors, copy boards, lenses, dark room and vacuum frames, stripping tables and glass cylinders of Diazo type.",
    features: "Use on monitors and scanners to eliminate static-build up, Will not streak or leave a residue, Keeps dust away from the clean surface eliminating pin holes on negatives, saving valuable opaquing time.",
    size: "8oz spray bottle- 25 per case",
    price: 185.32,
    images: ["/images/GlassCleaner.jpg"],
    stock: 100,
    shipping_weight: {value: 14, units: "lbs"},
    cart_id: "HG39YZC7AR48L"
  }
];


const orderSeed = [
  {
    _id: mongoose.Types.ObjectId("5b6118dd7a0ae86779da6364"),
    products: [{product_id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f047"), quantity: 1}, 
               {product_id: mongoose.Types.ObjectId("5b611293fdd2ae66ca94f048"), quantity: 1}],
    customerId: mongoose.Types.ObjectId("5b61135457150d66ee255b2a"),
    discount: 5.25,
    shipTo: { name: 'Mary Doe', addr1: 'Suite 1010', addr2: '1000 Park Place', city: 'Anytown', state: 'NY', zip: '21212' },
    total: 201,
    status: "Ordered"
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

  db.Order
    .remove({})
    .then(() => db.Order.collection.insertMany(orderSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
