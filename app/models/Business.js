var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var BusinessSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  street_address: String,
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    validate:[]
  },
  website_url: String,
  fb_url: String,
  phone: String,
  email: String,
  first_name: String,
  last_name: String,
  review_count: Number,
  rating: Number,
  thumbnail_url: String,
  desc_snippet: String,
  desc_overview: String,
  desc_notes: Array,
  photo_count: Number,
  categories: [{
    type: Schema.Types.ObjectId,
    ref: "Category"
  }],
  profile_complete: Boolean,
  has_Snippet: Boolean,
  has_thumbnail: Boolean,
  has_activeOffer: Boolean,
  offers: [{
    type: Schema.Types.ObjectId,
    ref: "Offer"
  }]
});

var Business = mongoose.model('Business', BusinessSchema);

module.exports = Business;
