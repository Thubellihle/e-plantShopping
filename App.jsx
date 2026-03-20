import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing">
      <h1>🌿 Paradise Nursery</h1>
      <button onClick={() => window.location.href="/plants"}>
        Get Started
      </button>
    </div>
  );
}

export default App;
