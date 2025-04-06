import React, { useState } from "react";

const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the math book look sad? Because it had too many problems.",
  "I'm reading a book on anti-gravity. It's impossible to put down!"
];

const Content = () => {
  const [joke, setJoke] = useState("Click the button to get a joke!");

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <main style={{ textAlign: "center", padding: "20px" }}>
      <p>{joke}</p>
      <button onClick={getRandomJoke} style={{ padding: "10px", cursor: "pointer" }}>
        Get a Joke
      </button>
    </main>
  );
};

export default Content;
