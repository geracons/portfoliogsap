import React from 'react'
import { forwardRef } from 'react'
import { useRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';

const Background = forwardRef((props, ref)=> {
  const el = useRef();
  useImperativeHandle(
    ref,
    ()=>{
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y});

        },
      };
    },
    []
  )

  return (
    <div ref={el} className='absolute top-60 left-96 w-full h-full will-change-transform'>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 625">
      <g id="BLOW">
        <g
          fill="none"
          stroke="#00EFEB"
          strokeMiterlimit="10"
          strokeWidth="1.592"
        >
          <path d="M750.84,357.483s61.278-6.923,62.413-77.856" />
          <path d="M750.84,357.483s45-7.436,46.984-74.608" />
          <path d="M750.84,357.483S692.729,327,699.421,272.713" />
          <path d="M711.815,277.422s-2.865,66.924,39.025,80.061" />
          <path d="M760.149,255.61s28.862,27.513-9.309,101.873" />
          <path d="M779.482,261.063s5.315,58.249-28.642,96.42" />
          <path d="M682.566,310.636s18.7,32.471,68.274,46.847" />
          <path d="M693.72,280.149s-4.434,66.593,57.12,77.334" />
          <path d="M737.345,264.037c-.248.744-5.591,66.429,13.5,93.446" />
          <path d="M728.67,264.781s-11.788,49.326,22.17,92.7" />
          <path d="M717.516,274.943s-12.779,58.745,33.324,82.54c-28.009-67.667-1.35-96.42-1.35-96.42" />
          <path d="M772.046,268.251s8.29,66.428-21.206,89.232" />
          <path d="M749.738,277.67s21.179,32.719,1.1,79.813" />
          <path d="M755.935,275.439c-.5.744-18.315,41.559-5.095,82.044,0,0,48.794,10.29,74.141-52.888" />
          <path d="M749.655,359.631c-12.31,55.6,12.311,204.377,12.311,204.377" />
        </g>
        <path
          d="M761.961,354.471a12.308,12.308,0,0,1-24.616,0,11.752,11.752,0,0,1,.255-2.484,40.522,40.522,0,0,0,14,2.166,46.338,46.338,0,0,0,10.27-1.067A10.086,10.086,0,0,1,761.961,354.471Z"
          fill="#080F0F"
        />
        <g
          fill="none"
          transform="translate(-146.971 35.812)"
          stroke="#080F0F"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3.184"
        >
          <line x1="894.443" y1="243.374" x2="898.976" y2="240.342" />
          <line x1="862.079" y1="238.266" x2="867.39" y2="239.501" />
          <line x1="843.914" y1="236.653" x2="849.367" y2="236.653" />
          <line x1="838.213" y1="244.337" x2="843.666" y2="244.337" />
          <line x1="856.388" y1="240.703" x2="861.679" y2="242.022" />
          <line x1="872.948" y1="228.545" x2="878.334" y2="229.393" />
          <line x1="882.398" y1="227.389" x2="887.722" y2="228.567" />
          <line x1="894.253" y1="223.324" x2="899.166" y2="225.691" />
          <line x1="942.317" y1="247.063" x2="947.77" y2="247.063" />
          <line x1="917.102" y1="233.044" x2="922.42" y2="231.834" />
          <line x1="923.309" y1="225.896" x2="928.607" y2="224.606" />
          <line x1="957.451" y1="242.816" x2="962.875" y2="243.379" />
          <line x1="904.35" y1="220.215" x2="909.394" y2="218.142" />
          <line x1="827.194" y1="275.546" x2="832.378" y2="273.855" />
          <line x1="900.915" y1="238.881" x2="905.889" y2="241.117" />
          <line x1="969.24" y1="268.723" x2="974.664" y2="269.285" />
        </g>

        <g
          fill="none"
          transform="translate(-146.971 35.812)"
          stroke="#080F0F"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3.184"
        >
          <line x1="894.443" y1="243.374" x2="898.976" y2="240.342" />
          <line x1="862.079" y1="238.266" x2="867.39" y2="239.501" />
          <line x1="843.914" y1="236.653" x2="849.367" y2="236.653" />
          <line x1="838.213" y1="244.337" x2="843.666" y2="244.337" />
          <line x1="856.388" y1="240.703" x2="861.679" y2="242.022" />
          <line x1="872.948" y1="228.545" x2="878.334" y2="229.393" />
          <line x1="882.398" y1="227.389" x2="887.722" y2="228.567" />
          <line x1="894.253" y1="223.324" x2="899.166" y2="225.691" />
          <line x1="942.317" y1="247.063" x2="947.77" y2="247.063" />
          <line x1="917.102" y1="233.044" x2="922.42" y2="231.834" />
          <line x1="923.309" y1="225.896" x2="928.607" y2="224.606" />
          <line x1="957.451" y1="242.816" x2="962.875" y2="243.379" />
          <line x1="904.35" y1="220.215" x2="909.394" y2="218.142" />
          <line x1="827.194" y1="275.546" x2="832.378" y2="273.855" />
          <line x1="900.915" y1="238.881" x2="905.889" y2="241.117" />
          <line x1="969.24" y1="268.723" x2="974.664" y2="269.285" />
        </g>
      </g>
      <g id="TREE_BACKGROUND">
        <path
          d="M534.3,174.913V506.824c0-1.751-8.566-8.152-9.808-9.41a254.381,254.381,0,0,1-20.524-23.851c-13.581-17.848-24.966-37.337-29.822-59.469-5.015-22.928-2.452-48.037,10.015-67.923,5.3-8.455,12.26-15.859,16.734-24.759,5.43-10.779,6.894-23.326,5.239-35.268-2.086-14.966-8.821-29.137-9.617-44.215-.8-15.269,4.744-30.157,13.167-42.671a86.9,86.9,0,0,1,14.633-16.766C525.256,181.664,534.3,175.9,534.3,174.913Z"
          fill="#00EFEB"
        />
        <path
          d="M534.429,506.818c0-1.749,8.572-8.14,9.809-9.4a253.453,253.453,0,0,0,20.522-23.858c13.592-17.842,24.977-37.334,29.82-59.464,5.018-22.93,2.458-48.042-10.01-67.93-5.3-8.449-12.259-15.85-16.739-24.759-5.421-10.779-6.881-23.311-5.226-35.262,2.074-14.967,8.82-29.13,9.612-44.219.8-15.26-4.739-30.145-13.163-42.669A86.88,86.88,0,0,0,544.415,182.5c-.946-.835-9.986-6.593-9.986-7.587Z"
          fill="#00EFEB"
        />
        <path
          d="M534.3,214.766V480.123c-18.534-7.993-28.453-36.223-38.134-52.1-4.792-7.834-9.043-19.3-1.831-24.966,6.369-4.983,17.292-.86,22.753-6.814,3.837-4.2,2.516-10.891.175-16.066s-5.573-10.461-4.792-16.081c.764-5.621,8.454-10.158,12.18-5.875q-1.386-51.373-2.755-102.777c-.254-9.219-.461-18.677,2.691-27.339A29.087,29.087,0,0,1,534.3,214.766Z"
          fill="#49F2EF"
        />
        <path
          d="M534.429,214.766V480.123c18.533-7.993,28.453-36.223,38.133-52.1,4.793-7.834,9.044-19.3,1.831-24.966-6.369-4.983-17.291-.86-22.752-6.814-3.838-4.2-2.516-10.891-.176-16.066,2.357-5.174,5.573-10.461,4.793-16.081-.764-5.621-8.455-10.158-12.18-5.875q1.385-51.373,2.754-102.777c.255-9.219.462-18.677-2.691-27.339A29.092,29.092,0,0,0,534.429,214.766Z"
          fill="#49F2EF"
        />
        <g transform="translate(-146.971 35.812)">
          <line
            x1="625.367"
            y1="345.922"
            x2="681.415"
            y2="392.222"
            fill="none"
            stroke="#080F0F"
            strokeMiterlimit="10"
            strokeWidth="1.592"
          />
          <line
            x1="657.902"
            y1="270.081"
            x2="681.415"
            y2="289.504"
            fill="none"
            stroke="#080F0F"
            strokeMiterlimit="10"
            strokeWidth="1.592"
          />
          <line
            x1="725.082"
            y1="313.424"
            x2="681.773"
            y2="349.201"
            fill="none"
            stroke="#080F0F"
            strokeMiterlimit="10"
            strokeWidth="1.592"
          />
          <line
            x1="712.682"
            y1="217.772"
            x2="681.773"
            y2="243.306"
            fill="none"
            stroke="#080F0F"
            strokeMiterlimit="10"
            strokeWidth="1.592"
          />
          <line
            x1="681.382"
            y1="178.954"
            x2="681.382"
            y2="537.725"
            fill="none"
            stroke="#080F0F"
            strokeMiterlimit="10"
            strokeWidth="1.592"
          />
        </g>
      </g>
    </svg>
    </div>
  )


}) 


export default Background; 
