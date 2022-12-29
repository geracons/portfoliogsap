import React, {useEffect, useRef} from 'react'
import { gsap, Power3} from 'gsap'


export default function Scroll() {
  let titleSection = useRef();

  useEffect(()=> {
    gsap.from(titleSection, 1, {opacity: 0, x:50, ease: Power3.easeOut, delay: .1})
  }, [])



  return (
    <>
    
    <div ref={el => titleSection = el} className='hidden lg:block lg:absolute  lg:right-0 lg:top-20 lg:bg-black lg:p-3 lg:text-white text-[30px] '>
      Scroll Trigger
    </div>

    
    
    </>
  )
}
