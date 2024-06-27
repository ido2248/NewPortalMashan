import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState, useEffect } from "react"



export default function Modal({ buttonText, title, children }) {
  // const LOCAL_STORAGE_KEY = "HATAL_MANIFEST_STATE"

  const [isOpen, setIsOpen] = useState(true)
  //   JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || "true")
  // )
  // console.log(isOpen)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  // useEffect(() => {
  //   window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(isOpen))
  //   console.log(isOpen)
  // }, [isOpen])

  return (
    <>
      <div className="flex py-4">
        <button
          onClick={openModal}
          className="text-[18px] text-white inline-block rounded-t rounded-b justify-center bg-[#432DC9] p-[6px] font-Katana px-[25px] hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {buttonText}
        </button>
      </div>

      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-30"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all">
                  <div className="fixed inset-x-0 flex flex-row justify-between px-4">
                    <img
                      src='/img/Hatal.png'
                      alt="Hatal Logo"
                      className="h-10 w-10"
                    />
                    <img
                      src='/img/Hatal_Inside.png'
                      alt="Hatal Inside Logo"
                      className="h-10 w-10"
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-center text-[24px] font-Katana leading-6 text-[#432DC9]"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="prose mt-2 md:prose-lg text-[16px] font-Assin">{children}</div>
                  <div className="mt-4 justify-end flex">
                    <button
                      type="button"
                      className="text-[18px] rounded-lg bg-[#432DC9] p-[6px] font-Katana px-[25px] text-white"
                      onClick={closeModal}
                    >
                      הבנתי, אפשר לסגור
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
