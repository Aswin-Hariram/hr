import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDashBoard from './Component/User/UserDashBoard'
import ApplyJob from './Component/ApplyJob/ApplyJob'
import SignUp from './Component/SignUp/SignUp'
import { Route, Routes } from 'react-router-dom'
import StartTest from './Component/ApplyJob/StartTest'
import Prep from './Component/ApplyJob/Prep'
import InterViewPage from './Component/InterViewPage/InterViewPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Routes>
    //   <Route path="/" element={<SignUp />} />
    //   <Route path="/ApplyJob" element={<ApplyJob />} />
    //   <Route path="/StartTest" element={<StartTest />} />
    //   <Route path="/Prep" element={<Prep />} />
     
    // </Routes>
    <div>
      <InterViewPage />
    </div>
  )
}

export default App