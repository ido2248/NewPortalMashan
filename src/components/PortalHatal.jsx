import React from 'react'
import { Link } from 'react-router-dom'

export default function PortalHatal() {
  return (
    <div className='text-center bg-slate-100 flex-1 container mx-auto py-4 px-8'>
      <div>משרתים יקרים לפנייכם מגוון רחב של מידע בנושאים שונים  כדי להקל את תחילת שרותכם בצה"ל</div>
      <section className='grid grid-flow-row sm:grid-cols-1 gap-8'>
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
          <img className=' mx-auto h-40 object-cover bg-gray-200' src='/img/sadir.jpg'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>כל המידע שאתם צריכים בנוגע לחטל, זמני ארוחות, מספרי פאלאפון ועזרה ראשונה</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-indigo-500 p-4 font-bold w-full px-1' to='https://sadir.azurewebsites.net/'>סדיר</Link>
          </div>
        </article>
        
      </section>
    </div>
  )
}
