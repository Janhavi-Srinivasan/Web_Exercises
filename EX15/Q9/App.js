import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
import ThemedComponent from "./ThemedComponent";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Theme Context Example</h1>
        <ThemeToggleButton />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
