import {useState, useEffect} from 'react';
import { FaArrowUp } from "react-icons/fa";


export default function Buttom() {
    const [backToTop, setBackToTop]= useState(false)
    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY >100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth" // Optional: smooth scrolling
        });
    };

    return (
        <div className=' justify-center' >
            {backToTop && (
    
    <button className='fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border-0 bg-indigo-500 drop-shadow-md' onClick={scrollToTop}><FaArrowUp size={24}/></button>
            )}
        </div>
    );
}