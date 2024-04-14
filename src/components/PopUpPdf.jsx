import { useState } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import PdfToolbar from '../utiles/PdfToolBar';

const PopUpPdf = ({ isOpen, onClose, pdf }) => {

  const defultfile =defaultLayoutPlugin({
    sidebarTabs:(defaultTabs)=> [],
  })
  
  if(!isOpen){
      return null
  }

  const closepopup = (e) => {
    if(e.target === e.currentTarget){
      onClose()
    }
  }
  return (
    <div className=' fixed inset-0 flex items-center justify-center z-50 bg-slate-800/75' onClick={closepopup}>
        <div className='bg-white rounded shadow-lg overflow-auto flex flex-col ' style={{width:'80%', height:'80%'}}> 
          {/* <PdfToolbar scale={scale} setScale={setScale} /> */}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

            <Viewer fileUrl={pdf} plugins={[defultfile]}/>
          </Worker>
        </div>
    </div>
  )
}
export default PopUpPdf