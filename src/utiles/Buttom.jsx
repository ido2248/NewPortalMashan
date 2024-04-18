import {useState, useEffect} from 'react';

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
        <div >
            {backToTop && (
    
                <button className=' fixed bottom-6 right-6 z-40 flex h-14 w-14 rounded-full justify-center border-0 bg-indigo-500 drop-shadow-md ' onClick={scrollToTop}>Go to Top</button>
            )}
        </div>
    );
}