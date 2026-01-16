import React, { useActionState } from 'react'
import { useEffect, useState } from 'react'
import Search from './components/Search'
import Spinner from './components/spinner';

const API_BASE_URL= `https://api.themoviedb.org/3`;

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS={
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setmovieList] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading (true);
    setErrorMessage('');
    try {
        const endpoint= `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
        const response = await fetch(endpoint, API_OPTIONS);

        if(!response.ok) {
          throw new Error ('Network response was not ok');
        }
        
        const data = await response.json();

        if(data.Response === 'False'){
          setErrorMessage(data.Error || 'Failed to fetch movies.');
          setmovieList([]);
          return;
        }
        setmovieList(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies:, ${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    }finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  },[]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchTerm}`);
  //     const data = await response.json();
  //     console.log(data);
  //   };

  //   if (searchTerm) {
  //     fetchData();
  //   }
  // }, [searchTerm]);

  return (
    <main>
      <div className='pattern'/>
        <div className='wrapper'>
          <header>
            <img src="/hero.png" alt="Hero Banner" />
            <h1>Find <span className='text-gradient'> Movies</span> You'll Enjoy <span className='text-red-500'>Without</span>  the Hassle</h1>
          </header>
          <Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {/* <h2 className='text-center py-4'>Search Results for: <span className='text-gradient'>{searchTerm}</span></h2> //Test Unit */}
          <section className='all-movies'>
            <h2 className='section-title mt-[40px] text-center'>All Movies</h2>
            
            {IsLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className='text-center text-red-500'>{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <p className='text-white'>{movie.title}</p>
                ))}
              </ul>
            )}
              
            
          </section>
        
        
        </div>
      
    </main>
  )
}

export default App