import React, { useState } from 'react'
import Navbar from './navBar'
import { HiMenu } from "react-icons/hi";

function headBar() {
    const [showNav, setShownav] = useState(false)
    const displayNav = () => {
        setShownav(!showNav)
        console.log(showNav)
    }
  return (
    <div dir='rtl' className='w-full bg-red-600'>
        <HiMenu onClick={displayNav}/>
        {showNav && <Navbar/>}
    </div>
    
  )
}
export default headBar