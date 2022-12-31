import React from 'react'
import Grass1 from './Grass1'
import Grass2 from './Grass2'
import Background from './Background'
import { useRef, useEffect } from 'react'
import { gsap, Power3 } from 'gsap'



export default function Parallax() {
  let grass1 = useRef();
  let grass2 = useRef();
  let background = useRef();
  let titleSection =useRef();

  useEffect(()=>{
    gsap.from(titleSection, 1, {opacity: 0, x:50, ease: Power3.easeOut, delay: .1})
  }, [])

  useEffect(()=>{
    const onMove = ({ clientX, clientY}) => {
      grass1.current.moveTo(clientX / 4, clientY / 8);
      grass2.current.moveTo(clientX / 8, clientY / 16);
      background.current.moveTo(clientX / 12, clientY / 24);
    };
    const onLeave = () => {
      grass1.current.moveTo(0,0);
      grass2.current.moveTo(0,0);
      background.current.moveTo(0,0);
    };
    document.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };


  }, []);

  return (
    <div>
      
      <div ref={el => titleSection = el} className='absolute  lg:right-0 top-20 bg-black lg:p-3 text-white text-[30px] '>
     Parallax effect with GSAP
    </div>

        <div className='right-100 relative lg:w-1/2 lg:h-2/6'>
        <Background ref={background}/>
        <Grass2 ref={grass2}/>
        <Grass1 ref={grass1}/>
        </div>
      
      
      </div>
  )
}
