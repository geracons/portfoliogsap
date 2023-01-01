import React from "react";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  NavLink } from "react-router-dom";
import '../assets/css/sidebar.scss'
import { useRef } from 'react'
import { useEffect } from 'react'
import { gsap, Power3} from 'gsap'




export default function Sidebar() {
  let link1 = useRef(null)
  let link2 = useRef(null)
  let link3 = useRef(null)
  let link4 = useRef(null)
  let link5 = useRef(null)

  useEffect(()=>{
    gsap.from(link1, 1, {opacity: 0, x: 40, ease: Power3.easeOut})
    gsap.from(link2, 1, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .2})
    gsap.from(link3, 1, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .3})
    gsap.from(link4, 1, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .4})
    gsap.from(link5, 1, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .5})
  }, [])

  return (
    <>
    <div className=" block lg:hidden">
    <section class="top-nav  ">
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul className="menu z-20">
     <li>Circles</li>
      <li>DrawSVG</li>
      <li>Parallax</li>
      <li>Scroll</li>
      <li>Text</li>
    </ul>
  </section>
  </div>
      <div className="bg-black hidden  lg:block sm:w-20 md:w-40 lg:w-80 absolute top-0 z-10 lg:max-h-max lg:h-auto lg:min-h-screen">
        <div className="title  hidden lg:block">
          <p className="text-white font-bold text-[36px] md:text-[78px] lg:mt-20 lg:ml-20 lg:pl-1 inline absolute ">
            <NavLink to="/">Welco </NavLink>
          </p>{" "}
          <p className="text-black font-bold text-[36px] md:text-[78px] mt-20 ml-20 pl-20 inline absolute left-40 ">
            me
          </p>
        </div>
        <div className="language text-center pt-8">
        <p className="text-[18px] text-white text-center"> ES | EN </p>
        </div>

   

        <ul className="mt-40 ml-10 hidden lg:block font-normal">
          <NavLink ref={el => link1 = el} exact="true" activeclassname="active"  to="/circles"><li className="text-white text-[36px] md:text-[50px] ">Circles</li></NavLink>
          <NavLink ref={el => link2 = el} exact="true" activeclassname="active"  to="/drawsvg"><li className="text-white text-[36px] md:text-[50px] ">DrawSVG</li></NavLink>
          <NavLink ref={el => link3 = el} exact="true" activeclassname="active"  to="/parallax"><li className="text-white text-[36px] md:text-[50px] ">Parallax</li></NavLink>
          <NavLink ref={el => link4 = el} exact="true" activeclassname="active"  to="/scroll"><li className="text-white text-[36px] md:text-[50px] ">Scroll </li></NavLink>
          <NavLink ref={el => link5 = el} exact="true" activeclassname="active"  to="/text"><li className="text-white text-[36px] md:text-[50px] ">Text </li></NavLink>
        </ul>

        <div className="text-center">
          <ul className="inline-flex flex-nowrap mt-20">
            <li className="">
              <a
                className="text-[62px]"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/geracons/portfoliogsap"
              >
                <FontAwesomeIcon size="40%" icon={faGithub} color="#FFF" />
              </a>
            </li>
            <li className="ml-10 bottom-10">
              <a
                 className="text-[62px]"
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/file/MN0r2VrSPe7IrgsuRapcqU/GSAP-portfolio?node-id=0%3A1&t=0AlgtHd8Km5RMPTC-1"
              >
                <FontAwesomeIcon icon={faFigma} color="#FFF" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
