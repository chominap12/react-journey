import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'

function App() {
  const [count,setcount]= useState(0);
 
  return (
    <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
  color: "white"
}}>
  <div style={{
    backgroundColor: "#111",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 0 20px rgba(128,0,255,0.4)",
    width: "250px"
  }}>
    <h1 style={{ marginBottom: "20px" }}>Counter App</h1>

    <h2 style={{
      fontSize: "40px",
      marginBottom: "20px",
      backgroundColor: "#222",
      padding: "10px",
      borderRadius: "10px"
    }}>
      {count}
    </h2>

    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button
        onClick={() => setcount(count + 1)}
        style={{
          flex: 1,
          margin: "5px",
          padding: "10px",
          fontSize: "20px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(45deg, #7b2ff7, #9f44d3)",
          color: "white",
          cursor: "pointer"
        }}
      >
        +
      </button>

      <button
        onClick={() => setcount(count - 1)}
        style={{
          flex: 1,
          margin: "5px",
          padding: "10px",
          fontSize: "20px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
          color: "white",
          cursor: "pointer"
        }}
      >
        -
      </button>
    </div>
  </div>
</div>
  )
}

export default App
