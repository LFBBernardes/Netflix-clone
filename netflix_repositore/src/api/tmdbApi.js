const API_KEY = '48bcba7c8c4b378a8d7394924c5a49f5'; // Certifique-se de que sua chave da API esteja correta
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (category) => {
  try {
    let url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US`;

    // Ajuste para categorias específicas que usam discover e gêneros
    if (category === 'action') {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`;
    } else if (category === 'comedy') {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`;
    } else if (category === 'horror') {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`;
    } else if (category === 'romance') {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`;
    } else if (category === 'documentary') {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${data.status_message}`);
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return { results: [] }; // Retorna um objeto vazio para evitar falhas no .map()
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${data.status_message}`);
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error);
    return null;
  }
};
