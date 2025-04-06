import React, { useState, useEffect } from "react";

const JokeFetcher = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
      const data = await response.json();
      if (data.joke) {
        setJoke(data.joke);
      } else {
        setJoke("No joke available");
      }
    } catch (error) {
      setJoke("Error fetching joke.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Random Joke</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{joke}</p>
      )}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default JokeFetcher;
