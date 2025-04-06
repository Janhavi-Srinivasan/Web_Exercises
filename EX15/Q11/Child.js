import React from "react";
import PropTypes from "prop-types";
const Child = ({ message }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid black", marginTop: "20px" }}>
      <h2>Child Component</h2>
      <p>{message}</p>
    </div>
  );
};
Child.propTypes = {
  message: PropTypes.string.isRequired, 
};
export default Child;
