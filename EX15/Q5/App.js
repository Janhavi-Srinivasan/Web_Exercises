import React, { useState } from "react";
import LifecycleDemo from './components/LifecycleDemo';  // Correct path

const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>React Lifecycle Methods</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Unmount Component" : "Mount Component"}
      </button>
      {showComponent && <LifecycleDemo />}
    </div>
  );
};

export default App;
