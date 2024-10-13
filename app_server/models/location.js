// const mongoose = require('mongoose');

// const openingTimeSchema = new mongoose.Schema({
//   days: { type: String, required: true },
//   opening: String,
//   closing: String,
//   closed: { type: Boolean, required: true }
// });

// const reviewSchema = new mongoose.Schema({
//   author: String,
//   rating: {
//     type: Number,
//     required: true,
//     min: 0,
//     max: 5
//   },
//   reviewText: String,
//   createdOn: { type: Date, default: Date.now }
// });

// const locationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   address: String,
//   rating: {
//     type: Number,
//     default: 0,
//     min: 0,
//     max: 5
//   },
//   facilities: [String],
//   coords: {
//     type: { type: String, enum: ['Point'], required: true },
//     coordinates: { type: [Number], required: true }
//   },
  
//   openingTimes: [openingTimeSchema],
//   reviews: [reviewSchema]
// });
// mongoose.model('Location', locationSchema);
// locationSchema.index({ coords: '2dsphere' });

// module.exports = mongoose.model('Location', locationSchema);


const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: { type: Number, min: 1, max: 5 },
  timestamp: Date,
  reviewText: String
});

const openingTimesSchema = new mongoose.Schema({
  days: String,
  opening: String,
  closing: String,
  closed: Boolean
});

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  rating: { type: Number, min: 1, max: 5 },
  facilities: [String],
  coords: {
    lat: Number,
    lng: Number
  },
  openingTimes: [openingTimesSchema],
  reviews: [reviewSchema],
  mapUrl: String,
  imageSrc: String,
  gmail: String,
  phno: String
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;