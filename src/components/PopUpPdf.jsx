import { useState } from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css'; // Add this line

const PopUpPdf = ({ isOpen, onClose, pdf }) => {
  
  const [numPages, setNumPages]= useState(null)
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
    <div className=' fixed inset-0 flex items-center justify-center z-50 bg-slate-800 bg-opacity-90' onClick={closepopup}>
        <div className='bg-white p-6 rounded shadow-lg overflow-auto' style={{width:'80%', height:'80%'}}> 
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
    </div>
  )
}
export default PopUpPdf