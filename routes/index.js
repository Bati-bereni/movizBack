var express = require("express");
var router = express.Router();

router.get("/movies", (req, res) => {
  fetch(
    " https://api.themoviedb.org/3/discover/movie?api_key=59af57f94882c4a54dd15aa7e5b2f2d2"
  )
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data.results });
    });
});

module.exports = router;
