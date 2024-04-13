import { useState } from 'react'

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PrimaryLayout from './Component/PrimaryLayout';

import PageLayout from './Component/PageLayout';
import Dashboard from './Component/Dashboard';
import Settings from './Component/Settings';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/dashboard" element={<PrimaryLayout/>}>
          <Route path="/dashboard" element={<PageLayout/>} >
             <Route index  element ={<Dashboard/>} />
             <Route  path="/dashboard/settings" element ={<Settings/>} />

          </Route>
        </Route>

      {/* <Header/> */}
      {/* <LineChart/> */}
       
    </Routes>
    </>
  )
}

export default App
