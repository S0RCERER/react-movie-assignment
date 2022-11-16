import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";

const MovieReviewPage = () => {
  let location = useLocation();
  const {movie, review} = location.state;

  const root = {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 2.5,
    margin: 0.5,
    ml:40,
    mr:37
};

  return (
    <PageTemplate movie={movie} sx={{root}}>
      <MovieReview sx={{root}} review={review} />
    </PageTemplate>
  );
};

export default MovieReviewPage;