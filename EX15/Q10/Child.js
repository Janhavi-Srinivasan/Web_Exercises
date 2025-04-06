import React from "react";

const Child = ({ message }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid black", marginTop: "20px" }}>
      <h2>Child Component</h2>
      <p>{message}</p>
    </div>
  );
};

export default Child;
