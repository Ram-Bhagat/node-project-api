const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, 'Name of movie is required'],
      unique: true
  },
  description: {
      type: String,
      required: [true, 'Description is required']
  },
  duration: {
      type: Number,
      required: [true, 'Duration is required']
  },
  rating: {
      type: Number,
      default: 1.0
  },
  releaseYear: {
      type: Number,
      required: [true, 'Release year is required']
  },
  releaseDate: {
      type: Date,
      required: [true, 'Release date is required']
  },
  actor: {
      type: [String],
      required: [true, 'Actor field is required']
  },
  director: {
      type: [String],
      required: [true, 'Director field is required']
  },
  price: {
      type: Number,
      required: [true, 'Price field is required']
  },
  genres: {
      type: [String],
      required: [true, 'Genres field is required']
  },
  createdAt: {
      type: Date,
      default: Date.now,
      select:false
  }
});

  
  const Movie = mongoose.model('Movies',movieSchema)

  module.exports = Movie