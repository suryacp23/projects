import React,{useState} from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("rgb(247, 71, 71)");

  const toggleColor = () => {
    const newColor = color === "rgb(247, 71, 71)" ? "rgb(71, 83, 247)" : "rgb(247, 71, 71)";
    setColor(newColor);
  };
  return (
    <div className="app" style={{ backgroundColor: color }}>
    <button onClick={toggleColor}>Click Me</button>
  </div>
  );
}

export default App;
