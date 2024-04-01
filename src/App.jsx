import { useState } from 'react'
import Header from './Component/Header'
import LineChart from './Component/LineChart'
import DownloadSourceCode from './DownloadSourceCode';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <DownloadSourceCode/>
      <LineChart/>
       
    </>
  )
}

export default App
