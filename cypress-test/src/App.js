
import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"

function App() {
  const [counter,setCounter]=useState(0)

  const incrementCount=()=>{
    axios
   .post("http://localhost:8080/counter",
   {value:counter+1})
   .then((r)=>{
    setCounter(r.data.value)
   })
  }

  const decrementCount =()=>{
    axios
   .post("http://localhost:8080/counter",
   {value:counter-1})
   .then((r)=>{
    setCounter(r.data.value)
   })
  }
  const fetchData=()=>{
    axios
    .get("http://localhost:8080/counter")
    .then(({data})=>{
      setCounter(data.value)
    })
    .catch((e)=>{
      console.lo0g(e)
    })
}
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>The Current Count is {counter}</h3>
      <button className='increment_count' onClick={incrementCount}>Add</button>
      <button className='decrement_count' onClick={decrementCount}>Reduce</button>
    </div>
  );
}

export default App;
