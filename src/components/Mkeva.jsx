import { useState } from 'react'
import { Link } from 'react-router-dom'
import PopUpPdf from './PopUpPdf'
import { motion } from 'framer-motion'

export default function Mkeva({ drag, isPopupOpen, setIsPopupOpen }) {
  
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [searchText, setSearchText] = useState("")
  const file = ['pdf/crtisHever.pdf','pdf/mikum.pdf','pdf/horeLeAdamImMugblut.pdf','pdf/siyuaKlkle.pdf','pdf/mshretImBenMshpaha.pdf','pdf/meshrtyHArava.pdf','pdf/tosefetCspit.pdf',]

  const openPdf = (pdfPath) => {
    drag.set((0))
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
    <motion.div dir='rtl' className='text-center bg-white flex-1 container  px-4 pt-[160px]' initial={{ opacity:0}} animate={{opacity:1}} exit={{ opacity:0, transition:{duration:0.2}}}>
      <div className=' text-[24px] font-Katana text-[#432DC9]'>משרתי קבע היקרים</div>
      <div className='text-[16px]  font-Assin'>לשימושכם מידע בתחומים שונים</div>
      <div className='text-[16px]  font-Assin'>המטרה להנגיש עבורכם את המידע והפעולות השונות</div>
      <input type='text' placeholder='חיפוש' onChange={hendelChange} className='text-[18px] shadow-lg shadow-[#000000]/10 rounded-lg m-3 h-[40px] w-[80%] p-2 outline-none'/>
      <section className='text-black'>
        {/* <h1 className='font-bold'>"חבר"</h1> */}
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2 ' src='/img/giftcard.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>כרטיסי חבר ושי הרמטכ"ל</h1>
              <p className='font-Assin text-[16px] text-start'>כל המדיע הדרוש על כרטיסי חבר ושי הרמטכ"ל</p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[0])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2 ' src='/img/shield.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>ביטוחים</h1>
              <p className='font-Assin text-[16px] text-start'>כניסה לאתר חבר בנוגע למידע על ביטוחים</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.hvr.co.il/orders/signin.aspx?redirect=%2Fsite%2Fpg%2Fins_body'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2 ' src='/img/accounting.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>זכאות לפטור ממס</h1>
              <p className='font-Assin text-[16px] text-start'>כניסה לאתר חבר בנודע למידע על זכאות לפטור ממס</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.hvr.co.il/orders/signin.aspx?redirect=/site/pg/mcc_item_new%2C126211'>מעבר לאתר</Link>
        </article>
      </section>
      <section className='text-black'>
        {/* <h1 className='font-bold'>מידע על נושאים שונים באתר צה"ל</h1> */}
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/7-days.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>ימי מחלה וחופשה</h1>
              <p className='font-Assin text-[16px] text-start'>רוצה לקחת ימי חופש או ימי מחלה ? כל המדיע באתר הבא</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%97%d7%95%d7%a4%d7%a9%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/house.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>פתרונות דיור והלנות</h1>
              <p className='font-Assin text-[16px] text-start'>משרטי קבע הזקוקים לדיר כל המידע הדרוש באתר</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94-%d7%93%d7%99%d7%95%d7%a8-%d7%95%d7%94%d7%9c%d7%a0%d7%94/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/car.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>רכב רמב"י</h1>
              <p className='font-Assin text-[16px] text-start'>צריכים רכב רמב"י ? כל הזכאים ומידע מפורט באתר</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%a8%d7%9e%d7%91-%d7%99-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/boy.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>גני ילדים מקייטנות</h1>
              <p className='font-Assin text-[16px] text-start'>מידע על גנים וקייטנות כל מה שצריך באתר הבא</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94-%d7%92%d7%a0%d7%99-%d7%99%d7%9c%d7%93%d7%99%d7%9d-%d7%95%d7%a7%d7%99%d7%99%d7%98%d7%a0%d7%95%d7%aa/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/parenting.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>הריון והורות</h1>
              <p className='font-Assin text-[16px] text-start'>מצפים לילד/ה כל המדיע הדרוש כל זכויותכים</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%94%d7%a8%d7%99%d7%95%d7%9f-%d7%95%d7%94%d7%95%d7%a8%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/rest.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>נופשים</h1>
              <p className='font-Assin text-[16px] text-start'>לפני היציא לנופש כל המדיע הדרוש כל זכויותכם</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%D7%9B%D7%AA%D7%91%D7%95%D7%AA-%D7%95%D7%A2%D7%93%D7%9B%D7%95%D7%A0%D7%99%D7%9D/2023/%D7%99%D7%A0%D7%95%D7%90%D7%A8/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%A0%D7%95%D7%A4%D7%A9-%D7%A7%D7%A6%D7%99%D7%A0%D7%99%D7%9D-%D7%9E%D7%A9%D7%A8%D7%AA%D7%99-%D7%A7%D7%91%D7%A2-%D7%A9%D7%A0%D7%AA-2023/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/credit.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>הלוואות</h1>
              <p className='font-Assin text-[16px] text-start'>זקוקים להלוואה ? כל המידע הדרוש והזכאים להלוואה באתר</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%94%d7%9c%d7%95%d7%95%d7%90%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/fifnansi.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>Check-Up פיננסי</h1>
              <p className='font-Assin text-[16px] text-start'>סרטון מידע בנוגע לCkeck-Up פיננסי כל המידע הדרוש</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.youtube.com/watch?v=0tHOpmobk-c'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/commandor.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>מפקדים לוחמים</h1>
              <p className='font-Assin text-[16px] text-start'>הטבות למפקד הלוחם, הנגד הלוחם ואוכלוסיות חריגות</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%94%d7%98%d7%91%d7%95%d7%aa-%d7%9c%d7%9e%d7%a4%d7%a7%d7%93-%d7%94%d7%9c%d7%95%d7%97%d7%9d-%d7%94%d7%a0%d7%92%d7%93-%d7%94%d7%9c%d7%95%d7%97%d7%9d-%d7%95%d7%90%d7%95%d7%9b%d7%9c%d7%95%d7%a1%d7%99%d7%95%d7%aa-%d7%97%d7%a8%d7%99%d7%92%d7%95%d7%aa/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/clothes.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>נקודות מדים וספורשיות</h1>
              <p className='font-Assin text-[16px] text-start'>המידע הדרוש על נקודות מדים איפה ניתן לממש ומה אפשר לקנות</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%a0%d7%a7%d7%95%d7%93%d7%95%d7%aa-%d7%9e%d7%93%d7%99%d7%9d-%d7%95%d7%a1%d7%a4%d7%95%d7%a8%d7%a9%d7%99%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94-2023/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/scholarship.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>מלגות</h1>
              <p className='font-Assin text-[16px] text-start'>כל המידע הדרוש בנוגע למלגות הזכאים לה והסכומים</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%9e%d7%9c%d7%92%d7%95%d7%aa-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/table.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>ידועים בציבור וסמוכים לשולחן</h1>
              <p className='font-Assin text-[16px] text-start'>המדיע הדרוש על ידועים בציבור וסומוכים לשולחן</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%99%d7%93%d7%95%d7%a2%d7%99%d7%9d-%d7%91%d7%a6%d7%99%d7%91%d7%95%d7%a8-%d7%95%d7%a1%d7%9e%d7%95%d7%9b%d7%99%d7%9d-%d7%9c%d7%a9%d7%95%d7%9c%d7%97%d7%9f-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/work.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>היתר עבודה</h1>
              <p className='font-Assin text-[16px] text-start'>כל הפרטים הדרושים להיתר עבודה ואך להשיגה</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94-%d7%94%d7%99%d7%aa%d7%a8-%d7%a2%d7%91%d7%95%d7%93%d7%94-%d7%a4%d7%a8%d7%98%d7%99%d7%aa/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/gas.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>החזר הוצאות נסיעה</h1>
              <p className='font-Assin text-[16px] text-start'>משרתי קבע חסרי או בעלי רכב צבאי חלקי שמשתמשים ברכבם הפרטי כל הזכויות</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/%d7%a1%d7%95%d7%92%d7%99-%d7%94%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%91%d7%a6%d7%94-%d7%9c/%d7%a9%d7%99%d7%a8%d7%95%d7%aa-%d7%a7%d7%91%d7%a2/%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/%d7%94%d7%97%d7%96%d7%a8-%d7%94%d7%95%d7%a6%d7%90%d7%95%d7%aa-%d7%a0%d7%a1%d7%99%d7%a2%d7%94-%d7%91%d7%a8%d7%9b%d7%91-%d7%a4%d7%a8%d7%98%d7%99-%d7%9c%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%a7%d7%91%d7%a2-%d7%96%d7%9b%d7%95%d7%99%d7%95%d7%aa-%d7%9e%d7%a9%d7%a8%d7%aa%d7%99-%d7%94%d7%a7%d7%91%d7%a2-%d7%94%d7%9e%d7%a2%d7%98%d7%a4%d7%aa-%d7%94%d7%a9%d7%9c%d7%9e%d7%94/'>מעבר לאתר</Link>
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/research.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>דירוג מחקר</h1>
              <p className='font-Assin text-[16px] text-start'>דירות מחקר ופיתח על המידע הדרוש נמצא כאן</p>
            </div>
          </div>
          <Link className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99-%D7%99%D7%97%D7%99%D7%93%D7%95%D7%AA/%D7%90%D7%AA%D7%A8-%D7%94%D7%A4%D7%A7%D7%95%D7%93%D7%95%D7%AA/%D7%A4%D7%A7%D7%95%D7%93%D7%95%D7%AA-%D7%9E%D7%98%D7%9B-%D7%9C/%D7%A4%D7%A7%D7%95%D7%93%D7%95%D7%AA-%D7%97%D7%93%D7%A9%D7%95%D7%AA/04-203-%D7%93%D7%99%D7%A8%D7%95%D7%92-%D7%9E%D7%95%D7%A4-%D7%AA-%D7%9E%D7%97%D7%A7%D7%A8-%D7%95%D7%A4%D7%99%D7%AA%D7%95%D7%97/'>מעבר לאתר</Link>
        </article>
      </section>
      <section className='text-black'>
        {/* <h1 className='font-bold'>קבצים נחוצים למשרתי קבע</h1> */}
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/leaf.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>מכון קבע</h1>
              <p className='font-Assin text-[16px] text-start'>מכון ליעוץ ולטיפול באנשי קבע ומשפחותיהם</p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[1])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/family.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>הורים לילדים עם צרכים מיוחדים</h1>
              <p className='font-Assin text-[16px] text-start'>כל המדיע הדרוש להורים לילדים עם צרכים מיוחדים</p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[2])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/help.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>סיוע בקשיים כלכליים</h1>
              <p className='font-Assin text-[16px] text-start'> כל מידע הדרוש בסיוע למשרתים בקשיים כלכליים</p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[3])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/hospital.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>בן משפחה מטפל</h1>
              <p className='font-Assin text-[16px] text-start'>מדיניות משרת/ת קבע המטפל/ת בבן משפחה</p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[4])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/desert.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>משרתי קבע ביחידות הערבה</h1>
              <p className='font-Assin text-[16px] text-start'>כל המידע הדרוש למשרתי קבע ביחידות בערבה/אילת</p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[5])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
        <article className=' justify-end mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-3 h-[139px] relative p-2 flex flex-col items-end'>
          <div className='flex flex-row items-center justify-center mb-1'>
            <img className='h-[68px] w-[68px] m-2' src='/img/level.png'/>
            <div className=' flex flex-col items-start'>
              <h1 className='font-Katana text-[24px] font-bold text-start'>רמות פעילות</h1>
              <p className='font-Assin text-[16px] text-start'>רמות פעילות ותוספות כספיות למשרתי קבע</p>
            </div>
          </div>
          <button className=' text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[6])}>לפתיחת הקובץ</button>
          {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
        </article>
      </section>
    </motion.div>
  )
}