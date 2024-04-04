import React, { useState } from 'react'
import Navbar from './navBar'
import { HiMenu } from "react-icons/hi";

function headBar() {
    const [showNav, setShownav] = useState(false)
    const displayNav = () => {
        setShownav(!showNav)
    }
  return (
    <div dir='rtl' className='sticky top-0 text-right'>
        <div className=' flex items-center justify-between bg-white/75 p-2 shadow backdrop-blur'>
            <div className='relative inline-block text-left'>
                <div>
                    <img className='h-14 w-14' src='/img/Hatal.png'/>
                </div>
            </div>
            <div>
                <h1 dir="rtl" className="secular-one text-xl font-sans font-bold">החטיבה הטכנולוגית</h1>
            </div>
            <div>
                <img className='w-14 h-14' src='/img/Hatal_Inside.png'/>
            </div>
        </div>
        <Navbar/>
    </div>
    
  )
}
export default headBar