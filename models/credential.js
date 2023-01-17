const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const credentialSchema = new Schema({
  username: {
    type: String,
    // required: true,
    // unique: true
  },
  regime: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
    unique: true
  },
  phone: {
    type: String,
    // required: true,
    unique: true
  },
  country: {type: Schema.Types.ObjectId, ref: 'countrie'},  
  archived: {
    type: Boolean,
  },
}, { timestamps: true });


credentialSchema.pre('save', async function(next) {
  await this.populate('country').execPopulate();
  next()
})


const Credential = mongoose.model("credentials", credentialSchema);

// Export the Model
module.exports = Credential;
