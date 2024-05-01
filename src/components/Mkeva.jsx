import { useState } from 'react'
import { Link } from 'react-router-dom'
import PopUpPdf from './PopUpPdf'
import { motion } from 'framer-motion'

export default function Mkeva() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState(null)
  const file = ['pdf/crtisHever.pdf','pdf/mikum.pdf','pdf/horeLeAdamImMugblut.pdf','pdf/siyuaKlkle.pdf','pdf/mshretImBenMshpaha.pdf','pdf/meshrtyHArava.pdf','pdf/tosefetCspit.pdf',]

  const openPdf = (pdfPath) => {
    setSelectedPdf(pdfPath); // Update the selected PDF file
    setIsPopupOpen(true);
 };
  return (
    <motion.div className='text-center bg-slate-100 flex-1 container mx-auto py-4 px-8 mt-[120px]' >
      <div className='font-bold pb-4 px-4'>משרתים יקרים לפנייכם מגוון רחב של מידע בנושאים שונים  כדי להקל את תחילת שרותכם בצה"ל</div>
      <section className='grid grid-flow-row sm:grid-cols-1 gap-8 mb-4'>
        <h1 className='font-bold'>"חבר"</h1>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-40 object-contain ' src='/img/giftcard.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>האתר הרשמי שך עובדי צהל כל ההתבות האירועים וההתכנסויות במקום אחד</p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[0])}>כרטיסי חבר ושי הרמטכ"ל</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-40 object-contain ' src='/img/shield.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>האתר הרשמי של עובדי צהל כל ההתבות האירועים וההתכנסויות במקום אחד</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.hvr.co.il/orders/signin.aspx?redirect=%2Fsite%2Fpg%2Fins_body'>ביטוחים</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-40 object-contain ' src='/img/accounting.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחופש ? כל המקומות החימם ביותר במקום אחד</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.hvr.co.il/orders/signin.aspx?redirect=/site/pg/mcc_item_new%2C126211'>זכאות לפטור ממס</Link>
          </div>
        </article>
      </section>
      <section className='grid grid-flow-row sm:grid-cols-1 gap-8 mb-4 pt-8'>
        <h1 className='font-bold'>מידע על נושאים שונים באתר צה"ל</h1>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl  p-2' src='/img/7-days.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>כל המידע שאתם צריכים בנוגע לחטל, זמני ארוחות, מספרי פאלאפון ועזרה ראשונה</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%97%d7%95%d7%a4%d7%a9%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>ימי מחלה וחופשה</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl  p-2' src='/img/house.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>עכשיו זה קל יותר דווחו למפקדים שלכם על נוחכות בלחיצת כפתור</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94-%d7%93%d7%99%d7%95%d7%a8-%d7%95%d7%94%d7%9c%d7%a0%d7%94/'>פתרונות דיור והלנות</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl  p-2' src='/img/car.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>חיל הרפואה כאן בשבילכם כל מה שאצה צריכים במקום אחד קביעת תורים, פניות לרופאים ובקשות לנרשמים </p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%a8%d7%9e%d7%91-%d7%99-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>רכב רמב"י</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/boy.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94-%d7%92%d7%a0%d7%99-%d7%99%d7%9c%d7%93%d7%99%d7%9d-%d7%95%d7%a7%d7%99%d7%99%d7%98%d7%a0%d7%95%d7%aa/'>גני ילדים וקייטנות</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/parenting.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%94%d7%a8%d7%99%d7%95%d7%9f-%d7%95%d7%94%d7%95%d7%a8%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>הריון והורות</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/rest.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%D7%9B%D7%AA%D7%91%D7%95%D7%AA-%D7%95%D7%A2%D7%93%D7%9B%D7%95%D7%A0%D7%99%D7%9D/2023/%D7%99%D7%A0%D7%95%D7%90%D7%A8/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%A0%D7%95%D7%A4%D7%A9-%D7%A7%D7%A6%D7%99%D7%A0%D7%99%D7%9D-%D7%9E%D7%A9%D7%A8%D7%AA%D7%99-%D7%A7%D7%91%D7%A2-%D7%A9%D7%A0%D7%AA-2023/'>נופשים</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/credit.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%94%d7%9c%d7%95%d7%95%d7%90%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>הלוואות</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/fifnansi.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.youtube.com/watch?v=0tHOpmobk-c'>Check-Up פיננסי</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/commandor.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%94%d7%98%d7%91%d7%95%d7%aa-%d7%9c%d7%9e%d7%a4%d7%a7%d7%93-%d7%94%d7%9c%d7%95%d7%97%d7%9d-%d7%94%d7%a0%d7%92%d7%93-%d7%94%d7%9c%d7%95%d7%97%d7%9d-%d7%95%d7%90%d7%95%d7%9b%d7%9c%d7%95%d7%a1%d7%99%d7%95%d7%aa-%d7%97%d7%a8%d7%99%d7%92%d7%95%d7%aa/'>מפקדים לוחמים</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/clothes.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%a0%d7%a7%d7%95%d7%93%d7%95%d7%aa-%d7%9e%d7%93%d7%99%d7%9d-%d7%95%d7%a1%d7%a4%d7%95%d7%a8%d7%a9%d7%99%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94-2023/'>נקודות מדים וספורשיות</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/scholarship.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%9e%d7%9c%d7%92%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>מלגות</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/table.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%99%d7%93%d7%95%d7%a2%d7%99%d7%9d-%d7%91%d7%a6%d7%99%d7%91%d7%95%d7%a8-%d7%95%d7%a1%d7%9e%d7%95%d7%9b%d7%99%d7%9d-%d7%9c%d7%a9%d7%95%d7%9c%d7%97%d7%9f-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>ידועים בציבור וסמוכים לשולחן</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/work.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94-%d7%94%d7%99%d7%aa%d7%a8-%d7%a2%d7%91%d7%95%d7%93%d7%94-%d7%a4%d7%a8%d7%98%d7%99%d7%aa/'>היתר עבודה</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/gas.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%94%d7%97%d7%96%d7%a8-%d7%94%d7%95%d7%a6%d7%90%d7%95%d7%aa-%d7%a0%d7%a1%d7%99%d7%a2%d7%94-%d7%91%d7%a8%d7%9b%d7%91-%d7%a4%d7%a8%d7%98%d7%99-%d7%9c%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%a7%d7%91%d7%a2-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>החזר הוצאות נסיעה</Link>
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/research.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <Link className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' to='https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99-%D7%99%D7%97%D7%99%D7%93%D7%95%D7%AA/%D7%90%D7%AA%D7%A8-%D7%94%D7%A4%D7%A7%D7%95%D7%93%D7%95%D7%AA/%D7%A4%D7%A7%D7%95%D7%93%D7%95%D7%AA-%D7%9E%D7%98%D7%9B-%D7%9C/%D7%A4%D7%A7%D7%95%D7%93%D7%95%D7%AA-%D7%97%D7%93%D7%A9%D7%95%D7%AA/04-203-%D7%93%D7%99%D7%A8%D7%95%D7%92-%D7%9E%D7%95%D7%A4-%D7%AA-%D7%9E%D7%97%D7%A7%D7%A8-%D7%95%D7%A4%D7%99%D7%AA%D7%95%D7%97/'>דירוג מחקר</Link>
          </div>
        </article>
      </section>
      <section className='grid grid-flow-row sm:grid-cols-1 gap-8 pt-8'>
        <h1 className='font-bold'>קבצים נחוצים למשרתי קבע</h1>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/leaf.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>כל המידע הנדרש על הקורסים וגמולות ההשתלמות</p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[1])}>מכון קבע</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/family.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[2])}>הורים לילדים עם צרכים מיוחדים</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/help.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[3])}>סיוע בקשיים כלכליים</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/hospital.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[4])}>בן משפחה מטפל</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/desert.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[5])}>משרתי קבע ביחידות הערבה</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
        <article className=' flex flex-col mx-auto justify-center bg-gray-200 rounded-xl shadow-lg shadow-slate-900'>
          <img className=' mx-auto h-56 w-full object-contain rounded-t-xl p-2' src='/img/level.png'/>
          <div className=' rounded-b-xl bg-slate-800 px-6 py-4 text-slate-300'>
            <p className='text-slate-300 p-2'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            <button className=' text-xl inline-block rounded-t rounded-b mx-auto justify-center bg-blue-600 p-4 font-bold w-full px-1' onClick={()=> openPdf(file[6])}>רמות פעילות</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
        </article>
      </section>
    </motion.div>
  )
}