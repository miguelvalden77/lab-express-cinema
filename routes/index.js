const express = require('express');
const router = express.Router();
const Movies = require("../models/movies.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) =>{

    Movies.find()
    .then(moviesArr=>{

        res.render("movies", {
           moviesArr
        })
    })
    .catch(error=> next(error))

});

router.get("/movie-details/:id", (req, res, next)=>{
    const idMovie = req.params.id
    Movies.findById(idMovie)
    .then(movie=>{
        res.render("movie-details", {
            movie
        })
    })
    .catch
    (error=>next(error))
})

module.exports = router;
