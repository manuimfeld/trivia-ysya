import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import  Home  from '../components/Home'
import  PlayTrivia from '../components/PlayTrivia'
import  EndGame  from '../components/EndGame'

export const PrincipalRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/trivia" element={<PlayTrivia />} />
            <Route path="/puntos" element={<EndGame />} />
        </Routes>
    </BrowserRouter>
  )
}
