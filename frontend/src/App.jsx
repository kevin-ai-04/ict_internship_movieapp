import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Panel from './components/Panel'
import Form from './components/Form'
import {Routes, Route} from 'react-router-dom'
import Records from './components/Records'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* NavBar */}
    <Navbar/>
    <Routes>
      <Route path='/add' element={<Form/>}></Route>
      <Route path='' element={<Records/>}></Route>
    </Routes>
    <Panel class="panel"></Panel>
    <Panel class="panel"></Panel>
    </>
  )
}

export default App
