const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  names: {
    ar: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
    de: {
      type: String,
      required: true,
    },
    fr: {
      type: String,
      required: true,
    }
  },
  archived: {
    type: Boolean,
  },
});

const Country = mongoose.model('countrie', countrySchema);

// Export the Model
module.exports = Country;