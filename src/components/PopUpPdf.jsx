import { useState, useEffect } from 'react'
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PopUpPdf = ({ isOpen, onClose, pdf }) => {
  const [isIframeLoaded, setIframeLoaded] = useState(false);
  const defultfile =defaultLayoutPlugin({
    sidebarTabs:(defaultTabs)=> [],
  })
  console.log(defultfile)
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
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };
  if (!pdf) {
    return <div>Loading...</div>; // You might want to show a loading message if no pdf prop
  }else{

    return (
      <div className='  fixed inset-0 flex items-center justify-center z-50 bg-black/50' onClick={closepopup}>
          <div className='bg-white rounded shadow-lg overflow-auto flex flex-col ' style={{width:'80%', height:'80%'}}> 
            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={pdf} plugins={[defultfile]} defaultScale={SpecialZoomLevel.PageWidth} />
            </Worker> */}
            <iframe src={`https://drive.google.com/file/d/${pdf}/preview`} frameBorder="0" height="100%" onLoad={handleIframeLoad}></iframe>
            {!isIframeLoaded && <div>Loading PDF...</div>} {/* Show loading message until iframe is fully loaded */}
          </div>
      </div>
    )
  }
}
export default PopUpPdf