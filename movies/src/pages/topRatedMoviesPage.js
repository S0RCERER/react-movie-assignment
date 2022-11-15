import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { getTopRatedMovies } from "../api/tmdb-api";
import CustomPagination from "../components/customPagination";

const TopRatedMoviesPage = () => {
  const [page, setPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['top_rated',{page}], getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const totalPages = data.total_pages;
  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <>
    <PageTemplate
      title='Top Rated Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    <CustomPagination page={Number(page)} setPage={setPage} totalPages={Number(totalPages-24)}/>
    </>
    
  );
};

export default TopRatedMoviesPage;