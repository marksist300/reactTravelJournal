import { useState } from 'react'
import Nav from "./components/Nav"
import TravelCard from "./components/TravelCard"
import data from "./data.js"
console.log(data)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
    </div>
  )
}

export default App
