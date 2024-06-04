import { useState } from 'react'
import { Link } from 'react-router-dom'
import PopUpPdf from './PopUpPdf'
import { motion } from 'framer-motion'

export default function Atz({ drag, isPopupOpen, setIsPopupOpen }) {
  const [selectedPdf, setSelectedPdf] = useState(null)
  const file = ['pdf/hatlmutPay.pdf','pdf/moedBhira2023.pdf','pdf/hopheshMerukaz2023.pdf']

  const openPdf = (pdfPath) => {
    drag.set(0)
    setSelectedPdf(pdfPath); // Update the selected PDF file
    setIsPopupOpen(true);
 };

 const hendelChange = (event) => {
  const searchValue = event.target.value;
  const h1Elements = document.querySelectorAll('h1'); // Select all h1 elements with the class 'font-Katana'
 
  h1Elements.forEach((element) => {
    const article = element.closest('article'); // Find the closest 'article' parent of the 'h1'
    if (element.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
      article.style.display = ''; // Show the article if the h1 matches the search value
    } else {
      article.style.display = 'none'; // Hide the article if the h1 doesn't match
    }
  });
 };
  return (
<<<<<<< HEAD
    <motion.div dir='rtl' className='text-center bg-white flex-1 container  px-4 pt-[10px]' initial={{ opacity:0}} animate={{opacity:1}} exit={{ x:100, opacity:0, transition:{duration:0.2}}} >
=======
    <motion.div dir='rtl' className='text-center bg-white flex-1 container  px-4 mt-[170px]' initial={{ opacity:0}} animate={{opacity:1}} exit={{ x:100, opacity:0, transition:{duration:0.2}}} >
>>>>>>> parent of 5ea9402 (update)
      <div className=' text-[24px] font-Katana text-[#432DC9]'>אזרחים עובדי צה"ל היקרים</div>
      <div className='text-[16px]  font-Assin'>לפניכם מגוון רחב של מידע בנושאים שונים</div>
      <div className='text-[16px]  font-Assin'>המטרה להנגיש עבורכם את המידע והפעולות השונות</div>
      <input type='text' placeholder='חיפוש' onChange={hendelChange} className='text-[18px] shadow-lg shadow-[#000000]/10 rounded-lg m-3 h-[40px] w-[80%] p-2 outline-none'/>
      <section className='text-black'>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/eoz.png'/>
            <div className='flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>אתר ארגון עובדי צהל</h1>
              <p className='font-Assin text-[16px] text-start'>האתר הרשמי של עובדי צהל כל ההטבות האירועים וההתכנסויות במקום אחד</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px] ' to='https://www.ovdayzahal.org.il/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/vacation.png'/>
            <div className='flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>אתר הזמנות נופש</h1>
              <p className='font-Assin text-[16px] text-start'>רוצים לצאת לחופש ? כל המקומות החימם ביותר במקום אחד</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://oz.eshet.com/login'>מעבר לאתר</Link>
        </article>
      </section>
      <section className='text-black'>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/taaz.png'/>
            <div className='flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>אתר מרכז תע"צ</h1>
              <p className='font-Assin text-[16px] text-start'>כל מה שאתה צרכים בשביל להתחיל לעבוד בצה"ל</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99-%D7%99%D7%97%D7%99%D7%93%D7%95%D7%AA/https-www-idf-il-d7-90-d7-aa-d7-a8-d7-99-d7-9d-d7-9e-d7-a8-d7-9b-d7-96-d7-aa-d7-a2-d7-a1-d7-95-d7-a7-d7-aa-d7-a2-d7-95-d7-91-d7-93-d7-99-d7-a6-d7-94-d7-9c/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className=' h-[68px] w-[68px] m-2' src='/img/dormitory.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>תוספת מעונות</h1>
              <p className='font-Assin text-[16px] text-start'>כל המידע הדרוש על תוספת מעונות תנאי קבלהת תשלום תוספת מעונות ועוד</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/19875'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className=' h-[68px] w-[68px] m-2' src='/img/parent.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>משרת הורה</h1>
              <p className='font-Assin text-[16px] text-start'>הורים ? בשבילכים מידע על משרת הורה</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/19835'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className=' h-[68px] w-[68px] m-2' src='/img/salary.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>תוספות וגמול התשלמות</h1>
              <p className='font-Assin text-[16px] text-start'>כל האנשים הזכאים לתוספת השתלמות וגמול השתלמות</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/19876'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className=' h-[68px] w-[68px] m-2' src='/img/fmaily-vac.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>חופשת משפחה</h1>
              <p className='font-Assin text-[16px] text-start'>מידע המיועד לחופשה משפחתית לחצו כאן</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/19920'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className=' h-[68px] w-[68px] m-2' src='/img/student.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>לימודים</h1>
              <p className='font-Assin text-[16px] text-start'>עובדים בצה"ל ורצים ללמוד כל הפרטים נמצאים כאן</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/19893'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className=' h-[68px] w-[68px] m-2' src='/img/health.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>בדיקות רפואיות</h1>
              <p className='font-Assin text-[16px] text-start'>מידע על רפואה לאזרחים עובדי צ"הל לחצו כאן</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/19906'>מעבר לאתר</Link>
        </article>
      </section>
      <section className=' text-black'>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className=' h-[68px] w-[68px] m-2' src='/img/course.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>השתלמות בשכר</h1>
              <p className='font-Assin text-[16px] text-start'>כל המידע הנדרש על הקורסים וגמולות ההשתלמות</p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[0])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className=' h-[68px] w-[68px] m-2' src='/img/choose.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>ימי מועד ובחירה</h1>
              <p className='font-Assin text-[16px] text-start'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[1])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className=' h-[68px] w-[68px] m-2' src='/img/summer.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>חופשות מרוכזות וימי גשר</h1>
              <p className='font-Assin text-[16px] text-start'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[2])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
      </section>
    </motion.div>
  )
}