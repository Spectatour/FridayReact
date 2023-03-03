import React, { useState, useEffect } from 'react';
import Joke from './Components/Joke';
import './App.scss';

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  },[]);

  const fetchJokes = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?amount=10');
    const data = await response.json();
    setJokes(data.jokes);
  };

  const refreshJokes = () => {
    fetchJokes();
  };

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then((response) => response.json())
      .then((data) => setJokes(data.jokes));
  }, []);

  return (
    <div className="App">
      <h1>Joke on You</h1>
      <div className="jokes-container">
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
      </div>
      <button className="refresh-button" onClick={refreshJokes}>Refresh Jokes</button>
    </div>
  );
}

export default App;