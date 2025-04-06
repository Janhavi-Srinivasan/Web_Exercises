import React from "react";
import Child from "./Child";

const App = () => {
  const message = "Hello from Parent Component!";
  
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Parent Component</h1>
      <Child message={message} />
    </div>
  );
};

export default App;
