import { useState } from 'react'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import PokemonLista from './components/PkemonList'
import TheTeam from './components/TheTeam'
import MyTeam from './components/MyTeam'
import TheNavbar from './components/Navbar'
import './App.css'

function App() {


  return (
    <Router>
      <div>
        <TheTeam>
        <Routes>
            <Route path="/" element={<PokemonLista />} />
            <Route path="/myteam" element={<MyTeam/>} />
          </Routes>
        </TheTeam>
      </div>
    </Router>
       
  )
}

export default App
