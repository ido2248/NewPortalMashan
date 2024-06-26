import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Navbar({isHatalMnifestActive}) {
  
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
      path:'/Atz',
      name:'אזרחים עובדי צהל',
    //   icon: BiDetail
    },
    {
      path:'/Mkeva',
      name:'משרתי קבע',
    //   icon: TbReportAnalytics
    },
    {
      path:'/',
      name:'סדיר',
    //   icon: BsFillBoxSeamFill
    },
  ]
  const location = useLocation()
  return (
   <>
    <div className={` bg-white h-[50px] justify-centers drop-shadow-lg  mx-1 rounded-lg  ${isHatalMnifestActive? 'hidden':'flex'}  transition ease-in-out duration-300 flex items-center justify-center `}>
      <ul className='grid grid-cols-3 w-full p-2 gap-2'>
        {menuItem.map((item, i)=>{
          const isActive = location.pathname === item.path || (isHatalMnifestActive && item.path.startsWith("/HatalMnifest"))
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
