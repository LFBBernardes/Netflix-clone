import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchMovies } from '../api/tmdbApi';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';

const HomeContainer = styled.div`
  background-color: #1c1c1c;
  color: white;
  min-height: 100vh;
  padding-bottom: 2rem;
`;

const Section = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #ffffff;
`;

const MovieGrid = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 1rem;
`;

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanticMovies, setRomanticMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const topRated = await fetchMovies('top_rated');
      const action = await fetchMovies('action');
      const comedy = await fetchMovies('comedy');
      const horror = await fetchMovies('horror');
      const romantic = await fetchMovies('romance');
      const docs = await fetchMovies('documentary');

      setTopRatedMovies(topRated.results);
      setActionMovies(action.results);
      setComedyMovies(comedy.results);
      setHorrorMovies(horror.results);
      setRomanticMovies(romantic.results);
      setDocumentaries(docs.results);
    };

    fetchAllMovies();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term) {
      const allMovies = [
        ...topRatedMovies,
        ...actionMovies,
        ...comedyMovies,
        ...horrorMovies,
        ...romanticMovies,
        ...documentaries,
      ];

      const results = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies([]);
    }
  };

  return (
    <HomeContainer>
      <Navbar onSearch={handleSearch} />
      {searchTerm ? (
        <Section>
          <SectionTitle>Search Results</SectionTitle>
          <MovieGrid>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            ) : (
              <p>No movies found</p>
            )}
          </MovieGrid>
        </Section>
      ) : (
        <>
          <Section>
            <SectionTitle>Top Rated Movies</SectionTitle>
            <MovieGrid>
              {topRatedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MovieGrid>
          </Section>

          <Section>
            <SectionTitle>Action Movies</SectionTitle>
            <MovieGrid>
              {actionMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MovieGrid>
          </Section>

          <Section>
            <SectionTitle>Comedy Movies</SectionTitle>
            <MovieGrid>
              {comedyMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MovieGrid>
          </Section>

          <Section>
            <SectionTitle>Horror Movies</SectionTitle>
            <MovieGrid>
              {horrorMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MovieGrid>
          </Section>

          <Section>
            <SectionTitle>Romantic Movies</SectionTitle>
            <MovieGrid>
              {romanticMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MovieGrid>
          </Section>

          <Section>
            <SectionTitle>Documentaries</SectionTitle>
            <MovieGrid>
              {documentaries.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MovieGrid>
          </Section>
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
