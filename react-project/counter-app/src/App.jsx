import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'

function App() {
  const [count,setcount]= useState(0);
 
  return (
    <div>
       <h1>Counter App</h1>
       <h2>{count}</h2>
       <button onClick={() => setcount(count+ 1)}>+</button>
       <button onClick = {()=>setcount(count - 1)}>-</button>
    </div>  
  )
}

export default App
