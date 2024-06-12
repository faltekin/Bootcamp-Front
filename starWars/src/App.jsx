import { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Starship from './star';

function Main() {
  const [allStarships, setAllStarships] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setAllStarships(response.data.results);
        setNextPage(response.data.next);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStarships();
  }, []);

  const handleSearch = () => {
    if (search.trim() === '') {
      setResults([]);
    } else {
      const results = allStarships.filter(
        (starship) =>
          starship.name.toLowerCase().includes(search.toLowerCase()) ||
          (starship.model &&
            starship.model.toLowerCase().includes(search.toLowerCase()))
      );
      setResults(results);
    }
  };

  const handleLoadMore = async () => {
    if (nextPage) {
      try {
        const response = await axios.get(nextPage);
        const newData = response.data;

        if (newData.results && newData.results.length > 0) {
          setAllStarships((prevStarships) => [...prevStarships, ...newData.results]);
        }

        setNextPage(newData.next || null);
      } catch (error) {
        console.error('Error fetching more starships:', error);
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="Star Wars Logo"
          className="star-wars-logo"
        />
        <div className="search-container">
          <p>Name / Model </p>
          <input
            type="text"
            placeholder="Search starships..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Filter
          </button>
        </div>
      </div>
      <ul className="starship-list">
        {results.length > 0
          ? results.map((starship, index) => (
              <li key={index} className="starship-item">
                <Link to={`/starship/${starship.name}`}>
                  <img
                    src="https://nortenews.org/wp-content/uploads/2022/09/ISD-1-SV.webp"
                    className="starship-image"
                    alt={starship.name}
                  />
                  <br />
                  <strong>Name:</strong> {starship.name}
                  <br />
                  <strong>Model:</strong> {starship.model}
                  <br />
                  <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
                  <br />
                  <br />
                </Link>
              </li>
            ))
          : allStarships.map((starship, index) => (
              <li key={index} className="starship-item">
                <Link to={`/starship/${starship.name}`}>
                  <img
                    src="https://nortenews.org/wp-content/uploads/2022/09/ISD-1-SV.webp"
                    className="starship-image"
                    alt={starship.name}
                  />
                  <br />
                  <h3>{starship.name}</h3>
                  <br />
                  <span><strong>Model:</strong> {starship.model}</span>
                  <br />
                  <span><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</span>
                  <br />
                  <br />
                </Link>
              </li>
            ))}
      </ul>
      <div className="load-more-container">
        <button onClick={handleLoadMore} className="load-more-button">
          Load More Ships
        </button>
      </div>
    </div>
  );
}

function App() {
  const [allStarships, setAllStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setAllStarships(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/starship/:starshipName" element={<Starship starships={allStarships} />} />
      </Routes>
    </Router>
  );
}

export default App;
