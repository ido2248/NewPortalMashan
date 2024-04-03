import { Link } from 'react-router-dom';
function Navbar() {
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
  return (
   <>
    <nav className='w-full shadow-md bg-slate-100'>
      <ul className="grid grid-cols-3 place-items-center p-4">
        {menuItem.map((item, index)=>{
          return (
            <li key={index} className='flex justify-center items-center text-center list-none'>
              <Link to={item.path} className='flex justify-center text-slate-950 text-[15px] h-full items-center rounded no-underline' >
                {item.name}
                {/* <item.icon className='ml-4'/> */}
              </Link>
            </li>
          )      
        })}
      </ul>
    </nav>
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