import { Link } from 'react-router-dom'
import { useState } from 'react'
import PopUpPdf from './PopUpPdf'


export default function PortalHatal() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  return (
    <div className='text-center bg-slate-100 flex-1 container mx-auto py-4 px-8'>
      <div>משרתים יקרים לפנייכם מגוון רחב של מידע בנושאים שונים  כדי להקל את תחילת שרותכם בצה"ל</div>
      <section className='grid grid-flow-row sm:grid-cols-1 gap-8 mb-4'>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-40 object-cover bg-gray-200' src='/img/cadic.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>כל מה שאתם צריכים מצה"ל במקום אחד! גישה לשירותים שונים, מימוש זכויות, צפייה במידע האישי שלך ופתיחת פנייה ליחידה ולמוקדי השירות</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-indigo-500 p-4 font-bold w-full px-1' to='https://www.home.idf.il/'>צ 360</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-40 object-cover bg-gray-200' src='/img/swords-of-iron.webp'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>כל המידע העדכני על מלחמת חרבות ברזל בזמן אמת</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-indigo-500 p-4 font-bold w-full px-1' to='https://www.home.idf.il/'>חרבות ברזל</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-cover rounded-t-xl bg-gray-200' src='/img/sadir.jpg'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>כל המידע שאתם צריכים בנוגע לחטל, זמני ארוחות, מספרי פאלאפון ועזרה ראשונה</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-indigo-500 p-4 font-bold w-full px-1' to='https://sadir.azurewebsites.net/'>סדיר</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl bg-gradient-to-br from-[#f4dd5d] to-[#f0cd42]' src='/img/do1.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>עכשיו זה קל יותר דווחו למפקדים שלכם על נוחכות בלחיצת כפתור</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-indigo-500 p-4 font-bold w-full px-1' to='https://one.prat.idf.il/login'>דו"ח 1</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl bg-gradient-to-br from-[#00a4e8] to-[#009cea]' src='/img/medi.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>חיל הרפואה כאן בשבילכם כל מה שאצה צריכים במקום אחד קביעת תורים, פניות לרופאים ובקשות לנרשמים </p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-indigo-500 p-4 font-bold w-full px-1' to='https://meditik.medical.idf.il/'>MediTik</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-cover rounded-t-xl' src='/img/plane.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-indigo-500 p-4 font-bold w-full px-1' to='https://www.prat.idf.il/?returnUrl=%2f%d7%94%d7%a9%d7%9b%d7%a8-%d7%a9%d7%9c%d7%99%2f%d7%98%d7%a4%d7%a1%d7%99%d7%9d-%d7%9e%d7%a7%d7%95%d7%95%d7%a0%d7%99%d7%9d%2f%d7%93%d7%99%d7%95%d7%95%d7%97-%d7%99%d7%a6%d7%99%d7%90%d7%94-%d7%9c%d7%97%d7%95%d7%9c%2f'>היתר יצאה לחו"ל</Link>
          </div>
        </article>
      </section>
      <section className='grid grid-flow-row sm:grid-cols-1 gap-8'>
      <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-cover rounded-t-xl' src=''/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-indigo-500 p-4 font-bold w-full px-1' onClick={()=> setIsPopupOpen(true)}>ת"ש</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)}/>}
          </div>
        </article>
      </section>
    </div>
  )
}
