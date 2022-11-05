import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function MovieDetails() {
    const params = useParams();
    const history = useHistory();
    const movieDetails = useSelector(store => store.movieDetails);
    const dispatch = useDispatch();

    console.log('params', params); // { id: '17' } as an example

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: params.id
        })
    }, [params.id]);

    return (
        <main>
            <nav className='navigation'>
                <button onClick={() => history.push('/')}>Back</button>
            </nav>
            <section>
                <h3>{movieDetails.title}</h3>
                <div className='detailsImageAndDescription'>
                    <img className='detailsImage' src={movieDetails.poster} />
                    <div className='detailsDescription'><b>Description:</b>
                        <div>{movieDetails.description}</div>
                    </div>
                    <div className='detailsGenres'>
                        <div className='test'>
                            <b>Genre(s):</b>
                            {/* 

                            IMPORTANT! 
                            without conditional, .map() has undefined initially
                            takes a bit to retrieve array with useSelector

                            from ramirez-react-route-params example

                            */}
                            <div>
                                {movieDetails.genres &&
                                    movieDetails.genres.map(item => (item.name)).join(', ')}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default MovieDetails;