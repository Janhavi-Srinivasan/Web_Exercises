import React, { useRef } from "react";

const FocusForm = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Focus Input Field</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusForm;
