import React, {useEffect, useRef} from 'react'
import { gsap, Power3} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';



export default function Scroll() {
  let titleSection = useRef();
  let square1 = useRef();
  let square2 = useRef();
  let square3 = useRef();
  let container = useRef();


  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline().to(square1, {
      top: "-100vh",
      delay: 1,
      duration: 1
    })
    .to(square2, {
      left: "100vw",
      delay: 1,
      duration: 1,
      
    })
    .to(square3, {
      top: "-100vh",
      delay: 1,
      duration: 1
    })

    ScrollTrigger.create({
      animation: tl,
      trigger: container,
      start: "top top",
      end: "+=5000",
      scrub: true,
      pin: true

    });


  })
    

  useEffect(()=> {
    gsap.from(titleSection, 1, {opacity: 0, x:50, ease: Power3.easeOut, delay: .1})
  }, [])

 



  return (
    <>
    
    <div ref={el => titleSection = el} className='absolute  lg:right-0 top-20 lg:bg-black lg:p-3 lg:text-white text-[30px] '>
      Scroll Trigger
    </div>

    <div  ref={el => container = el} className="container mt-10 w-full h-full">
    <div ref={el => square1 = el} className='absolute w-80 h-80 right-40 top-60 bg-black z-20'></div>
    <div ref={el => square2 = el} className='absolute w-80 h-80 right-40 top-60 bg-gray-500 z-10'></div>
    <div ref={el => square3 = el} className='absolute w-80 h-80 right-40 top-60 bg-orange-600'></div>
    </div>
    </>
  )
}
