import { useState } from 'react'
import Nav from "./components/Nav"
import TravelCard from "./components/TravelCard"
import data from "./data.js"

const cardData = data.map(item=> {
  return (
    <TravelCard 
      key={item}
      {...item}
    />
  )
})
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Nav />
      {cardData}
    </div>
  )
}

export default App
