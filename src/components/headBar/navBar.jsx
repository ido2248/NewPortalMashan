import { NavLink, useLocation } from 'react-router-dom';
import Headroom from 'react-headroom'
function Navbar() {
  
//   const [position, setPosition] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     let lastPosition = window.pageYOffset;

//     const handleScroll = () => {
//       const currentPosition = window.pageYOffset;
//       setPosition(currentPosition);

//       if (currentPosition > lastPosition) {
//         // Scrolling down
//         setVisible(false);
//       } else {
//         // Scrolling up
//         setVisible(true);
//       }

//       lastPosition = currentPosition;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//  }, [position]);

  const menuItem=[
    {
      path:'/Atz',
      name:'אזרחים עובדי צהל',
    //   icon: BiDetail
    },
    {
      path:'/',
      name:'חט"ל',
    //   icon: BsFillBoxSeamFill
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
    <Headroom >

        <nav className={`w-full shadow-md bg-slate-100  `}>
          <ul className="flex  text-center justify-between items-center pt-2 px-4 pb-1">
            {menuItem.map((item, index)=>{
              const isActive = location.pathname === item.path;
              return (
                <li key={index} className='flex  items-center text-center list-none'>
                  <NavLink to={item.path} className={`flex justify-center font-bold text-[14px] h-full items-center no-underline ${isActive ? ' text-blue-500 border-solid border-b-2 border-b-blue-500': ''}`} >
                    {item.name}
                    {/* <item.icon className='ml-4'/> */}
                  </NavLink>
                </li>
              )      
            })}
          </ul>
        </nav>
    </Headroom>

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