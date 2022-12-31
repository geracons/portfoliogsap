import React from 'react'
import "../assets/css/circles.scss"
import { useRef, useEffect, useState } from 'react'
import { gsap, Power3} from 'gsap'



export default function Collage() {
  let circle1 = useRef(null)
  let circle2 =useRef(null)
  let circle3 = useRef(null)
  let titleSection = useRef(null)

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);


  const handleExpand1 = () => {
    gsap.to(circle1, 1.2, {width: 250, height: 250, ease: Power3.easeOut})
    setState1(true)
  }
  const handleShrink1 = () => {
    gsap.to(circle1, 1.2, {width: 80, height: 80, ease: Power3.easeOut})
    setState1(false)
  }
  const handleExpand2 = () => {
    gsap.to(circle2, .8, {width: 250, height: 250, ease: Power3.easeOut})
    setState2(true)
  }
  const handleShrink2 = () => {
    gsap.to(circle2, .8, {width: 80, height: 80, ease: Power3.easeOut})
    setState2(false)
  }
  const handleExpand3 = () => {
    gsap.to(circle3, .8, {width: 250, height: 250, ease: Power3.easeOut})
    setState3(true)
  }
  const handleShrink3 = () => {
    gsap.to(circle3, .8, {width: 80, height: 80, ease: Power3.easeOut})
    setState3(false)
  }
  
  useEffect(()=> {
    gsap.from(titleSection, 1, {opacity: 0, x:50, ease: Power3.easeOut, delay: .1})
  }, [])

  useEffect(()=>{
    gsap.from(circle1, 1, {opacity: 0, x: 40, ease: Power3.easeOut})
    gsap.from(circle2, 1, {opacity: 0, y: 40, ease: Power3.easeOut, delay: .2})
    gsap.from(circle3, 1, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .3})
  }, [])

  return (
   <>
    <div ref={el => titleSection = el} className=' lg:absolute  lg:right-0 lg:top-20 bg-black lg:p-3 text-white text-[30px] '>
      Circle with images  GSAP
    </div>

    <div className="collage absolute flex flex-col text-center top-40 left-40  lg:pl-40 ">
      <div onClick={state1 !== true ? handleExpand1 : handleShrink1} ref={el => circle1 = el}className="circle1 w-20 h-20 rounded-full  lg:mt-60 lg:ml-96 "></div>
      <div onClick={state2 !== true ? handleExpand2 : handleShrink2} ref={el => circle2 = el} className="circle2 w-20 h-20 rounded-full lg:mt-3 lg:ml-96"></div>
      <div onClick={state3 !== true ? handleExpand3 : handleShrink3} ref={el => circle3 = el} className="circle3 w-20 h-20 rounded-full lg:mt-3 lg:ml-96"></div>
     
    </div>
  
      </>

  )
}
