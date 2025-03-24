import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div style={{ backgroundColor: color, width: "100vw", height: "100vh" }}>
        <button
          onClick={() => setColor("red")}
          style={{ backgroundColor: "red" }}>
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          style={{ backgroundColor: "blue" }}>
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          style={{ backgroundColor: "green" }}>
          Green
        </button>
      </div>
    </>
  )
}

export default App
