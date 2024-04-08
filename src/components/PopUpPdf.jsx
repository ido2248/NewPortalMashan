import React from 'react'
import { Document, Page } from 'react-pdf'

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
    <div className=' fixed inset-0 flex items-center justify-center z-50 bg-slate-800 bg-opacity-90' onClick={closepopup}>
        <div className='bg-white p-6 rounded shadow-lg'> 
          <Document file='/pdf/tash1.pdf'>
            <Page  pageNumber={2}></Page>
          </Document>
          <button onClick={onClose}></button>
        </div>
    </div>
  )
}
export default PopUpPdf