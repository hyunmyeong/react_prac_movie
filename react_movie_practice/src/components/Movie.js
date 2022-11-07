import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import style from './Movie.module.css';

function Movie({id, coverImage, title, year, summary, genres}) {
    return (
        <div className={style.movie}>
            <img src={coverImage} alt={title} className={style.movie.img}/>
            <h2 className={style.movie.title}>
                <Link to={`/movie/${id}`}>{title}</Link> 
            </h2>
            <h3 className={style.movie.year}>{year}</h3>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className={style.movie.genres}>
                {genres.map(g => 
                    <li key={g}>{g}</li>
                )}
            </ul>
        </div>
    )
}

Movie.prototype = {
    id : PropTypes.string.isRequired,
    coverImage : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Movie