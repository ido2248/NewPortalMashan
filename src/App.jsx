import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { motion, useMotionValue } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PortalHatal from "./components/PortalHatal";
import Atz from "./components/Atz";
import Mkeva from "./components/Mkeva";
import HeadBar from "./components/headBar/headBar";
import Buttom from './utiles/Buttom';
import './App.css';

function App() {
 const navigate = useNavigate();
 const location = useLocation();
 const dragX = useMotionValue(0);

 const handleDragEnd = (event, info) => {
  const direction = info.offset.x ;
  let dir
  if(direction < -200){
    dir = 'left'
    
  }else if(direction > 200){
    dir = 'right'
  }
  if (location.pathname === '/' && dir === 'left' ) {
      navigate('/Atz');
  } else if (location.pathname === '/' && dir === 'right' ) {
      navigate('/Mkeva');
  } else {
      if (location.pathname.startsWith('/Atz') && dir === 'right' ) {
          navigate('/');
      } else if (location.pathname.startsWith('/Mkeva') && dir === 'left' ) {
          navigate('/');
      }
  }
};

 return (
    <div className='bg-slate-100 flex flex-col min-h-screen'>
      <HeadBar/>
      <motion.div>
        <motion.div drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}>
          <Routes>
            <Route path="/" element={<PortalHatal/>}/>
            <Route path="/Atz" element={<Atz/>}/>
            <Route path="/Mkeva" element={<Mkeva/>}/>
          </Routes>
        </motion.div>
      </motion.div>
      <Buttom/>
      <footer dir='rtl' className=' text-center font-bold font-sans'>פותח ע״י מסגרת אמ״ת ©</footer>
    </div>
 );
}

export default App;