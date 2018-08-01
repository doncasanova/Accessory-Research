const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: { type : Array , "default" : [] },
  customer: Schema.Types.ObjectId,
  discount: { type: Number },
  shipTo: Schema.Types.Mixed,
  total: { type: Number, "default:": 0},
  status: { type: String }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;