import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import images from "./assets/images.json"
function App() {
  const [count, setCount] = useState(0)
  const adelante = ()=>{
    if(count == images.length - 1){
      setCount(0)
    }else{
      setCount(count + 1)
    }   
  }
  const atras = ()=>{
    if(count == 0){
      setCount(images.length -1)
    }else{
      setCount(count -1)
    }   
  }
  return (
    <div className="App">
      <button onClick={atras}>patras</button>
      <img src={images[count].url} style={{width: "200px"}}/>
      <button onClick={adelante}>pa delante</button>
    </div>
  )
}

export default App



