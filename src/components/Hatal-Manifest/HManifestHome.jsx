import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PopUpPdf from '../PopUpPdf'
import { motion, useAnimation } from 'framer-motion'
import Drawer from "./SubComp/Drawer"
import Card from "./SubComp/Card"
import Modal from './SubComp/Modal'
import BusDiagram from './SubComp/BusDiagram'
import Nav from "./SubComp/Nav"


export default function HManifestHome({ drag, isPopupOpen, setIsPopupOpen }) {
    const LINKS = [
        {
          href: "idf-spirit",
          text: 'רוח צה"ל',
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-[#432DC9]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          )
        },
        {
          href: "vision",
          text: "חזון/ייעוד",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-[#432DC9]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )
        },
        {
          href: "hitchhike",
          text: "טרמפים",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-[#432DC9]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          )
        },
        {
          href: "first-aid",
          text: 'ע"ר',
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-[#432DC9]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )
        },
        {
          href: "hatikvah",
          text: "התקווה",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-[#432DC9]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
          )
        },
        {
          href: "phones",
          text: "טלפונים",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-[#432DC9]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          )
        },
        {
          href: "yohalam",
          text: 'יוהל"ם',
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-[#432DC9]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          )
        },
        {
          href: "bus2",
          text: "קו 2",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-[#432DC9]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          )
        }
      ]
    
      const CARDS = [
        {
          card: { id: "idf-spirit", title: 'רוח צה"ל', img: '/img/idfSpirit.png' },
          content: (
            <p className="text-center text-[16px] leading-5 text-white font-Assin">
              צבא הגנה לישראל הוא צבאה של מדינת ישראל. צה"ל פועל בכפיפות לרשויות השלטון האזרחי הדמוקרטי
              ולחוקי המדינה. מטרת צה"ל היא להגן על קיומה של מדינת ישראל ועל עצמאותה, ולסכל מאמצי אויב
              לשבש את אורח החיים התקין בה. חיילי צה"ל מחויבים להילחם, להקדיש את כל כוחותיהם, ואף לחרף את
              נפשם להגנת מדינת ישראל, אזרחיה ותושביה. חיילי צה"ל יפעלו על פי ערכי צה"ל ופקודותיו תוך
              שמירה על חוקי המדינה וכבוד האדם, וכיבוד ערכיה של מדינת ישראל כמדינה יהודית ודמוקרטית
            </p>
          )
        },
        {
          card: { id: "hatikvah", title: "התקווה", img: '/img/tikva.png' },
          content: (
            <p className="text-center leading-10 text-white">
              כָּל עוֹד בַּלֵּבָב פְּנִימָה <br />
              נֶפֶשׁ יְהוּדִי הוֹמִיָּה,
              <br />
              וּלְפַאֲתֵי מִזְרָח קָדִימָה,
              <br />
              עַיִן לְצִיּוֹן צוֹפִיָּה.
              <br />
              עוֹד לֹא אָבְדָה תִקְוָתֵנוּ
              <br />
              הַתִּקְוָה בַּת שְׁנוֹת אַלְפַּיִם
              <br />
              הְיוֹת עַם חוֹפְשִי בְּאַרְצֵנוּ
              <br />
              אֶרֶץ צִיּוֹן וִירוּשָלָיִם.
            </p>
          )
        },
        {
          card: { id: "vision", title: "", img: '/img/yeudHazon.png'},
          content: (
            <div className="space-y-6 text-center leading-5 text-white">
              <h2 className="text-2xl text-white font-Katana">חזון</h2>
              <p className="font-Assin">עוצמה אנושית טכנולוגית המובילה את כוחות היבשה לעליונות בשדה הקרב.</p>
              <h2 className="text-2xl text-white font-Katana">ייעוד</h2>
              <p className="font-Assin">
                להוות סמכות מקצועית טכנולוגית בתחומי אחריותנו ולשאת באחריות למחקר, לפיתוח ולתמיכה
                אחזקתית באמל"ח יבשה, בראיית כלל מחזור החיים
              </p>
            </div>
          )
        },
        {
          card: { id: "phones", title: "טלפונים שימושיים", img: '/img/phone.png' },
          content: (
            <>
              <ul className="grid grid-cols-2 gap-y-4 text-white font-Assin text-[16px]">
                <li>משרד רע"ן משא"ן</li>
                <li className="text-left">
                  <a href="tel:03-7374647">03-7374647</a>
                </li>
                <li>משרד אבטחה</li>
                <li className="text-left">
                  <a href="tel:03-7374568">03-7374568</a>
                </li>
                <li>משרד ת"ש</li>
                <li className="text-left">
                  <a href="tel:03-7377558">03-7377558</a>
                </li>
                <li>משרד חינוך</li>
                <li className="text-left">
                  <a href="tel:03-7377842">03-7377842</a>
                </li>
                <li>רס"ר יחידה</li>
                <li className="text-left">
                  <a href="tel:03-7373649">03-7373649</a>
                </li>
                <li>שלישות</li>
                <li className="text-left">
                  <a href="tel:03-7376728">03-7376728</a>
                </li>
                <li>מפקד מחנה</li>
                <li className="text-left">
                  <a href="tel:03-7374650">03-7374650</a>
                </li>
                <li>אפסנאות/נשקיה</li>
                <li className="text-left">
                  <a href="tel:03-7379755">03-7379755</a>
                </li>
                <li>מודיעין "קווים"</li>
                <li className="text-left">
                  <a href="tel:*82254">82254*</a>
                </li>
                <li>מודיעין "אגד"</li>
                <li className="text-left">
                  <a href="tel:03-6948888">03-6948888</a>
                </li>
                <li>מודיעין "דן"</li>
                <li className="text-left">
                  <a href="tel:03-6394444">03-6394444</a>
                </li>
              </ul>
              <p className="mt-4 text-center text-[16px] text-white font-Assin">
                קידומת מטכ"לית בבסיס תל השומר מתחילה ב־0304 ואין צורך להוסיפה לפני החיוג. כדי לחייג
                מטלפון אזרחי לתל השומר יש להוסיף 03-737 לפני המספר. המשובצים במחלקת ליד/מידע היושבים
                בצריפין ניתן ליצור קשר עם רמ"ד התו"ב בטלפון <a href="tel:03-9576990">03-9576990</a>
              </p>
            </>
          )
        },
        {
        card: { id: "hitchhike", title: "איסור טרמפים", img: '/img/tremp.png' },
          content: (
            <div className="space-y-6 text-center leading-5 text-white">
              <h1 className="rounded bg-red-500 p-4 text-[20px] font-bold font-Assin text-white">
                חל איסור מוחלט על נסיעה בטרמפים!
              </h1>
              <div className="text-center">
                <ul className="inline-block  p-6 font-Assin">
                  <li>התנועה מותרת אך ורק בתחבורה ציבורית.</li><br/>
                  <li>
                    בהגיעך לתחנת ההסעה שים לב לחפצים חשודים ואנשים חשודים (לדוגמה: אדם ההולך עם מעיל עבה
                    ביום חם)
                  </li><br/>
                  <li>בזמן ההמתנה בתחנת ההסעה יש לעמוד על המדרכה בלבד.</li>
                  <li><br/>
                    בעת הישיבה באוטובוס היה ערני ושים לב לאנשים העולים לאוטובוס, אם הבחנת בחפץ או אדם
                    חשוד - דווח מייד לנהג.
                  </li>
                </ul>
              </div>
            </div>
          )
        },
        {
          card: { id: "first-aid", title: "עזרה ראשונה", img: '/img/first-aid.png' },
          content: (
            <div className="space-y-6 text-center leading-5 text-white">
              <div className="text-center">
                <ul className="inline-block p-6">
                  <li>פנייה לעזרה בעת חופשה תיעשה דרך מוקד "מקול הלב" או בית חולים הקרוב באישור.</li><br/>
                  <li>יש להודיע למפקד הישיר על פנייתך.</li><br/>
                  <li>בזמן ההמתנה בתחנת ההסעה יש לעמוד על המדרכה בלבד.</li><br/>
                  <li>פנייה לעזרה ראשונה ביחידה תיעשה ע"י הגעה למרפאת תל השומר/חר"פ צריפין.</li>
                </ul>
              </div>
            </div>
          )
        },
        {
        card: { id: "yohalam", title: 'יוהל"ם', img: '/img/yohalam.png' },
          content: (
            <div className="space-y-6 text-center leading-5 text-white">
              <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
                יועצת הרמטכ"ל לענייני מגדר
              </h1>
              <div className="text-center">
                <ul className="inline-block  px-6">
                  <li className="py-2">
                    פגיעה על רקע מיני הינה כל פעולה פיזית או מילולית בעלת אופי מיני, המופנית כלפי אדם
                    שהפעולה אינה רצויה לו.
                  </li><br/>
                  <li className="py-2">
                    פגיעה על רקע מיני סותרת את עיקרון כבוד אדם עליו מושתתת רוח צה"ל.
                  </li><br/>
                  <li className="py-2">פגיעה על רקע מיני יכולה להיות מופנית כלפי גברים.</li>
                  <li className="py-2">
                    פגיעה על רקע מיני היא סובייקטיבית, מה שייתפס כהטרדה בעיני חייל/ת אחד/ת יכול שלא
                    להיתפס כך בעיניי חייל/ת אחר/ת.
                  </li><br/>
                  <li className="py-2">
                    המערכת הצבאית מגיבה בחומרה רבה על הטרדות מיניות ולכן, יש לפנות לגורמיי הפנייה
                    הרלוונטיים בכל אירוע.
                  </li><br/>
                  <li className="py-2">
                    נוהל רפואת נשים - תלוי בלוחות המודעות ביחידה ובתאי השירותים - מפרט כל רופאות הנשים
                    הצבאיות/אזרחיות שהצבא עובד עימן.
                  </li><br/>
                  <li className="py-2">
                    סם אונס - קיימת עלייה בקורבנות "סם אונס". זהו נוזל שקוף, חסר טעם או ריח. אין לשתות
                    משקה כלשהו לאחר שהושאר פתוח ללא השגחה, יש להשתדל לא לנוע לבד במקומות מבודדים
                    וחשוכים.
                  </li><br/>
                  <li className="py-2">
                    אלימות בין בני זוג - הטיפול נעשה אל מול רמ"ד פרט אט"ל באופן ישיר.
                  </li><br/>
                  <li className="py-2">בעת היריון בלתי רצוי יש לפנות לעו"ס באופן מיידי.</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          card: { id: "bus2", title: "מסלול הנסיעה של קו 2", img: '/img/buses.png' },
          content: (
            <div className="text-center text-white font-Assin text-[16px]">
              <h1 className="text-xl font-bold underline">קו אוטובוס פנימי</h1><br/>
              <p>בתל השומר קיים אוטובוס פנימי, מסלול הנסיעה המפורט:</p>
              <p>
                שעות פעילות קו 2 הינן בין השעות: 07:30 עד 08:30 בתוך בסיס תה"ש ולאחר מכן בשעה 16:00 עד
                18:00 כל 10 דק'.
              </p>
              <p className="rounded bg-red-500 p-2 text-[20px] font-bold font-Assin text-white my-4 mb-6">
                חל איסור מוחלט לנסוע בטרמפים מחוץ לשערי הבסיס!
              </p>
              <Drawer
                title="מסלול קו 2"
                first
                last
                isBus
              >
                <BusDiagram />
              </Drawer>
            </div>
          )
        }
      ]
      useEffect(() => {
        window.scroll({
          top:0
        })
      },[])
  return (
    <div className='text-center from-[#FFFFFF] to-[#F5F5F5] flex-1 container  px-4 pt-[120px]'>
      <section
          id="welcome"
          className="mx-auto flex flex-col"
        >
          <div className="flex w-full justify-between p-1">
            <div className="flex">
              <img
                src='/img/Hatal.png'
                alt="Hatal Logo"
                className="my-2 ml-2 h-10 w-10"
              />
              <div>
                <p className="font-Katana text-right text-[24px] tracking-wide text-[#432DC9] md:text-[36px]">ברוך בואך לחט"ל</p>
                <p className=" font-Assin text-[16px] ">החטיבה הטכנולוגית</p>
              </div>
            </div>
          
            <Modal
              buttonText="ברוכים הבאים"
              title='ברוכים הבאים לחט"ל'
            >
              <h4 className="text-center">החטיבה הטכנולוגית</h4>
              <p>
                אנו מברכים אותך על הצטרפותך ליחידה בברכת שירות נעים ומוצלח. <br />
                הכנו עבורך מנשר קליטה והכוונה ובו מידע חיוני שילווה אותך לאורך כל שירותך ביחידה.{" "}
                <br />
                במנשר זה תמצא מידע בתחום המשא"ן, לוגיסטיקה שגרת מחנה וכו'. <br />
                אנחנו מקווים שמנשר זה יהיה לך לעזר בתחילת דרכך החדשה. <br />
                לשירותך בכל עת.
              </p>
            </Modal>
          </div>
          <Nav links={LINKS} />
          <h2 className="mt-4 mb-2 text-center text-[20px] font-Katana text-[#432DC9] md:text-3xl">מידע שימושי</h2>
          <article className=" mx-auto grid grid-flow-row grid-cols-2 gap-x-8 gap-3 overflow-auto bg-white p-4 shadow-lg shadow-[#000000]/10 rounded-lg">
              <Drawer
                title="ארוחות"
                image='/img/lunch.png'
                first
                last
              >
                <h4 className="text-center">זמני הארוחות בחט"ל</h4>
                <div>
                  <span className="font-Katana text-[22px] text-[#432DC9]">ארוחת בוקר: </span>
                  <p className=" font-Assin text-[16px]">ע"ב ארוזיות: 06:00 עד 07:00 (לתורנים ושומרים).</p>
                </div>
                <div>
                  <span className="font-Katana text-[22px] text-[#432DC9]">ארוחת צהרים:</span>
                  <p className=" font-Assin text-[16px]">חד"א מסורתי + חד"א מזון מהיר: 11:45 עד 13:30.</p>
                </div>
                <div>
                  <span className="font-Katana text-[22px] text-[#432DC9]">ארוחת ערב: </span> 
                  <p className="font-Assin text-[16px]">חד"א מסורתי: 18:00 עד 19:00 (לתורנים ושומרים).</p>
                </div>
              </Drawer>
              <Drawer
                title="תורנויות"
                image='/img/gaurduti.png'
                first
                last
              >
                <p className="text-center">חייל חדש המגיע ליחידה זכאי ל"חודש הסתגלות" שבו אינו משובץ בתורנויות. חייל מבצע בממוצע 2 תורנויות בחודש של שמירה ביום חולת ושמירה בסוף השבוע 
                  (חמישי עד ראשון) 
                  אחת ל-12 שבועות
                </p>
                <br/>
                <p className="text-center">* אנשי קבע יוכלו לקבל פרוט אצל ק. אבטחה.</p>
              </Drawer>
              <Drawer
                title="בית הכנסת"
                image='/img/kneset.png'
                first
                last
              >
                <p>בית הכנסת ממוקם מול חדר האוכל (חיילים), זמני תפילות:</p>
                <div>
                  <span className="font-Katana text-[22px] text-[#432DC9]">שחרית</span>
                  <p className=" font-Assin text-[16px]">ניתן להתפלל בבית כנסת תה"ש.</p>
                </div>
                <br/>
                <div>
                  <span className="font-Katana text-[22px] text-[#432DC9]">מנחה</span>
                  <p className=" font-Assin text-[16px]">13:15 עד 13:35.</p>
                </div>
                <br/>
                <div>
                  <span className="font-Katana text-[22px] text-[#432DC9]">ערבית</span> 
                  <p className="font-Assin text-[16px]">משתנה עפ"י שקיעת החמה.</p>
                </div>
              </Drawer>
              <Drawer
                title='נכס"ל'
                image='/img/nehsal.png'
                first
                last
              >
                <p>
                  הינה פקודה להחזרת כוחות היחידה למחנה עם הינתן פקודה בכל מחלקה ממונה אחראי נכס"ל
                  אשר אמון על עדכון הרשימות באופן שוטף וקליטה של קצינים/א"ק/חיילים חדשים לתוכן. על
                  כל קצין/א"ק/חייל לשאת בכל זמן רשימות נכס לאומי כחלק מפק"ל הכיסים.
                </p>
                <p>
                  נכס לאומי הוא שם קוד להחזרת החיילים בסדיר מחופשה, זמן התייצבות תוך 4 שעות מקבלת
                  הפקודה.
                </p>
                <p className="text-[22px] font-Katana text-[#432DC9] leading-[31.46px]">שיטות להחזרת החיילים מחופשת</p>
                <ul className="list-disc px-4">
                  <li>קריאה סמויה - תבוצע ע"י היחידה טלפונית או פיזית.</li>
                  <li>
                    קריאה פומבית - תבוצע ע"י פרסום הודעה בכלי התקשורת בנוסח הבא: "נתבקשנו להודיע ע"י
                    דובר צה"ל כי חידון ידיעת הארץ של פיקוד... שהיה אמור להיערך מחר נדחה, למשתתפים
                    בחידון תימסר הודעה על המועד החדש ע"י יחידותם." <br />
                    במקרה של הפעלת נכס לאומי כללי יהיה נוסח ההודעה: ".....חידון ידיעת הארץ
                    המסכם...."
                  </li>
                </ul>
                <p className="text-[22px] font-Katana text-[#432DC9] leading-[31.46px]">דגשים</p>
                <ul className="list-disc px-4">
                  <li>על כל חייל להיות בקשר רציף עם ביתו אחת ל־4 שעות</li>
                  <li>עם קבלת ההודעה יש להגיע במיידית לבסיס.</li>
                  <li>
                    במידה והחייל אינו בבית, יש להשאיר הודעה לאדם בור מבני המשפחה שעליו לחזור מיד
                    ליחידה.
                  </li>
                  <li>יש לדווח טלפונית אחת לשעה ליחידה על מהלך האזעקה ובעיות בהם נתקלת.</li>
                </ul>
              </Drawer>
              <Drawer
                title='שק"ם'
                image='/img/shekem.png'
                first
                last
              >
                <p className="text-center">
                  ביחידה פועלת שק"מית הממוקמת בסמוך לחדר האוכל. השק"מית פועלת בימי א' עד ה' בשעות:
                </p>
                <p className="text-center">
                  08:00 עד 11:00. <br />
                  11:40 עד 15:45.
                </p>
              </Drawer>
              <Drawer
                title="חינוך"
                image='/img/education.png'
                first
                last
              >
                <p className=" text-center">
                  המשרד מטפל בנושאי חינוך שונים, כגון: טיולים, לוח מופעים, כרטיסים להופעות, וואוצ'רים,
                  השלמת בגרויות, פסיכומטרי, כנס משתחררים וכו'. המשרד ממוקם במדור משאבי אנוש.
                </p>
              </Drawer>
              <Drawer
                title="מספרה"
                image='/img/barberer.png'
                first
                last
              >
                <p className=" text-center">
                  בחט"ל ישנה מספרה הפועלת בכל יום מהשעה 08:30 עד 16:00. המספרה ממוקמת ליד מגורי
                  שומרים.
                </p>
              </Drawer>
              <Drawer
                title="שלישות"
                image='/img/shalishut.png'
                first
                last
              >
                <p className=" text-center">
                  משרד השלישות מטפל בכל תנועות כ"א החל מהקליטה ועד לשחרור מצה"ל, כמו כן המשרד מטפל בכל
                  נושא הרישומת ,חופשות ומחלה, סיווג וקידום. השלישות ממוקמת במבנה במדור משאבי אנוש.
                </p>
              </Drawer>
              <Drawer
                title="אפסנאות"
                image='/img/afsenaut.png'
                first
                last
              >
                <p className=" text-center">
                  אפסנאות היחידה נותנת שירות בנושא ניפוק ציוד צבאי, מדי ב', ציוד הלבשה והנעלה, כביסה
                  וכו'. (פרוט זכויות לוגיסטיות לפרט, ניתן לראות בפורטל חט"ל מחלקת תו"ב, ענף מאו"ן).
                </p>
                <br />
                <p className=" text-center">
                  שעות פעילות מחסן פרט 08:00 עד 17:00. <br /> שעות פעילות הנשקייה 08:00 עד 16:00.
                </p>
              </Drawer>
              <Drawer
                title="סגל"
                image='/img/segel.png'
                first
                last
              >
                <ul className="list-disc text-center px-4">
                  <li>
                    המשרד מטפל בנושאי סגל שונים, כגון: דרגות, מינויים, הארכות שירות, קק"צ, תמריצים,
                    גמול השתלמות וכו'.
                  </li>
                  <li>המשרד ממוקם במדור משאבי אנוש.</li>
                </ul>
              </Drawer>
              <Drawer
                title="מסדרים"
                image='/img/misdar.png'
                first
                last
              >
                <p className=" text-center">
                  בכל יום חמישי מתקיים מסדר לחיילי החובה במגרש המסדרים. שעת המסדר הינה 09:00.
                </p>
              </Drawer>
              <Drawer
                title='ת"ש'
                image='/img/tashit.png'
                first
                last
              >
                <p className=" text-center">
                  משרד הת"ש מסייע בנושא תנאי שירות, כגון: תשלומי משפחה, חופשות מיוחדות, היתר עבודה,
                  סיוע לחיילים בודדים וכו'. המשרד ממוקם במדור משאבי אנוש.
                </p>
              </Drawer>
              <Drawer
                title="אירוע חריג"
                image='/img/baltam.png'
                first
                last
              >
                <p className=" text-center">
                  בכל אירוע חריג (תאונת דרכים בתפקיד/בחופשה, אירוע בטיחותי, אירוע בטחוני, אשפוז, מחלה
                  וכו') יש לדווח למפקד הישיר ולרמ"ד התו"ב המחלקתי אשר יעביר דיווח לפי שרשרת הדיווח
                  המוגדרת בנוהל "דיווח אירועים חריגים בחט"ל".
                </p>
              </Drawer>
              <Drawer
                title='יוהל"ם'
                image='/img/yohalam.png'
                first
                last
              >
                <p className=" text-center">
                  בכל יחידה קיימת קצינה, אשר בנוסף לתפקידה הקבוע, משמשת גם כממונת יוהל"ן. תפקידה של
                  ממונת יוהל"ן הוא לטפל בכל הנושאים הייחודיים לשירות החיילים ביחידה, הן ברמה היחידתית
                  אל מול מפקד היחידה, והן ברמה האישית. ממונת יוהל"ן (יועצת הרמטכ"ל לענייני נשים)
                  ביחידה הינה רת"ח תשתיות משאבים טכנולוגיים. <br /> טלפון -{" "}
                  <a
                    className="font-bold"
                    href="tel:03-7379756"
                  >
                    03-7379756
                  </a>
                </p>
              </Drawer>
            
          </article>
        </section>
        <section>
          <article className='mx-2 rounded-lg shadow-lg shadow-[#000000]/10 m-6 h-[279px] relative justify-center flex  bg-white'>
          <img className='absolute w-[185px] h-[165px] object-cover' src='/img/cadic.png'/>
          <div className='bg-black/40 font-Assin rounded-b-lg p-2 absolute bottom-0 w-full text-white text-center'>
            <p className='text-[16px] p-2'>כל מה שאתם צריכים מצה"ל במקום אחר! גישה לשירותים שונים, מימוש זכויות, צפייה במידע האישי שלך ופתיחת פנייה ליחידה ולמוקדי השירות</p>
            <div className='flex justify-end'>
              <Link className='text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px]' to='https://www.home.idf.il/'>צ-360</Link>
            </div>
          </div>
        </article>
        </section>
        <section
          id="cards"
          className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {CARDS.map((cardObj) => (
            <Card
              key={cardObj.card.id}
              card={cardObj.card}
            >
              {cardObj.content}
            </Card>
          ))}
        </section>
    </div>
  )
}
