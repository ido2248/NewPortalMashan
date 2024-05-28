import { Menu, Transition } from "@headlessui/react"
import { HiMiniBars3 } from "react-icons/hi2";
import { Fragment } from "react"
import { Link } from "react-router-dom"


export default function SubNavbar() {
  return (
    
      <Menu
        as="div"
        className="relative text-left flex"
      >
        <div>
          <Menu.Button className="inline-flex w-full items-center rounded-md px-2 py-2 text-sm text-slate-900 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 block h-6 w-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg> */}
            <HiMiniBars3 size={24} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-2.5 mt-8 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <Link
                  to="/HatalMnifest"
                  className="flex w-full items-center rounded p-[8px] pt-[13px] h-[32px] pb-[11px] outline-none transition duration-200 hover:bg-[#DBDBDB] font-Assin text-[16px]"
                >
                  מסך ראשי
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/HatalMnifest/bm-instructions"
                  className="flex w-full items-center rounded p-[8px] pt-[13px] h-[32px] pb-[11px] outline-none transition duration-200 hover:bg-[#DBDBDB] font-Assin text-[16px]"
                >
                  ביטחון מידע
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <Link
                  to="/HatalMnifest/highlights"
                  className="flex w-full items-center rounded p-[8px] pt-[13px] h-[32px] pb-[11px] outline-none transition duration-200 hover:bg-[#DBDBDB] font-Assin text-[16px]"
                >
                  דגשים
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/HatalMnifest/values"
                  className="flex w-full items-center rounded p-[8px] pt-[13px] h-[32px] pb-[11px] outline-none transition duration-200 hover:bg-[#DBDBDB] font-Assin text-[16px]"
                >
                  ערכים
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <Link
                  to="/HatalMnifest/safety"
                  className="flex w-full items-center rounded p-[8px] pt-[13px] h-[32px] pb-[11px] outline-none transition duration-200 hover:bg-[#DBDBDB] font-Assin text-[16px]"
                >
                  נהלי בטיחות
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/HatalMnifest/open-door"
                  className="flex w-full items-center rounded p-[8px] pt-[13px] h-[32px] pb-[11px] outline-none transition duration-200 hover:bg-[#DBDBDB] font-Assin text-[16px]"
                >
                  דלת פתוחה
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <Link
                  to="/HatalMnifest/public-activities"
                  className="flex w-full items-center rounded p-[8px] pt-[13px] h-[32px] pb-[11px] outline-none transition duration-200 hover:bg-[#DBDBDB] font-Assin text-[16px]"
                >
                  פעילויות ציבוריות
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/HatalMnifest/public-committees"
                  className="flex w-full items-center rounded p-[8px] pt-[13px] h-[32px] pb-[11px] outline-none transition duration-200 hover:bg-[#DBDBDB] font-Assin text-[16px]"
                >
                  ועדות ציבוריות
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <Link
                  to="/"
                  className="flex w-full items-center rounded p-[8px] pt-[13px] h-[32px] pb-[11px] outline-none transition duration-200 hover:bg-[#DBDBDB] font-Assin text-[16px]"
                >
                  פורטל משא"ן חט"ל
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}
