import { useState } from 'react'
import { Document, Page } from 'react-pdf'

const PopUpPdf = ({isOpen, onClose, props }) => {
  const [numPages, setNumPages]= useState(null)
  const onDocumentLoadSuccess  = ({ numPages }) => {
    setNumPages(numPages)
  }
  const { pdf }= props
  console.log({pdf})
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
           <Document file={pdf} options={{ workerSrc:'/pdf.worker.jsx'}} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index)=>(
                <Page key={`page_${index + 1}`} pageNumber={index + 1}/>
              ))}
           </Document>
        </div>
    </div>
  )
}
export default PopUpPdf