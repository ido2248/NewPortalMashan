import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortalHatal from "./components/PortalHatal";
import Atz from "./components/Atz";
import Mkeva from "./components/Mkeva";
import HeadBar from "./components/headBar/headBar";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <HeadBar/>
        <Routes>
          <Route path="/" element={<PortalHatal/>}/>
          <Route path="/Atz" element={<Atz/>}/>
          <Route path="/Mkeva" element={<Mkeva/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
