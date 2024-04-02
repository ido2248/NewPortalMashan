import React, { useState } from 'react'
import Navbar from './navBar'
import { HiMenu } from "react-icons/hi";

function headBar() {
    const [showNav, setShownav] = useState(false)
    const displayNav = () => {
        setShownav(!showNav)
    }
  return (
    <div dir='rtl' className='w-full flex flex-row bg-red-500'>
        <div className=' flex'>
            <HiMenu onClick={displayNav}/>
            {/* {showNav && <Navbar/>} */}
        </div>
        <div className='text-center justify-center flex text-red-400'>
            {/* <img src={hatal} alt="Hatal" className="h-8 w-8 ml-6" /> */}
            <p dir="rtl" className="text-[20px] px-4"> מערכת לוגיסטיקה תקשובית</p>
            {/* <img src={hatal} alt="Hatal" className="h-8 w-8 mr-4" /> */}
        </div>
    </div>
    
  )
}
export default headBar