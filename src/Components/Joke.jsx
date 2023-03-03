import React from 'react';

function Joke({ joke }) {
  return (
      <div className="square">
        {joke.setup && <p>{joke.setup}</p>}
        {joke.delivery && <p>{joke.delivery}</p>}
        {joke.joke && <p>{joke.joke}</p>}
      </div>
  );
}

export default Joke;
