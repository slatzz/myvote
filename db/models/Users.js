const { Schema, model } = require('mongoose');
const { TRUE } = require('node-sass');

const usersSchema = new mongoose.Schema({
  voter_device_id: {
    // retreved from the we vote api
    type: String,
    unique: true,
    default: null,
    // required: true
  },
  googleId: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  salt: String,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    default: null,
  },
  party: {
    type: String,
    default: 'independent',
  },
  address: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  zipcode: {
    type: String,
    required: true,
  },

  pledge: {
    type: Number,
    default: 1,
  },
  badgeUrl: String,
  badgeId: {
    type: Number,
    default: 1,
  },
});

const Users = model('Users', usersSchema);

module.exports = Users;
