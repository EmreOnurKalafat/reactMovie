import React, { use, useActionState } from 'react'
import { useEffect, useState } from 'react'
import Search from './components/Search'
import Spinner from './components/spinner';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import { useDebounce } from 'react-use';
import { updateSearchCount, getTrendingMovies } from './appwrite';

const API_BASE_URL= `https://api.themoviedb.org/3`; // TMDB API Base URL

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // TMDB API Key from environment variables

const API_OPTIONS={
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
} // API request options with authorization header

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [movieList, setmovieList] = useState([]); // State for the list of movies
  const [IsLoading, setIsLoading] = useState(false); // State for loading indicator
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(''); // State for debounced search term
  const [trendingMovies, setTrendingMovies] = useState([]); // State for trending movies
  const [selectedMovie, setSelectedMovie] = useState(null); // State for selected movie
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close

  useDebounce(()=> setDebouncedSearchTerm(searchTerm), 500, [searchTerm]); // Debounce the search term input by 500ms

  const fetchMovies = async (query='') => {
    setIsLoading (true); // Set loading state to true before fetching
    setErrorMessage(''); // Clear any previous error messages
    try {
        const endpoint= query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`; // Determine endpoint based on search term
        const response = await fetch(endpoint, API_OPTIONS); // Fetch data from the API

        if(!response.ok) {
          throw new Error ('Network response was not ok'); // Throw error if response is not ok
        }
        
        const data = await response.json(); // Parse the JSON data from the response

        if(data.Response === 'False'){
          setErrorMessage(data.Error || 'Failed to fetch movies.');
          setmovieList([]);
          return;
        } // Handle API error responses
        setmovieList(data.results || []); // Update movie list state
        if(query && data.results.length > 0){
          await updateSearchCount(query, data.results[0])
        }; // Update search count in Appwrite

    } catch (error) {
      console.error(`Error fetching movies:, ${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    }finally {
      setIsLoading(false); // Set loading state to false after fetching
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    }
  };
  const handleMovieClick = (movie) => {
    console.log('Clicked movie:', movie); // Debug: Ne gönderdiğini gör
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  }
  const handleMovieClickTrending = (movie) => {
    // Appwrite document'ten TMDB movie_id'sini al
    setSelectedMovie({
      id: movie.movie_id,  // Appwrite'da saklanan TMDB ID'si
      title: movie.searchTerm,
      poster_path: movie.poster_url
    });
    setIsModalOpen(true);
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm); // Fetch movies when the component mounts
  },[debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  },[]);


  return (
    <main>
      <div className='pattern'/>
        <div className='wrapper'>
          <header>
            <img src="/hero.png" alt="Hero Banner" />
            <h1>Find <span className='text-gradient'> Movies</span> You'll Enjoy <span className='text-red-500'>Without</span>  the Hassle</h1>
            <Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {/* <h2 className='text-center py-4'>Search Results for: <span className='text-gradient'>{searchTerm}</span></h2> //Test Unit */}
          </header>

          {trendingMovies.length > 0 && (
            <section className='trending'>
              <h2 className='text-center'>Trending Movies</h2>
              <ul>
                {trendingMovies.map((movie, index)=>(
                  <li 
                    key={movie.$id} 
                    onClick={() => handleMovieClickTrending(movie)}
                    style={{ cursor: 'pointer' }}
                  >
                    <p>{index + 1}</p>
                    <img src={movie.poster_url} alt={movie.searchTerm} />
                  </li>
                ))}
              </ul>
            </section>)}

          <section className='all-movies'>
            <h2 className='mt-[40px] text-center'>All Movies</h2>
            
            {IsLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className='text-center text-red-500'>{errorMessage}</p>
            ) : (
              <ul>

                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
                ))}

              </ul>
            )}
              
            
          </section>
          <MovieDetail movie={selectedMovie} isOpen={isModalOpen} onClose={handleCloseModal} />

        </div>
      
    </main>
  )
}

export default App