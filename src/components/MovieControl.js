import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControl = ({ movie }) => {
    const {
        removeMovieFromWatchlist,
        addMovieToWatched, } = useContext(GlobalContext);
    return (
        <div className='inner-card-controls'>
            <button className='ctrl-btn'
                onClick={() => addMovieToWatched(movie)}>
                <i className='fa-fw far fa-eye'></i>
            </button>
            <button className='ctrl-btn'
                onClick={() => removeMovieFromWatchlist(movie.id)}
            >
                <i className='fa-fw fa fa-times'></i>
            </button>

        </div>
    )
}

export default MovieControl