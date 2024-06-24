import { useState, useEffect } from 'react';
import { motion, useMotionValue, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import PortalHatal from "./components/PortalHatal";
import HatalMnifest from "./components/Hatal-Manifest/HManifestHome"
import BmInstructions from "./components/Hatal-Manifest/BmInstructions"
import Highlights from "./components/Hatal-Manifest/Highlights"
import OpenDoor from "./components/Hatal-Manifest/OpenDoor"
import PublicActivities from "./components/Hatal-Manifest/PublicActivities"
import PublicCommittee from "./components/Hatal-Manifest/PublicCommittee"
import Safety from "./components/Hatal-Manifest/Safety"
import Values from "./components/Hatal-Manifest/Values"
import Atz from "./components/Atz";
import Mkeva from "./components/Mkeva";
import HeadBar from "./components/headBar/headBar";
import Buttom from './utiles/Buttom';
import Layout from './components/Layout';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dragX = useMotionValue(0);
  const dragXMove = useMotionValue(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isHatalMnifestActive, setIsHatalMnifestActive] = useState(false);


  useEffect(() => {
    // Check if the current pathname starts with /HatalMnifest
    setIsHatalMnifestActive(location.pathname.startsWith("/HatalMnifest"));
  }, [location.pathname]);

  useEffect(() => {
    dragX.set(0)
 }, [location.pathname]);


 useMotionValueEvent(dragX, "change", (latest)=> {
  if(isPopupOpen === true){
    dragX.set(0)
  } else {
    dragX.set(latest)
    // dragX.set(0)
    // console.log(dragX.get())
  }

 })

 const handleDragEnd = (event, info) => {
  if (isPopupOpen) return;

  const direction = dragX.get();
  
  let dir;
  if(direction < -17){
    dir = 'left';
  } else if(direction > 17){
    dir = 'right';
  }
  if (location.pathname === '/Mkeva' && dir === 'left' ) {
      navigate('/Atz');
      // dragX.set(0); 
  } else if (location.pathname === '/Mkeva' && dir === 'right' ) {
      navigate('/');
      // dragX.set(0); 
  } else {
      if (location.pathname === '/' && dir === 'left' ) {
          navigate('/Mkeva');
          // dragX.set(0); 
      } else if (location.pathname === '/Atz' && dir === 'right' ) {
          navigate('/Mkeva');
          // dragX.set(0); 
      }
  }
};

 return (
    <div className='bg-gradient-to-br from-[#FFFFFF] to-[#F5F5F5] flex flex-col min-h-screen overflow-hidden'>
      <HeadBar isHatalMnifestActive={isHatalMnifestActive} />
      <motion.div>
        <motion.div drag='x' style={{
          x:dragX
        }}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd} >
          <AnimatePresence>  
            <Routes location={location} key={location.pathname}>
              <Route  path='/' element={<Layout/>}>
                <Route index element={<PortalHatal drag={dragX} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>}/>
                <Route path="/Atz" element={<Atz drag={dragX} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>}/>
                <Route path="/Mkeva" element={<Mkeva drag={dragX} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>}/>
                <Route path="/HatalMnifest/*" element={
                  <Routes>
                    <Route index element={<HatalMnifest/>}/>
                    <Route path="/bm-instructions" element={<BmInstructions />}/>
                    <Route path="/highlights" element={<Highlights />}/>
                    <Route path="/values" element={<Values />}/>
                    <Route path="/safety" element={<Safety />}/>
                    <Route path="/open-door" element={<OpenDoor />}/>
                    <Route path="/public-activities" element={<PublicActivities />}/>
                    <Route path="/public-committees" element={<PublicCommittee />}/>
                  </Routes>
                }/>
                <Route path='*' element={<Navigate to='/' replace />}/>
              </Route>
            </Routes>
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <Buttom/>
      <footer dir='rtl' className=' text-center font-bold font-Assin text-[14px]'>פותח ע״י מסגרת אמ״ת ©</footer>
    </div>
 );
}

export default App;
