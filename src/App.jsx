import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
    </Routes>
    </>
  )
}

export default App
