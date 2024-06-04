import React, { useState } from 'react'
import SubNavbar from '../Hatal-Manifest/SubComp/SubNavbar';
import Navbar from './navBar'
import { HiMiniBars3 } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';
function headBar({ isHatalMnifestActive }) {
    const [showNav, setShownav] = useState(false)
    const displayNav = () => {
        setShownav(!showNav)
    }
    const location = useLocation();
    const navClasses = location.pathname.startsWith  ("/HatalMnifest")? "flex items-center justify-between bg-white p-2 px-5 backdrop-blur sticky !z-30 " : "flex items-center justify-between bg-white p-2 px-8 pl-5 backdrop-blur sticky !z-30";
  return (
    <div dir='rtl' className='fixed w-full  top-0 text-right z-40 '>
        <div className={`${navClasses}`}>
            <div className='flex justify-center items-center'>
                {location.pathname.startsWith  ("/HatalMnifest") && (
                    <SubNavbar/>
                )}
                <img className='w-10 h-10 mr-3' src='/img/Hatal.png'/>
            </div>
            <div className='text-center'>
                <p dir="rtl" className=" text-[32px] font-Katana ">החטיבה הטכנולוגית</p>
                <p className=' font-Katana text-[24px] text-[#432DC9]'>משא"ן 360</p>
            </div>
            <div className='flex justify-center items-center'>
                <img className='h-12 w-12 rounded-full ml-2' src='/img/mashanHatal.png'/>
                <img className='w-10 h-10' src='/img/Hatal_Inside.png'/>
            </div>
        </div>
        <Navbar isHatalMnifestActive={isHatalMnifestActive}/>
    </div>
    
  )
}
export default headBar