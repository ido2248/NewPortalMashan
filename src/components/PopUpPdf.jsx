import React from 'react'

const PopUpPdf = ({isOpen, onClose }) => {
  if(!isOpen){
      return null
  }

  const closepopup = (e) => {
    if(e.target === e.currentTarget){
      onClose()
    }
  }
  return (
    <div className=' fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50' onClick={closepopup}>
        <div className='bg-white p-6 rounded shadow-lg'> 
            <h1>sup</h1>
            <button onClick={onClose}></button>
        </div>
    </div>
  )
}
export default PopUpPdf