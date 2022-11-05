const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    const movieId = req.query.query;
    console.log('movieID', movieId);
    // want to query for title, description, poster, and all genres for the movie
    const sqlText = `
                    SELECT 
                        movies.*, 
                        json_agg(genres) AS genres
                    FROM movies
                    LEFT JOIN movies_genres
                        ON movies_genres.movie_id = movies.id
                    LEFT JOIN genres
                        ON movies_genres.genre_id = genres.id
                    WHERE movies.id = $1
                    GROUP BY movies.id;
                    `;
    pool.query(sqlText, [movieId])
        .then(dbRes => {
            // send back the first item in the array
            res.send(dbRes.rows[0]);
        })
});

module.exports = router;