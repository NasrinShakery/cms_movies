import { useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Navbar from './components/Navbar/Navbar'

function App() {

  const router = useRoutes(routes)

  return (
    <>
      App
      <Navbar />
      {router}
    </>
  )
}

export default App
