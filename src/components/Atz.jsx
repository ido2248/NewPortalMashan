import { useState } from 'react'
import { Link } from 'react-router-dom'
import PopUpPdf from './PopUpPdf'
import { motion } from 'framer-motion'

export default function Atz() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState(null)
  const file = ['pdf/hatlmutPay.pdf','pdf/moedBhira2023.pdf','pdf/hopheshMerukaz2023.pdf']

  const openPdf = (pdfPath) => {
    setSelectedPdf(pdfPath); // Update the selected PDF file
    setIsPopupOpen(true);
 };
  return (
    <motion.div className='text-center bg-white flex-1 container mx-auto py-4 px-8 mt-[150px]' initial={{ opacity:0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 ,transition:{duration:0.2}}}>
      <div className='font-bold pb-4 px-4'>משרתים יקרים לפנייכם מגוון רחב של מידע בנושאים שונים  כדי להקל את תחילת שרותכם בצה"ל</div>
      <section className='grid grid-flow-row sm:grid-cols-1 gap-8 mb-4'>
        <h1 className='font-bold'>ארגון עובדי צהל</h1>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-40 object-contain ' src='/img/eoz.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>האתר הרשמי שך עובדי צהל כל ההתבות האירועים וההתכנסויות במקום אחד</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.ovdayzahal.org.il/'>אתר ארגון עובדי צה"ל</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-40 object-contain ' src='/img/vacation.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחופש ? כל המקומות החימם ביותר במקום אחד</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://oz.eshet.com/login'>אתר הזמנות נופש</Link>
          </div>
        </article>
      </section>
      <section className='grid grid-flow-row sm:grid-cols-1 gap-8 mb-4 pt-8'>
        <h1 className='font-bold'>מידע על נושאים שונים באתר צה"ל</h1>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl  p-2' src='/img/taaz.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>כל המידע שאתם צריכים בנוגע לחטל, זמני ארוחות, מספרי פאלאפון ועזרה ראשונה</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99-%D7%99%D7%97%D7%99%D7%93%D7%95%D7%AA/https-www-idf-il-d7-90-d7-aa-d7-a8-d7-99-d7-9d-d7-9e-d7-a8-d7-9b-d7-96-d7-aa-d7-a2-d7-a1-d7-95-d7-a7-d7-aa-d7-a2-d7-95-d7-91-d7-93-d7-99-d7-a6-d7-94-d7-9c/'>אתר מרכז תע"צ</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl  p-2' src='/img/dormitory.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>עכשיו זה קל יותר דווחו למפקדים שלכם על נוחכות בלחיצת כפתור</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/19875'>תוספת מעונות</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl  p-2' src='/img/parent.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>חיל הרפואה כאן בשבילכם כל מה שאצה צריכים במקום אחד קביעת תורים, פניות לרופאים ובקשות לנרשמים </p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/19835'>משרת הורה</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/salary.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/19876'>תוספת וגמול השתלמות</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/fmaily-vac.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/19920'>חופשת משפחה</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/student.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/19893'>לימודים</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/health.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/19906'>בדיקות רפואיות</Link>
          </div>
        </article>
      </section>
      <section className='grid grid-flow-row sm:grid-cols-1 gap-8 pt-8'>
        <h1 className='font-bold'>קבצים נחוצים לאזרחים עובדי צה"ל</h1>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/course.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>כל המידע הנדרש על הקורסים וגמולות ההשתלמות</p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[0])}>השתלמות בשכר</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/choose.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[1])}>ימי מועד ובחירה</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/summer.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[2])}>חופשות מרוכזות וימי גשר</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
      </section>
    </motion.div>
  )
}