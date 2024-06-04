import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
export default function Highlights() {
    

    return (
      <section
        id="highlights"
        className="container prose prose-sm mx-auto px-8 py-4 md:prose-lg lg:prose-xl bg-gradient-to-br from-[#FFFFFF] to-[#F5F5F5] pt-[120px]"
        
      >
        <p className="font-Katana text-[#432DC9] text-[28px] m-0">דגשים</p>
        <article>
          <p className="font-Katana text-[#432DC9] text-[24px] m-0">הופעה ולבוש (בנים)</p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">שיער</p>
          <p className="font-Assin text-black text-[16px] m-0">
            שיערות החייל יהיו קצרות וללא דירוג או בלורית עם
            פאות עד חצי האוזן.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">זקן</p>
          <p className="font-Assin text-black text-[16px] m-0">
            הטופס יינתן ע"י מש"ק משמעת וסא"ל יהיה חתום עליו, הטופס חייב להיות צמוד לחוגר כל הזמן, חל
            איסור מוחלט לקצץ לרמת זיפים.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">נעליים</p>
          <p className="font-Assin text-black text-[16px] m-0">
            נעליים צבאיות עפ"י מה שנופק בבקו"ם מצוחצחות
            גומיות בנעליים + דסקיות.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">חולצה</p>
          <p className="font-Assin text-black text-[16px] m-0">
            מגוהצת בתוך המכנסיים.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">מכנסיים</p>
          <p className="font-Assin text-black text-[16px] m-0">
            מכנס מגוהץ + חגורה.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">גרביים</p>
          <p className="font-Assin text-black text-[16px] m-0">
            צבע אפור/שחור חלק.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">כומתה</p>
          <p className="font-Assin text-black text-[16px] m-0">
            בצבע ירוק זית (אלא אם כן החייל סיים מסלול והי
            ביחידה מזכה מעל 18 חודשים) תג יחידה בכותפת שמאל, דסקית רק על הצוואר, דרגות על כל שרוול
            עליון (עד סמ"ר כולל). תנועה על מדי ב' רק באישור סא"ל שחתום על הטופס ל־48 שעות.
          </p>
        </article>
          
        <article>
          <p className="font-Katana text-[#432DC9] text-[24px] m-0">הופעה ולבוש (בנות)</p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">שיער</p>
          <p className="font-Assin text-black text-[16px] m-0">
            חיילת תנוע עם שיער אסוף בגומייה שחור/חום, או
             סיכה בננה ללא קישוטים בצבע שחור. אין לענוד קישוטי שיער צבעוניים.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">לק</p>
          <p className="font-Assin text-black text-[16px] m-0">
            לבן פנינה, שקוף, ורוד בהיר, מותר לעשות פרנץ'
            בציפורניים בהתאם לצבעי הלק המותרים.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">טבעות</p>
          <p className="font-Assin text-black text-[16px] m-0">
            2 טבעות על 10 אצבעות.
          </p>        
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">עגילים</p>
          <p className="font-Assin text-black text-[16px] m-0">
            צמודים לתנוך האוזן, עגיל אחד בכל תנוך.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">גרביים</p>
          <p className="font-Assin text-black text-[16px] m-0">
            גרבי ניילון בצבע העור/צבע שחור/אפור/לבן.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">נעליים</p>
          <p className="font-Assin text-black text-[16px] m-0">
            חיילות רשאיות לנוע עם נעל מעור/דמוי עור בצבע
            שחור עפ"י מה שנופק בבקו"ם.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">כומתה ותג</p>
          <p className="font-Assin text-black text-[16px] m-0">
             כמו בנים.
          </p>
          <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">תנועה על מדי ב'</p>
          <p className="font-Assin text-black text-[16px] m-0">
            כמו בנים.
          </p>
        </article>
        <p className="font-Katana text-[#432DC9] text-[24px] m-0">הופעה ולבוש - חורף</p>
        <ul className="font-Assin text-black text-[16px] m-0 marker:text-black px-5 list-disc">
          <li>חייל/ת רשאי/ת לנוע עם צעיף שחור בלבד.</li>
          <li>כפפות שלמות בצבע שחור/ירוק אך ורק עם מעיל רכוס ועליו תג יחידה + דרגות + כומתה.</li>
          <li>
            חייל/ת רשאי/ת לנוע עם אפודה/סוודר שנופק מהאפסנאות חט"ל ועליו תג יחידה + דרגות + כומתה.
          </li>
          <li>
            אין לנוע עם פליז מחוץ לשטח היחידה גם כאשר קיים אישור תנועה על מדי ב'. אין לנוע עם פליז על
            מדי א' בכל מקום.
          </li>
          <li>
            גופייה/חולצה - חייל/ת רשאי/ת ללבוש מתחת לחולצת המדים גופייה או חולצה בצבע לבן או ירוק זית
            בלבד.
          </li>
          <li>דו"ח מ.צ - חובה לדווח על קבלת דו"ח מ.צ באותו רגע למפקד הישיר ולרס"ר חט"ל.</li>
        </ul>
        <p className="font-Katana text-[#432DC9] text-[24px] m-0">ביטחון אישי</p>
        <ul className="font-Assin text-black text-[16px] m-0 marker:text-black px-5 list-disc">
          <li>חל איסור מוחלט על שתיית אלכוהול ושימוש בסמים.</li>
          <li>חל איסור מוחלט על נהיגה בשכרות או בעייפות.</li>
          <li>
            עליך לשמור בקפדנות על תעודותיך הצבאיות (חוגר, מפלי בזלת, אישור כניסה, מיגון אתרים ועוד).
            במקרה של אובדן אחת מהתעודות יש לדווח במיידית.
          </li>
          <li>יש להקפיד ולשמור על ביטחון מידע כמה שאפשר.</li>
          <li className="text-[#B71C1C]">חל איסור מוחלט על צילום בשטח צבאי!</li>
          <li>חל איסור על חיילי צה"ל לבוא במגע עם גורמים זרים ולנדב להם מידע בנושא צבא וביטחון.</li>
          <li>חל איסור מוחלט על מגעים עם גורמי תקשורת ללא אישור צה"ל.</li>
          <li>יש לנהוג עפ"י כל כללי הבטיחות (דרכים, אש, חשמל).</li>
        </ul>
        <p className="font-Katana text-[#432DC9] text-[24px] m-0">במקרה חריג עליך לדווח במיידית למפקד ישיר:</p>
        <ul className="font-Assin text-black text-[16px] m-0 marker:text-black px-5 list-disc">
          <li>ניסיון חטיפה, קבלת דו"ח מ.צ וכו'.</li>
          <li>אין להוציא ציוד צבאי מהיחידה.</li>
          <li>פנקס כיס זה יוחזק באחריותך.</li>
          <li>
            חל איסור על העלאת סרטונים ברשתות החברתיות ביחידה בפרט ומחוצה לה כשאתם לובשים מדי צה"ל!
          </li>
        </ul>
      </section>
    )
  }
  