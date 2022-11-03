
import './App.css';
import {useState} from "react"

function App() {
  const [counter,setCounter]=useState(0)

  const incrementCount=()=>{
    setCounter(counter+1)
  }

  const decrementCount =()=>{
    setCounter(counter-1)
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>The Current Count is {counter}</h3>
      <button onClick={incrementCount}>Add</button>
      <button onClick={decrementCount}>Reduce</button>
    </div>
  );
}

export default App;