import React from 'react'
import './App.css'
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
import {useState,  useEffect } from 'react';



const API_URL= 'https://www.omdbapi.com?apikey=16e7a59d';

const movie1 = {
Poster: "N/A",
Title: "Spiderman in Cannes",
Type: "movie",
Year: "2016",
imdbID: "tt5978586"
}
 

const App = () => {
  //16e7a59d   { mode: 'cors' }, { header: header }
  const [movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  
  const searchMovie = async (tittle) => {
   // const header = new Headers({ "Access-Control-Allow-Origin": "*" });

      const res = await fetch(`${API_URL}&s=${tittle}`)
      const data = await res.json();
      setMovies(data.Search);
     }

     useEffect(() => {
      searchMovie('Spiderman')

     },[])


  return (
    <div className='app'>
      <h1>Movie land</h1>
       <h1>App</h1>


       <div className='search'>
        <input placeholder="search for movie" name="" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img onClick={() => searchMovie(searchTerm)} src={SearchIcon} alt="search" />
       </div>

       {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID}/>
            ) )}
          </div>

        ) : (
          <div className='empty'>
              <h2>No movies found</h2>
          </div>
        )
       }

      



    </div>

  )
}
export default App;
 