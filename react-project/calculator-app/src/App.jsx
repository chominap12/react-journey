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
     <div
    style={{
      backgroundColor: "#121212",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div  style={{
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderRadius: "15px",
        width: "300px",
      }}>

      <h1 style={{
          backgroundColor: "black",
          color: "white",
          padding: "15px",
          borderRadius: "10px",
          textAlign: "right",
        }}>{input || 0}</h1>
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
       <button style={{padding:"15px"}} onClick={()=>handleClick("/")}>/</button>
       
       <button style={{padding:"15px"}} onClick={()=>handleClick("7")}>7</button>
       <button style={{padding:"15px"}} onClick={()=> handleClick("8")}>8</button>
       <button style={{padding:"15px"}} onClick={()=>handleClick("9")}>9</button>
       <button style={{padding:"15px"}} onClick={()=> handleClick("*")}>*</button>
       
        <button style={{padding:"15px"}} onClick={()=> handleClick("4")}>4</button>  
        <button style={{padding:"15px"}} onClick={()=> handleClick("5")}>5</button> 
        <button style={{padding:"15px"}} onClick={()=> handleClick("6")}>6</button>
        <button style={{padding:"15px"}} onClick={()=> handleClick("-")}>-</button>
       
        <button style={{padding:"15px"}} onClick={()=>handleClick("1")}>1</button>
        <button style={{padding:"15px"}} onClick={()=> handleClick("2")}>2</button>
        <button style={{padding:"15px"}} onClick={()=> handleClick("3")}>3</button>
        <button style={{padding:"15px"}} onClick={()=> handleClick("+")}>+</button>
       
        <button style={{padding:"15px"}} onClick={()=> handleClick("0")}>0</button>
        <button style={{padding:"15px"}} onClick={()=> handleClick(".")}>.</button>
        <button style={{padding:"15px"}} onClick={()=>handleClick("=")}>=</button>     
    </div>
    </div>
    </div>
  )
}

export default App
