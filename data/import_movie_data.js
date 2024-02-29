const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Movie = require('./../model/moviesModel');

// Load environment variables from .env file
dotenv.config();

// Read movie data from JSON file
const movieData = JSON.parse(fs.readFileSync('data/movies.json', 'utf-8'));

// Connect to MongoDB
mongoose.connect(process.env.CON_STR, {
    // Additional connection options if needed
}).then((conn) => {
    console.log('MongoDB connection successful');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Function to delete all movies
const deleteMovies = async () => {
    try {
        await Movie.deleteMany();
        console.log('Deleted successfully');
    } catch (error) {
        console.error('Deletion error:', error);
    }
    process.exit();
};

// Function to upload movies
const uploadMovie = async () => {
    try {
        await Movie.create(movieData);
        console.log('Uploaded successfully');
    } catch (error) {
        console.error('Upload error:', error);
    }
    process.exit();
};

// Command-line argument handling
if (process.argv[2] === '--import') {
    uploadMovie();
} else if (process.argv[2] === '--delete') {
    deleteMovies();
} else {
    console.error('Invalid command. Please use --import or --delete.');
    process.exit(1); // Exit with a non-zero status code indicating an error
}
