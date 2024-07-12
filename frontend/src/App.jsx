import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import {Routes, Route} from 'react-router-dom'
import Records from './components/Records'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* NavBar */}
    <Navbar/>
    <Routes>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/' element={<Records/>}></Route>
    </Routes>
    </>
  )
}

export default App
