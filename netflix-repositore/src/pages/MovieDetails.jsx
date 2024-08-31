import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchMovieDetails } from '../api/tmdbApi';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem 2rem 0 2rem;
  color: white;
  background-color: #141414;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const MovieInfo = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const MovieTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const MovieOverview = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #f40612;
  }
`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      const movieDetails = await fetchMovieDetails(id);
      if (movieDetails) {
        setMovie(movieDetails);
      } else {
        console.error('Movie details not found!');
      }
    };

    fetchDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>&larr;</BackButton>
      <DetailsContainer>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOverview>{movie.overview}</MovieOverview>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}/10</p>
        </MovieInfo>
      </DetailsContainer>
    </>
  );
};

export default MovieDetails;
