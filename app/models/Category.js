var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  businesses: [{
    type: Schema.Types.ObjectId,
    ref: "Business"
  }],
});

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
