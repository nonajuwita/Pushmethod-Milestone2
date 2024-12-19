import React, { useState, useEffect } from 'react';
import Navbar from '../../component/Navbar';
import axios from 'axios';

const Homepage = () => {
  const [movies, setMovies] = useState([]); // State untuk menyimpan array film
  const [error, setError] = useState(null); // State untuk menangani error

  const getMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/list/1?api_key=d64720d80deb19a499c3fbf04a60d89d'
      );
      setMovies(response.data.items); // Simpan array items ke state
    } catch (err) {
      console.error('Error fetching data:', err.message);
      setError('Gagal mengambil daftar film.'); // Tangkap error
    }
  };
  
  useEffect(() => {
    getMovies();
  }, []);
  

  return (
    <div>
      
      <div className="p-8">
        {/* Menampilkan pesan error jika ada */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Menampilkan daftar film */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <div key={movie.id} className="p-4 border rounded-lg shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="object-cover w-full mb-4 rounded-lg h-72"
              />
              <h3 className="text-lg font-bold">{movie.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{movie.overview.slice(0, 100)}...</p>
              <p className="mt-2 font-semibold text-gray-800">Rating: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
