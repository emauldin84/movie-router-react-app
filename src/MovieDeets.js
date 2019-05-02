import React from 'react';
import Movies from './Movies';
import { Route, Link } from 'react-router-dom'

function MovieDeets({movies, match}) {
    
    console.log("MovieDeets match.params: ", match.params);
    console.log("Movies: ", {movies})
    let movieDetails = movies.find((movieDeets) => {
        return(
            movieDeets.title === match.params.movie
        );
    })
    console.log(movieDetails.poster)
    return(
        <>
            <h4>{movieDetails.title}</h4>
            <h4>{movieDetails.year}</h4>
            <h4>EMDB Score: {movieDetails.EMDB_Score}</h4>
            <img src={movieDetails.poster} alt={`${movieDetails.title} movie poster`} />
        </>
    )
}


export default MovieDeets;
