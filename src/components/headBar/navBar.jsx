import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Navbar() {
  
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setPosition(currentPosition);

      if (currentPosition > lastPosition) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastPosition = currentPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, [position]);

  const menuItem=[
    {
      path:'/',
      name:'סדיר',
    //   icon: BsFillBoxSeamFill
    },
    {
      path:'/Atz',
      name:'אזרחים עובדי צהל',
    //   icon: BiDetail
    },
    {
      path:'/Mkeva',
      name:'משרתי קבע',
    //   icon: TbReportAnalytics
    },
  ]
  const location = useLocation()
  return (
   <>
    {/* <nav className={`sticky w-full shadow-md bg-slate-100 ${visible? ' translate-y-0': ' -translate-y-16 !z-30'} transition ease-in-out duration-800 `}>
          <ul className="flex  text-center justify-between items-center pt-2 px-4 pb-1">
            {menuItem.map((item, index)=>{
              const isActive = location.pathname === item.path;
              return (
                <li key={index} className='flex  items-center text-center list-none'>
                  <NavLink to={item.path} className={`flex p-2 justify-center rounded-lg font-Katana text-2xl h-full items-center no-underline ${isActive ? ' text-white border-solid border-b-2 bg-blue-500': ''}`} >
                    {item.name}
                    
                  </NavLink>
                </li>
              )      
            })}
          </ul>
        </nav> */}
    <div className={` bg-white h-[50px] justify-centers drop-shadow-lg  mx-1 rounded-lg ${visible? ' translate-y-0': ' -translate-y-16 !z-20 '} transition ease-in-out duration-300 flex items-center justify-center`}>
      <ul className='grid grid-cols-3 w-full p-2 gap-2'>
        {menuItem.map((item, i)=>{
          const isActive = location.pathname === item.path;
          return(
            <li key={i} className={`text-[22px] rounded-md text-center w-auto  font-Katana ${isActive ? 'text-white bg-[#432DC9] ': ''}`}>
              <NavLink to={item.path} className={``}>
                {item.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
   </>
  )
}

export default Navbar


// {/* <div className="bg-gray-200 flex h-[80px] justify-end items-center w-full text-gray-200">
//       <Link to="#" className="mr-8 text-[32px] bg-none">
//       </Link>
//     </div> */}
//     <div className='flex justify-center items-center text-center bg-slate-100'>
//       {menuItem.map((item, index)=>{
//         return (
//           <div key={index} className='flex justify-center items-center py-2 h-[60px] list-none text-center w-full border-2'>
//             <Link to={item.path} className=' flex w-full text-center justify-center text-black text-[13px] h-full px-4 items-center rounded no-underline ' >
//               <span className="">{item.name}</span>
//               {/* <item.icon className='ml-4'/> */}
//             </Link>
//           </div>
//           )
//       })}
//     </div>