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
      <div className='bg-slate-100 flex flex-col min-h-screen'>
        <HeadBar/>
          <Routes>
            <Route path="/" element={<PortalHatal/>}/>
            <Route path="/Atz" element={<Atz/>}/>
            <Route path="/Mkeva" element={<Mkeva/>}/>
          </Routes>
          <footer dir='rtl' className=' text-center font-bold font-sans'>פותח ע״י מסגרת אמ״ת ©</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
