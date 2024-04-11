import { useState } from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css'; // Add this line
import PdfToolbar from '../utiles/PdfToolBar';

const PopUpPdf = ({ isOpen, onClose, pdf }) => {
  
  const [numPages, setNumPages]= useState(null)
  const [scale, setScale]= useState(0.52)
  const onDocumentLoadSuccess  = ({ numPages }) => {
    setNumPages(numPages)
  }  
  
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
          <PdfToolbar scale={scale} setScale={setScale} />
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
            ))}
          </Document>
        </div>
    </div>
  )
}
export default PopUpPdf