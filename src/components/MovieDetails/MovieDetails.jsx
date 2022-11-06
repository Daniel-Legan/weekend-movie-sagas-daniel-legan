import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Button from '@mui/material/Button';

function MovieDetails() {
    const params = useParams();
    const history = useHistory();
    const movieDetails = useSelector(store => store.movieDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: params.id
        })
    }, [params.id]); 

    return (
        <main>
            <nav className='navbar'>
                {/* <div className='backButton'>
                    <Button variant="contained" onClick={() => history.push('/')}>Back</Button>
                </div> */}
                <a href="#"><i className="fa fa-fw fa-arrow-left" onClick={() => history.push('/')}></i> Back</a>
            </nav>
            <section>
                <h1>{movieDetails.title}</h1>
                <div className='details'>
                    <img className='detailsImage' src={movieDetails.poster} />
                    <div className='detailsDescription'><b>Description:</b>
                        <div>{movieDetails.description}</div>
                    </div>
                    <div className='genresContainer'>
                        <div className='detailsGenres'>
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