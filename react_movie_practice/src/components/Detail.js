import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

function Detail() {

    // App.js에서 <Route path='/movie/:id'></Route> id 값을 받았으므로 => {id}로 받기
    const {id} = useParams();

    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?movie=${id}`)
        ).json();
        console.log(json);
        setLoading(false);
    }    
    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {loading ? <h1>Detail Loading...</h1> : <h1>not yet...</h1>
                // <Movie 
                //     key={movie.id}
                //     id={movie.id}
                //     coverImage={movie.medium_cover_image} 
                //     title={movie.title} 
                //     summary={movie.summary} 
                //     genres={movie.genres}
                // />
                }
        </div>
    )
}

export default Detail