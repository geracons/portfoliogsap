import React, {useRef, useEffect} from "react";
import { gsap, Power3} from 'gsap'
import { SplitText } from "../utils/SplitText";

export default function Text(props) {
  let titleSection = useRef();

  useEffect(()=> {
    gsap.from(titleSection, 1, {opacity: 0, x:50, ease: Power3.easeOut, delay: .1})
  }, [])


  return (
    <div>
      <div ref={ el => titleSection = el} className="hidden lg:block lg:absolute  lg:right-0 lg:top-20 lg:bg-black lg:p-3 lg:text-white text-[30px] ">
        Split Text
      </div>
     <div className="text relative h-full w-full flex flex-col items-center justify-center pl-80 pt-60">
      <div className="max-w-5xl">
        <h2 className="text-[5rem] leading-10 font-bold text-teal-400">{props.title}</h2>
        <h3 className="text-[5rem] pt-4 leading-none font-bold text-teal-800">
          <SplitText>{props.text}</SplitText>
        </h3>
      </div>
      </div>


    </div>
  );
}
