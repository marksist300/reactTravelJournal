import { useState } from 'react'
import Nav from "./components/Nav"
import TravelCard from "./components/TravelCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
    </div>
  )
}

export default App
