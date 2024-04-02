import { useState } from 'react'
import Header from './Component/Header'
import LineChart from './Component/LineChart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <LineChart/>
       
    </>
  )
}

export default App
