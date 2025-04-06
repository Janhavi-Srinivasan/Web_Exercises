import React from "react";

const Header = ({ title }) => {
  return (
    <header style={{ backgroundColor: "#282c34", color: "white", padding: "10px", textAlign: "center" }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
