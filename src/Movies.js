import React from 'react';

function Movies({movies}) {
    console.log(movies);
    return (
        <>
        <h4>Movies</h4>
        {
            movies.map((movie, i) => (
            <p key={i} className='movie-list'>{movie.title}</p>
                )
            )
        }
        </>
        
    )
}


export default Movies;