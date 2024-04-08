import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useEffect, useState} from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import ScrollContainer from "react-indiana-drag-scroll";

function App() {
    const [movies, setMovies] = useState([]);

    const [favourites, setFavourites] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=86093b7f`;

        const response = await fetch(url);
        const responseJson = await response.json ();

        if (responseJson.Search) {
            setMovies(responseJson.Search)
        }

        console.log(responseJson);
    };

    useEffect(() => {
        if (searchValue.length > 3) {
            getMovieRequest(searchValue);
        }
    }, [searchValue]);


    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('favourites'));
        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favourites', JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const isAlreadyFavourite = favourites.some((favourite) => favourite.imdbID === movie.imdbID);
        if (!isAlreadyFavourite) {
            const newList = [...favourites, movie];
            setFavourites(newList);
            saveToLocalStorage(newList);
        }
    };
    const removeMovie = (movie) => {
        const newList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        setFavourites(newList);
        saveToLocalStorage(newList);
    };

    return (
        <div className='container-fluid movie-app'>
            <div className='row align-items-center my-4'>
                <MovieListHeading heading='영화 검색과 선호작 등록'/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <ScrollContainer className="row scroll-container">
                <MovieList movies={movies} handleClick={addFavouriteMovie} addMovie={true}/>
            </ScrollContainer>

            <div className='row align-items-center my-4'>
                <MovieListHeading heading='내 선호작'/>
            </div>
            <ScrollContainer className="row scroll-container">
                <MovieList movies={favourites} handleClick={removeMovie} addMovie={false}/>
            </ScrollContainer>
        </div>
    );
}

export default App;