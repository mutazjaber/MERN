import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxGenerator from './components/BoxGenerator';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  return (
    <>
      <h1>Box Generator</h1>
      <BoxGenerator addBox={addBox} />
      <div className="container">
        {boxes.map((box, i) => (
          <div
            key={i}
            style={{
              backgroundColor: box.color,
              width: box.size.width , 
              height: box.size.height,
              margin: 50,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;