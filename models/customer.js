const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  email: { type: String, required: true },        // email (doubles as username)
  password: { type: String, required: true },     // encrypted password
  shippingAddress: Schema.Types.Mixed,            // Object {name: a, addr1: b, addr2: c ...}
  billingAddress: Schema.Types.Mixed,             // Object {name: a, addr1: b, addr2: c ...}
  cart: { type : Array , "default" : [] },        // Array of Objects {product_id: x, quantity: y}
  orders: { type : Array , "default" : [] }       // Array of Order _id
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;