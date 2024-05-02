import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
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
    <div className='bg-slate-100 flex flex-col min-h-screen overflow-auto'>
      <HeadBar/>
      <motion.div>
        <motion.div drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}>
          <AnimatePresence>  
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PortalHatal/>}/>
              <Route path="/Atz" element={<Atz/>}/>
              <Route path="/Mkeva" element={<Mkeva/>}/>
            </Routes>
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <Buttom/>
      <footer dir='rtl' className=' text-center font-bold font-sans'>פותח ע״י מסגרת אמ״ת ©</footer>
    </div>
 );
}

export default App;



// const variants = {
//   enter: (Direction) => {
//     return {
//       x: Direction > 0 ? 100 : -100,
//       opacity: 0
//     };
//   },
//   center: {
//     x: 0,
//     opacity: 1
//   },
//   exit: (Direction) => {
//     return {
//       x: Direction < 0 ? 300 : -300,
//       opacity: 0, 
//       transition:{duration:0.2}
//     };
//   }
// };

// const swipeConfidenceThreshold = 30000;

// function App() {
//   const [[page, Direction], setPage] = useState([0, 0]);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dragX = useMotionValue(0);

//   const handleDragEnd = (event, info) => {
//     const direction = info.offset.x ;
//     const velocity = info.velocity.x ;
//     const swipe = Math.abs(direction) * velocity;
//     let dir
//     if(swipe < -swipeConfidenceThreshold){
//       dir = 'left'
      
//     }else if(swipe > swipeConfidenceThreshold){
//       dir = 'right'
//     }
//     if (location.pathname === '/' && dir === 'left' ) {
//         navigate('/Atz');
//     } else if (location.pathname === '/' && dir === 'right' ) {
//         navigate('/Mkeva');
//     } else {
//         if (location.pathname.startsWith('/Atz') && dir === 'right' ) {
//             navigate('/');
//         } else if (location.pathname.startsWith('/Mkeva') && dir === 'left' ) {
//             navigate('/');
//         }
//     }
//   };

//  return (
//     <div className='bg-slate-100 flex flex-col min-h-screen overflow-auto'>
//       <HeadBar/>
//           <AnimatePresence initial={false} custom={Direction}>
//         <motion.div drag='x' dragConstraints={{ left: 0, right: 0 }} onDragEnd={handleDragEnd}>
//             <Routes location={location} key={location.pathname}>
//               <Route path="/" element={<motion.div key="PortalHatal" initial="enter" animate="center" exit="exit" variants={variants}>
//       <PortalHatal />
//     </motion.div>} />

//               <Route path="/Atz" element={<motion.div key="PortalHatal" initial="enter" animate="center" exit="exit" variants={variants}>
//       <Atz />
//     </motion.div>} />

//               <Route path="/Mkeva" element={<motion.div key="PortalHatal" initial="enter" animate="center" exit="exit" variants={variants}>
//       <Mkeva />
//     </motion.div>} />

//             </Routes>
//         </motion.div>
//           </AnimatePresence>
//       <Buttom/>
//       <footer dir='rtl' className=' text-center font-bold font-sans'>פותח ע״י מסגרת אמ״ת ©</footer>
//     </div>
//  );
// }

// export default App;