import React from 'react';
import Movies from './Movies';
import { Route, Link } from 'react-router-dom'

function MovieDeets({movies, match}) {
    
    console.log("MovieDeets match.params: ", match.params);
    console.log("Movies: ", {movies})
    let movieDetails = movies.filter((movieDeets) => {
        return(
            movieDeets.title === match.params.movie
        );
    })
    console.log(movieDetails)
    return(
        <>
            <h4>{movieDetails[0].title}</h4>
            <h4>{movieDetails[0].year}</h4>
            <h4>EMDB Score: {movieDetails[0].EMDB_Score}</h4>
        </>
    )
}


export default MovieDeets;


// let targetName = (this.state.allCharactersArray.filter (function(character) { return character.name === charName}))
