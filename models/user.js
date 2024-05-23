const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  isVegetarian: {
    type: Boolean,
    required: true
  },
  isVegan: {
    type: Boolean,
    required: true
  }
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: [foodSchema]
});



const User = mongoose.model('User', userSchema);

module.exports = User;
