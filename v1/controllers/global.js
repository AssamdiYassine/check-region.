const Credential = require('../../models/credential');
const Country = require('../../models/country');
const mongoose = require("mongoose");

module.exports = {
  CheckUserCountry: async (req, res, next) => {
    try {
      // Get Params
      const { credential } = req.params
      // Search for the given email
      let userEmail = await Credential.findOne({ email: credential }).populate('country');
      let userPhone = await Credential.findOne({ phone: credential }).populate('country');
      // Check if Error
      if (userPhone) {
        res.status(200).json({ user: userPhone });
        return;
      } else if(userEmail) {
        res.status(200).json({ user: userEmail });
        return;
      } else {
        res.status(200).json({ user: null, error: true });
        return;
      }

    } catch (error) {

      throw error;

    }
  },
  CheckRegisterUserCountry: async (req, res, next) => {
    try {
      // Get Params
      const { email, phone } = req.body
      // Search for the given email
      let userEmail = await Credential.findOne({ email }).populate('country');
      let userPhone = await Credential.findOne({ phone }).populate('country');
      // Check if Error
        res.status(200).json({ userPhone, userEmail });
        return;
    } catch (error) {
      throw error;
    }
  },

  CreateNewUserCredential: async (req, res, next) => {
    try {
      const { email, phone, regime } = req.body
      // Search for the given email
      let user = await Credential.findOne({ $or: [{email}, {phone}] });

      // Check if Error
      if (user != null) {
        res.status(200).json({ message: 'crdentials already exists', error: true });
        return;
      }

      const country = await Country.findById(mongoose.Types.ObjectId(req.body.country));

      user = new Credential();
      user.regime = regime;
      user.email = email;
      user.phone = phone;
      user.country = country._id;
      await user.save();

      // Send all Countries to client
      res.status(200).json({ user });

    } catch (error) {
      throw error;
    }
  },

  GetAllCountries: async (req, res, next) => {
    try {
      // Fetch all Countries from DB
      const countries = await Country.find();

      // Send all Countries to client
      res.status(200).json({ countries });

    } catch (error) {
      throw error;
    }
  }
}