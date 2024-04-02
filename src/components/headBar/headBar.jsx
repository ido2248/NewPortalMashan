import React, { useState } from 'react'
import Navbar from './navBar'
import { HiMenu } from "react-icons/hi";

function headBar() {
    const [showNav, setShownav] = useState(false)
    const displayNav = () => {
        setShownav(!showNav)
    }
  return (
    <div dir='rtl' className=' sticky top-0 flex items-center justify-between bg-white/75 p-2 text-right shadow backdrop-blur'>
        <div className='relative inline-block text-left'>
            <div>
                <HiMenu onClick={displayNav} className=' text-[25px]'/>
                {showNav && <Navbar/>}
            </div>
        </div>
        <div>
            <h1 dir="rtl" className="secular-one text-xl">החטיבה התכנולוגית</h1>
        </div>
        <div className='flex'>
            <img src='/'/>
            <img src='/'/>
        </div>
    </div>
    
  )
}
export default headBar