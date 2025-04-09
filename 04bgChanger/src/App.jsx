import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="button-wrapper">
        <button
          onClick={() => setColor("red")}
          className="color-button"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="color-button"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("purple")}
          className="color-button"
          style={{ backgroundColor: "purple" }}
        >
          Velvet
        </button>
        <button
          onClick={() => setColor("gold")}
          className="color-button"
          style={{ backgroundColor: "gold" }}
        >
          Gold
        </button>
      </div>
    </div>
  );
}

export default App;
