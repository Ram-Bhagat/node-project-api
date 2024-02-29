const movieController = require('./../controller/movieController')
const express = require('express');
const router =  express.Router();


router.route('/')
.get(movieController.getAllMovies)
.post(movieController.addNewMovie);

router.route('/:id')
.get(movieController.getMovieById)
.patch(movieController.updateMovie)
.delete(movieController.deleteMovie)


module.exports = router;