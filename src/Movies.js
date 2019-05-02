import React from 'react';
import {Link} from 'react-router-dom'


// change to app and pass props to moviedeets
function Movies({movies, match, history}) {
    console.log(movies)
    console.log(match)

    const movieLinks = movies.map((movie, i) => (
        <Link key={i} className='movie-list' to={`${match.path}/${movie.title}`}>{movie.title}</Link>
            )
        )

    return (
        <>
        <h4>Movies</h4>
        <div className="movie-list-parent">
            {movieLinks}
        </div>
        </>
        
    )
}


export default Movies;