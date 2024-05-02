import React, { useState } from 'react'
import Navbar from './navBar'
import { HiMenu } from "react-icons/hi";

function headBar() {
    const [showNav, setShownav] = useState(false)
    const displayNav = () => {
        setShownav(!showNav)
    }
  return (
    <div dir='rtl' className='fixed w-full top-0 text-right z-50'>
        <div className=' flex items-center justify-between bg-white/75 p-2 px-8  backdrop-blur sticky !z-40'>
            <div>
                <img className='h-10 w-10' src='/img/Hatal.png'/>
            </div>
            <div className='text-center'>
                <p dir="rtl" className=" text-4xl font-Katana mb-0">החטיבה הטכנולוגית</p>
                <p className=' font-Katana text-3xl mt-0 text-blue-700'>משא"ן 360</p>
            </div>
            <div>
                <img className='w-10 h-10' src='/img/Hatal_Inside.png'/>
            </div>
        </div>
        <Navbar/>
    </div>
    
  )
}
export default headBar