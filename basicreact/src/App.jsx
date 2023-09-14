import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)

  const addValue=()=>{
    setCount(count+1);
  }

  const removeValue=()=>{
    if(count > 0)
      setCount(count-1);
    else
      alert('Count value cannot be negative')
  }

  function handleColor(e,colorName){
      document.body.style=`background-color : ${colorName}`
  }
  return (
    <div>
        <h1>Hello World!!!</h1>
        <h2>Count : {count}</h2>
        <button onClick = {addValue}> Increase Count</button>
        <button onClick = {removeValue}> Decrease Count</button>
        <button onClick = {()=>setCount(0)}> Reset</button>
        <h2>Change Background color</h2>
        <button onClick ={(e)=>handleColor(e,'orange')}> Orange </button>
        <button onClick ={(e)=>handleColor(e,'red')}> Red </button>
        <button onClick ={(e)=>handleColor(e,'green')}> Green </button>
        <button onClick ={(e)=>handleColor(e,'yellow')}> Yellow </button>
        <button onClick ={(e)=>handleColor(e,'blue')}> Blue </button>
    </div>
  )
}

export default App
