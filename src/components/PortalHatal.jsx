import { Link } from 'react-router-dom'
import { useState } from 'react'
import PopUpPdf from './PopUpPdf'
import { motion, useAnimation } from 'framer-motion'

export default function PortalHatal() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState(null)
  const file = ['pdf/tash1.pdf','pdf/hatal_courses.pdf']
  const controlls = useAnimation()
  // const direction = info.offset.x ;
  // console.log(direction)

  const openPdf = (pdfPath) => {
    setSelectedPdf(pdfPath); // Update the selected PDF file
    setIsPopupOpen(true);
 };


  return (
    <motion.div className='text-center bg-white flex-1 container  px-4 mt-[150px]'initial={{x:300, opacity:0}} animate={{ x: 0, opacity: 1 }} exit={{ x: 100, opacity: 0 ,transition:{duration:0.2}}}>
      <div className=' text-[24px] font-Katana text-[#432DC9]'>משרתים יקרים</div>
      <div className=' text-[16px]  font-Assin'>ריכזנו עבורכם במקום אחד את כלל המידע בנושאים השונים: פרט, רפואה, לוגיסטיקה ועוד</div>
      <br/>
      <div className=' text-[16px] font-Assin'>המטרה להנגיש עבודרכם את המידע והפעולות השונות</div>
      <section className='text-white'>
        <article className='mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-6 h-[279px] relative justify-center flex '>
          <img className='absolute w-[185px] h-[165px] object-cover' src='/img/cadic.png'/>
          <div className='bg-black/40 font-Assin rounded-b-lg p-2 absolute bottom-0 w-full '>
            <p className='text-[16px] p-2'>כל מה שאתם צריכים מצה"ל במקום אחר! גישה לשירותים שונים, מימוש זכויות, צפייה במידע האישי שלך ופתיחת פנייה ליחידה ולמוקדי השירות</p>
            <div className='flex justify-start'>
              <Link className='text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.home.idf.il/'>צ-360</Link>
            </div>
          </div>
        </article>
        <article className='mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-6 h-[279px] relative justify-center flex '>
          <img className='absolute w-[185px] h-[157px] object-cover' src='/img/swords-of-iron.webp'/>
          <div className='bg-black/40 font-Assin rounded-b-lg p-2 absolute bottom-0 w-full'>
            <p className='text-[16px] p-2'>כל המידע העדכני ביותר על מלחמת חרבות ברזל בזמן אמת</p>
            <div className='flex justify-start'>
              <Link className='text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.home.idf.il/'>חרבות ברזל</Link>
            </div>
          </div>
        </article>
         <article className=' mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-6 h-[279px] relative '>
          <img className='absolute w-full h-full object-cover rounded-lg' src='/img/newSadir.png'/>
          <div className='bg-black/40 font-Assin rounded-b-lg p-2 absolute bottom-0 w-full'>
            <p className='text-[16px] p-2'>כל המידע שאתם צריכים בנוגע לחטל, זמני ארוחות, מספרי פאלאפון ועזרה ראשונה</p>
            <div className='flex justify-start'>
              <Link className='text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://sadir.azurewebsites.net/'>סדיר</Link>
            </div>
          </div>
        </article>
         <article className=' mx-2 rounded-lg shadow-lg shadow-[#000000]/10 bg-[#F8F8F8] m-6 h-[279px] relative justify-center flex'>
          <img className='absolute w-[190px] h-[157px] object-cover' src='/img/newDo1.png'/>
          <div className='bg-black/40 font-Assin rounded-b-lg p-2 absolute bottom-0 w-full'>
          <p className='text-[16px] p-2'>עכשיו זה קל יותר דווחו למפקדים שלכם על נוחכות בלחיצת כפתור</p>
            <div className='flex justify-start'>
              <Link className='text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://one.prat.idf.il/login'>דו"ח 1</Link>
            </div>
          </div>
        </article>
        <article className=' mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-6 h-[279px] relative'>
          <img className=' absolute w-full h-full object-cover rounded-lg' src='/img/medi.png'/>
          <div className='bg-black/40 font-Assin rounded-b-lg p-2 absolute bottom-0 w-full'>
            <p className='text-[16px] p-2'>חיל הרפואה כאן בשבילכם כל מה שאתה צריכים במקום אחד קביעת תורים, פניות לרופאים ובקשות לנרשמים </p>
            <div className='flex justify-start'>
              <Link className='text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://meditik.medical.idf.il/'>MediTik</Link>
            </div>
          </div>
        </article>
        <article className=' mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-6 h-[279px] relative'>
          <img className=' absolute w-full h-full object-cover rounded-lg' src='/img/newPlane.png'/>
          <div className='bg-black/40 font-Assin rounded-b-lg p-2 absolute bottom-0 w-full'>
            <p className='text-[16px] p-2'>רוצים לצאת לחו"ל בזמן השירות ? כל המידע שאתה צריכים בשביל לעשות זאת נמצא ממש כאן</p>
            <div className='flex justify-start'>
              <Link className='text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.prat.idf.il/?returnUrl=%2f%d7%94%d7%a9%d7%9b%d7%a8-%d7%a9%d7%9c%d7%99%2f%d7%98%d7%a4%d7%a1%d7%99%d7%9d-%d7%9e%d7%a7%d7%95%d7%95%d7%a0%d7%99%d7%9d%2f%d7%93%d7%99%d7%95%d7%95%d7%97-%d7%99%d7%a6%d7%99%d7%90%d7%94-%d7%9c%d7%97%d7%95%d7%9c%2f'>היתר יצאה לחו"ל</Link>
            </div>
          </div>
        </article>
      </section>
      <section className='text-white'>
        <h1 className='font-bold'>קבצים שימושיים</h1>
        <article className='mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-6 h-[279px] relative'>
          <img className='absolute w-full h-full object-cover rounded-lg' src='/img/newCourse.png'/>
          <div className='bg-black/40 font-Assin rounded-b-lg p-2 absolute bottom-0 w-full'>
          <p className='text-[16px] p-2'>כל המידע הנדרש על הקורסים וגמולות ההשתלמות</p>
          <div className='flex justify-start'>
            <button className='text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[1])}>קורסים וגמו"ש</button>
            {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
          </div>
          </div>
        </article>
        <article className='mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-6 h-[279px] relative'>
          <img className='absolute w-full h-full object-cover rounded-lg' src='/img/tash.jpg'/>
          <div className='bg-black/40 font-Assin rounded-b-lg p-2 absolute bottom-0 w-full'>
            <p className='text-[16px] p-2'>מפקדים כל מה שאתם צריכים לדעת על חיילי ת"ש  זכויות </p>
            <div className='flex justify-start'>
              <button className='text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px]' onClick={()=> openPdf(file[0])}>ת"ש</button>
              {isPopupOpen && <PopUpPdf isOpen={isPopupOpen} onClose={()=> setIsPopupOpen(false)} pdf={selectedPdf}/>}
            </div>
          </div>
        </article>
      </section>
    </motion.div>
  )
}
