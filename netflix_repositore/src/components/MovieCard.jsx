import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
 min-width: 150px;
  margin-right: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    min-width: 120px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const MovieTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Card onClick={handleClick}>
      <MovieImage src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
      <MovieTitle>{movie.title}</MovieTitle>
    </Card>
  );
};

export default MovieCard;
