import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
      const [input,setInput]=useState("");
      const [calculated,setCalculated] = useState(false)
       const handleClick =(value)=>{
        if(value=="="){
          try{
          setInput(eval(input).toString());
          setCalculated(true);
        }catch{
              setInput("Error");
                }
         }
         else if(value=="X"){
          setInput((prev)=>prev.slice(0,-1));
         }
       else{
        if (calculated && !["+", "-", "*", "/", "%"].includes(value)) {
        setInput(value);
      } else {
        setInput((prev) => prev + value);
      }

      setCalculated(false);
          }
              };
         
    const clear = ()=>{
      setInput("");
      setCalculated(false);
    };
    
  return (
    <div>

      <h1>{input}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
        }}
      >
       <button style={{padding:"15px"}} onClick={clear}>C</button>
       <button style={{padding:"15px"}} onClick={()=>handleClick("X")}>X</button>
       <button  style={{padding:"15px"}} onClick={()=>handleClick("%")}>%</button>
       <button onClick={()=>handleClick("/")}>/</button>
       
       <button onClick={()=>handleClick("7")}>7</button>
       <button onClick={()=> handleClick("8")}>8</button>
       <button onClick={()=>handleClick("9")}>9</button>
       <button onClick={()=> handleClick("*")}>*</button>
       
        <button onClick={()=> handleClick("4")}>4</button>  
        <button onClick={()=> handleClick("5")}>5</button> 
        <button onClick={()=> handleClick("6")}>6</button>
        <button onClick={()=> handleClick("-")}>-</button>
       
        <button onClick={()=>handleClick("1")}>1</button>
        <button onClick={()=> handleClick("2")}>2</button>
        <button onClick={()=> handleClick("3")}>3</button>
        <button onClick={()=> handleClick("+")}>+</button>
       
        <button onClick={()=> handleClick("0")}>0</button>
        <button onClick={()=> handleClick(".")}>.</button>
        <button onClick={()=>handleClick("=")}>=</button>     
    </div>
    </div>
  )
}

export default App
