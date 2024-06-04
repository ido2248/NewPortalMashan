import { motion, useAnimation } from 'framer-motion'
export default function Values() {
    return (
      <section
        id="values"
        className="container prose prose-sm mx-auto px-8 py-4 md:prose-lg lg:prose-xl bg-gradient-to-br from-[#FFFFFF] to-[#F5F5F5] mt-[10px]"
        
      >
        <p className="font-Katana text-[#432DC9] text-[28px] m-0">ערכים</p>
        <p className="font-Katana text-[#432DC9] text-[24px] m-0">ערכי יסוד</p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">הגנת המדינה, אזרחיה ותושביה</p>
        <p className="font-Assin text-black text-[16px] m-0">מטרת צה"ל היא להגן על קיומה של מדינת ישראל, על עצמאותה ועל ביטחון אזרחיה ותושביה.</p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">אהבת המולדת ונאמנות למדינה</p>
        <p className="font-Assin text-black text-[16px] m-0">
          ביסוד השירות בצה"ל עומדות אהבת המולדת והמחויבות והמסירות למדינת ישראל - מדינה דמוקרטית
          המהווה בית לאומי לעם היהודי - לאזרחיה ולתושביה.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">כבוד האדם</p>
        <p className="font-Assin text-black text-[16px] m-0">
          צה"ל וחייליו מחויבים לשמור על כבוד האדם. כל אדם הוא בעל ערך שאינו מותנה במוצא, בדת, בלאום,
          במין, במעמד ובתפקיד.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">דבקות במשימה וחתירה לניצחון</p>
        <p className="font-Assin text-black text-[16px] m-0">
          החייל ילחם ויפעל באומץ לב נוכח כל הסכנות והמכשולים שבפניו, וידבק במשימתו בנחישות ובתבונה, עד
          כדי חירוף הנפש.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">אחריות</p>
        <p className="font-Assin text-black text-[16px] m-0">
          החייל יראה עצמו שותף פעיל בהגנה על ביטחון המדינה, אזרחיה ותושביה. החייל יפעל תוך גילוי מתמיד
          של מעורבות, יוזמה ושקידה, בשיקול דעת ובמסגרת סמכותו, כשהוא נכון לשאת באחריות לתוצאות
          פעולותיו.
        </p>
        <p className="font-Katana text-[#432DC9] text-[24px] m-0 mt-3">ערכי צה"ל</p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">אמינות</p>
        <p className="font-Assin text-black text-[16px] m-0">
          החייל יציג דברים כהוויתם, בשלמות ובדייקנות, בתכנון, בביצוע ובדיווח, ויפעל כך שרעיו ומפקדיו
          יוכלו לסמוך עליו בביצוע המשימות.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">דוגמה אישית</p>
        <p className="font-Assin text-black text-[16px] m-0">
          החייל ינהג על פי הנדרש ממנו, ויקיים את מה שהוא דורש מזולתו, מתוך הכרה ביכולתו ובאחריותו,
          בצבא ומחוצה לו, להוות דוגמה אישית.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">חיי אדם</p>
        <p className="font-Assin text-black text-[16px] m-0">
          החייל ינהג באופן מושכל ובטיחותי בכל פעולותיו, מתוך הכרה בחשיבותם העליונה של חיי אדם. בעת
          לחימה יסכן את עצמו ואת רעיו במידה הנדרשת לביצוע המשימה.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">טוהר הנשק</p>
        <p className="font-Assin text-black text-[16px] m-0">
          החייל ישתמש בנשקו ובכוחו לביצוע המשימה בלבד, אך ורק במידה הנדרשת לכך, וישמור על צלם אנוש אף
          בלחימה. החייל לא ישתמש בנשקו ובכוחו כדי לפגוע בבני אדם שאינם לוחמים ושבויים, ויעשה כל
          שביכולתו למנוע פגיעה בחייהם, בגופן, בכבודם וברכושם.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">מקצועיות</p>
        <p >
          החייל ישאף לרכוש את הידע המקצועי ואת המיומנויות הנדרשים לביצוע תפקידיו, ויישמם תוך חתירה
          לשיפור מתמיד של ההישגים האישיים והיחידתיים.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">משמעת</p>
        <p className="font-Assin text-black text-[16px] m-0">
          החייל יפעל כמיטב יכולתו לביצוע מלא ומוצלח של הנדרש ממנו על פי הפקודות ועל פי רוחן. החייל
          יקפיד על מתן פקודות חוקיות בלבד, ולא יציית לפקודות בלתי חוקיות בעליל.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">רעות</p>
        <p className="font-Assin text-black text-[16px] m-0">
          החייל יפעל מתוך אחווה ומסירות לחבריו לשירות, וייחלץ תמיד לעזרתם כשהם זקוקים לו או תלויים בו
          חרף כל סכנה וקושי, עד כדי חירוף הנפש.
        </p>
        <p className="font-Katana text-[#432DC9] text-[22px] mt-3 m-0">שליחות</p>
        <p className="font-Assin text-black text-[16px] m-0">
          החייל יראה בשירותו הצבאי שליחות, יהיה נכון לתרום כל שביכולתו להגנת המדינה, אזרחיה ותושביה.
          זאת בהיותו נציג של צה"ל הפועל מתוקף ובמסגרת הסמכויות שניתנו לו על פי פקודות הצבא.
        </p>
      </section>
    )
  }
  