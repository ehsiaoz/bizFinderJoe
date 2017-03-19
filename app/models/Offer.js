var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var OfferSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc_short: {
    type: String
  },
  desc_full: {
    type: String
  },
  notes: {
    type: Array
  },
  isTypeDollarOff: Boolean,
  isTypePercentOff: Boolean,
  isTypeOther: Boolean,
  orig_price: {
    type: Number
  },
  deal_price: {
    type: Number
  },
  percent_off: {
    type: Number
  },
  thumbnail_url: {
    type: String
  },
  business: [{
    type: Schema.Types.ObjectId,
    ref: "Business"
  }],
  expiration_date: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

var Offer = mongoose.model('Offer', OfferSchema);

module.exports = Offer;
