import { motion, useAnimation } from 'framer-motion'
export default function BmInstructions() {
    return (
      <section
        id="bm-instructions"
        className="container prose prose-sm mx-auto px-8 py-4 pt-0 md:prose-lg lg:prose-xl bg-gradient-to-br from-[#FFFFFF] to-[#F5F5F5] mt-[10px]"
        
      >
        <p className="font-Katana text-[#432DC9] text-[26px]">הוראות ביטחון מידע</p>
        <br/>
        <p className="font-Katana text-[#432DC9] text-[22px] m-0">תעודת חייל (חוגר)</p>
        <ul className="font-Assin text-black text-[16px] marker:text-black px-5 list-disc my-8">
          <li>כל חייל חייב לשמור בקפדנות על מסמכיו/תעודותיו האישיות לבל ייגנבו/ייאבדו</li>
          <br/>
          <li>
            אין למסור את תעודת החייל שברשותך לכל מטרה שהיא, למעט לגורמים מוסמכים (מפקד, קצין, מ.צ
            וכו').
          </li>
          <br/>
          <li>בכל מקרה של אובדן התעודה/מסמך או מציאתן יש לדווח מיד למפקד!</li>
          
        </ul>
        <p className="font-Katana text-[#432DC9] text-[22px] m-0">שיחות בלתי זהירות</p>
        <ul className="font-Assin text-black text-[16px] marker:text-black px-5 list-disc my-8">
          <li>חל איסור לשוחח על נושאים צבאיים עם אדם אשר אינו שייך ליחידה.</li>
          <br/>
          <li>אין למסור לאיש פרטים וידיעות שהגיעו לידך בתוקף תפקידך או באופן מקרי</li>
          <br/>
          <li>אין לשוחח על עניינים צבאיים במקומות בהם קיים חשש שתוכן השיחה יגיע לאוזניים זרות</li>
          <br/>
          <li>
            חל איסור על מסירת כל הודעה או ידיעה הקשורות ישירות או עקיפין לצה"ל לגורמים אזרחיים זרים
            (לדוגמה: תקשורת וכו').
          </li>
        </ul>
      </section>
    )
  }
  