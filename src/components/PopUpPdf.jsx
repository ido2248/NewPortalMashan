import { useState, useEffect } from 'react'
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PopUpPdf = ({ isOpen, onClose, pdf }) => {
  const defultfile =defaultLayoutPlugin({
    sidebarTabs:(defaultTabs)=> [],
  })
  useEffect(() => {
    // Add the 'no-scroll' class to the body element when the popup is open
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      // Remove the 'no-scroll' class from the body element when the popup is closed
      
    }
 }, [isOpen]);
  const closepopup = (e) => {
    if(e.target === e.currentTarget){
      document.body.classList.remove('no-scroll');
      onClose()
    }
  }
  return (
    <div className='  fixed inset-0 flex items-center justify-center z-50 bg-black' onClick={closepopup}>
        <div className='bg-white rounded shadow-lg overflow-auto flex flex-col ' style={{width:'80%', height:'80%'}}> 
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={pdf} plugins={[defultfile]} defaultScale={SpecialZoomLevel.PageWidth} />
          </Worker>
        </div>
    </div>
  )
}
export default PopUpPdf