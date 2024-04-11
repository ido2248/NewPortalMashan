// src/components/PdfToolbar.jsx
import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";

const PdfToolbar = ({ scale, setScale }) => {
 const zoomIn = () => {
    setScale(prevScale => prevScale * 1.25);
 };

 const zoomOut = () => {
    setScale(prevScale => prevScale / 1.25);
 };

 const resetZoom = () => {
    setScale(0.48); // Reset to 100%
 };

 return (
    <div className=" justify-center mb-4 p-4 sticky top-0 z-50 bg-gray-400/75 w-full text-black">
      <button onClick={zoomIn} className="p-2 text-xl"><FaPlus/></button>
      <button onClick={zoomOut} className="p-2 text-xl"><FaMinus/></button>
      {/* <span className="ml-4">Page: {currentPage}</span> */}
    </div>
 );
};

export default PdfToolbar;