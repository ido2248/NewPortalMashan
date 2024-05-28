import { motion, useAnimation } from 'framer-motion'
export default function Safety() {
    return (
      <section
        id="safety"
        className="container prose prose-sm mx-auto px-8 py-4 md:prose-lg lg:prose-xl bg-gradient-to-br from-[#FFFFFF] to-[#F5F5F5] mt-[120px]"
        
      >
        <p className="font-Katana text-[#432DC9] text-[28px] m-0">נהלי בטיחות ביחידה</p>
        <ul className=" font-Assin text-black text-[16px] m-0 marker:text-black px-5 list-disc">
          <li>
            השימוש באלתורי חשמל אסור
            <span className="">!</span>
          </li>
          <br/>
          <li>
            הדלקת אש אסורה<span className="">!</span>
          </li>
          <br/>
          <li>
            על החייל להימצא לפחות פעם אחת בחודש בתדריך בטיחות שבועי
            <span className="">!</span>
          </li>
          <br/>
          <li>
            יש לדווח על כל מפגע בטיחות<span className="">!</span>
          </li>
          <br/>
          <li>
            בכל יציאה מהחדר/מהמשרד יש לוודא שכל מכשירי החשמל כבויים
            <span className="">!</span>
          </li>
          <br/>
          <li>
            חל איסור להפעיל מכשירי חשמל שלא מאושרים
            <span className="">!</span>
          </li>
          <br/>
          <li>
            חל איסור לעשן ביחידה בשטחים שלא מאושרים או מוגדרים כפינת עישון
            <span className="">!</span>
          </li>
          <br/>
          <li>
            יש לוודא תקינות גלאי עשן ביבילים/מבנים שמחייבים
            <span className="">!</span>
          </li>
          <br/>
          <li>
            יש לוודא תקינות ציוד כיבוי אש בסביבתכם
            <span className="">!</span>
          </li>
          <br/>
          <li>
            איסור השימוש בצינור כיבוי אש לשטיפה והשקיה - מיועד לחירום
            <span className="">!</span>
          </li>
          <br/>
        </ul>
      </section>
    )
  }
  