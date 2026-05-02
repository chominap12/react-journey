import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
      const [input,setInput]=useState("");
       const handleClick =(value)=>{
        if(value=="="){
          try{
          setInput(eval(input).toString());
        }catch{
              setInput("Error");
                }
         }
         else if(value=="X"){
          setInput((prev)=>prev.slice(0,-1));
         }
       else{
        setInput((prev)=> prev+value);
              }
         }
    const clear = ()=>{
      setInput("");
    }
    
  return (
    <div>
      <h1>{input}</h1>
       <button onClick={clear}>C</button>
       <button onClick={()=>handleClick("X")}>X</button>
       <button onClick={()=>handleClick("%")}>%</button>
       <button onClick={()=>handleClick("/")}>/</button>
       <br></br>
       <button onClick={()=>handleClick("7")}>7</button>
       <button onClick={()=> handleClick("8")}>8</button>
       <button onClick={()=>handleClick("9")}>9</button>
       <button onClick={()=> handleClick("*")}>*</button>
        <br/>
        <button onClick={()=> handleClick("4")}>4</button>  
        <button onClick={()=> handleClick("5")}>5</button> 
        <button onClick={()=> handleClick("6")}>6</button>
        <button onClick={()=> handleClick("-")}>-</button>
        <br/>
        <button onClick={()=>handleClick("1")}>1</button>
        <button onClick={()=> handleClick("2")}>2</button>
        <button onClick={()=> handleClick("3")}>3</button>
        <button onClick={()=> handleClick("+")}>+</button>
        <br/>
        <button onClick={()=> handleClick("0")}>0</button>
        <button onClick={()=> handleClick(".")}>.</button>
        <button onClick={()=>handleClick("=")}>=</button>     
    </div>
  )
}

export default App
