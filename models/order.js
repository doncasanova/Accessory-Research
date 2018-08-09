const mongoose = require("mongoose");
const Customer = require("./customer");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: { type : Array , "default" : [] },
  customer: {type: Schema.Types.ObjectId, ref: Customer},
  discount: { type: Number },
  shipTo: Schema.Types.Mixed,
  total: { type: Number, "default:": 0},
  status: { type: String }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;