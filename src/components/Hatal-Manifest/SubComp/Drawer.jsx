
import { Dispatch, Fragment, ReactNode, SetStateAction, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import PropTypes from 'prop-types'

Drawer.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.node,
    first: PropTypes.bool,
    last: PropTypes.bool,
    isBus: PropTypes.bool,
    open: PropTypes.bool,
  };

function Drawer({ title, onClose, children, open }) {
  return (
    <Transition.Root
      appear={true}
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-30"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-auto">
            <div className="pointer-events-none fixed inset-0 ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto absolute bottom-0 left-0 right-0 max-w-full">
                  <div className=" flex-col overflow-y-auto bg-white rounded-t-xl py-4 shadow-xl max-h-[calc(100vh-15rem)]">
                    <div className="px-4 sm:px-6">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="justify-end flex ">
                          <button
                            type="button"
                            className="rounded-md text-blue-500 hover:text-blue-600 focus:outline-none"
                            onClick={onClose}
                          >
                            <span className=" text-[16px] text-[#432DC9] font-Assin">סיום</span>
                          </button>
                        </div>
                      </Transition.Child>
                      <Dialog.Title className="text-center font-semibold text-[#432DC9]  text-[24px] leading-[31.46px] font-Katana">
                        {title}
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-2 flex-1 text-[16px] leading-[22.88px] font-Assin px-5 sm:px-6">{children}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default function DrawerButton({ title, image, children, first, last, isBus }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className={`${first ? "rounded-t" : ""} ${last ? "rounded-b" : ""} ${
          isBus ? "mx-auto w-1/2 px-1 py-2" : ""
        } text-[20px] text-white grid-cols-1 grid rounded-t rounded-b bg-[#432DC9] hover:bg-[#422dc9b0] p-[6px] font-Katana px-[25px] overflow-y-auto`}
        onClick={() => setOpen(true)}
      >
        {title}
      </button>

      
        <Drawer
          onClose={() => setOpen(false)}
          title={title}
          open={open}
        >
          {children}
          {image ? (
            <img
              src={image}
              alt={image}
              className="mx-auto mt-6 h-72 w-full rounded object-cover"
            />
          ) : null}
        </Drawer>
      
    </>
  )
}


// import React, { useState, useEffect } from 'react'

// export default function Drawer({ title, image, children, first, last, isBus }) {
//   const [open, setOpen] = useState(false);

//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       <button onClick={toggleDrawer} className="px-4 py-2 bg-blue-500 text-white rounded">{title}</button>
//       {open && (
//         <>
//         <div className=' relative z-30'>
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleDrawer}/>
//           <div className="fixed inset-0 flex items-end justify-center  overflow-hidden ">
//             <div className="bg-white p-5 rounded shadow-lg z-50 mb-0 w-full max-h-[calc(100vh-15rem)] overflow-y-auto">
//               <h2>{title}</h2>
//               {image && <img src={image} alt={title} className="w-full h-auto" />}
//               <div>{children}</div>
//               <button onClick={toggleDrawer} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
//             </div>
//           </div>
//         </div>
//         </>
//       )}
//     </>
//   )
// }
