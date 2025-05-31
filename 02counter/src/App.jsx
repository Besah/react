// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  // let counter = 15;
  const addValue = () => {
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    // counter++;
    console.log(counter);
  };

  const removeValue = () => {
    setCounter((reduceCounter) => reduceCounter - 1);
    setCounter((reduceCounter) => reduceCounter - 1);
    setCounter((reduceCounter) => reduceCounter - 1);
  };
  return (
    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
      
    </>
  );
}

export default App;
