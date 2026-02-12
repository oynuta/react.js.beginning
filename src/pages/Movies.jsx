import { useState } from "react";
import "./Movies.css";

function Movies() {
  const [query, setQuery] = useState("");

  const movies = [
    { id: 1, title: "Lorem", year: 1985, image: "https://via.placeholder.com/300x400" },
    { id: 2, title: "Joshua", year: 2020, image: "https://via.placeholder.com/300x400" },
    { id: 3, title: "Alemdar", year: 2005, image: "https://via.placeholder.com/300x400" },
    { id: 4, title: "Polat", year: 1995, image: "https://via.placeholder.com/300x400" },
    { id: 5, title: "Memati", year: 2012, image: "https://via.placeholder.com/300x400" },
    { id: 6, title: "Zaza", year: 2015, image: "https://via.placeholder.com/300x400" },
  ];

  const handleSearch = () => {
    alert(`You searched for: ${query}`);
  };

  return (
    <div className="movies-container">
      <div className="movies-header">
        <h1>Movies Search Engine</h1>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Write movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>({movie.year})</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
