import logo from '/src/logo.png'

import SmallCircles from '../components/SmallCircles'
import BigCirclesProps from '../components/BigCircles'
import Cellphone from '../components/Cellphone'

import { useState } from 'react';
import { useSpring, animated } from "react-spring";

function Master(): JSX.Element {

  const slideInRightToLeft = useSpring({
    from: { transform: "translateX(50%)" },
    to: { transform: "translateX(0)"},
    config: { duration: 500, ease: "easeInOutBack" },
  });

  const slideInTopToBottom = useSpring({
    from: { transform: "translateY(-40%)" },
    to: { transform: "translateY(0)"},
    config: { duration: 500, ease: "easeInOutBack" },
  });

  const showIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 650, ease: "easeInOutBack" },
  });

  const [isGooglePlayHover, setGooglePlayHover] = useState(false);
  const [isAppleStoreHover, setAppleStoreHover] = useState(false);

  return (
    <div className="MasterContainer min-w-full min-h-screen p-5 flex flex-col">

      <header>
        <animated.div style={slideInTopToBottom}>
          <animated.div style={showIn} className='w-full flex justify-center relative md:top-14'>
            <h1 className='Font-Subtitle text-6xl mr-5 text-dark select-none'>Musicfy</h1>
            <img src={logo} alt='Musicfy logo' className='w-[3.75rem] select-none' />
          </animated.div>
        </animated.div>
      </header>

      <main 
        className='w-full grow grid justify-items-center gap-10 grid-cols-1 grid-rows-2 md:gap-0 md:grid-cols-2 md:grid-rows-1 relative'>

        {/* ENCABEZADO Y LINKS DE DESCARGA */}
        <article className='animate-fade-right animate-once animate-ease-in-out h-fit md:h-auto md:flex md:flex-col md:justify-center mt-12 sm:mt-16 md:mt-0 order-2 md:order-1
        '>

          <section className='mb-5 sm:mb-10 lg:mb-20 flex flex-col justify-center items-center'>
            <h1 className='HeadingMasterPage mb-4 md:mb-8'>
              The music you
            </h1>
            <h1 className='HeadingMasterPage mb-4 md:mb-8'>
              like when you
            </h1>
            <h1 className='HeadingMasterPage'>
              want
            </h1>
          </section>

          <section className='flex sm:justify-center sm:flex-row flex-col items-center gap-y-4'>
            <svg className='cursor-pointer' onMouseOver={() => { setGooglePlayHover(true) }} onMouseOut={() => { setGooglePlayHover(false) }}
              xmlns="http://www.w3.org/2000/svg" width="200" height="53" viewBox="0 0 178 53" fill="none">
              <path d="M171.407 53H6.59259C2.90074 53 0 50.085 0 46.375V6.625C0 2.915 2.90074 0 6.59259 0H171.407C175.099 0 178 2.915 178 6.625V46.375C178 50.085 175.099 53 171.407 53Z" fill={!isGooglePlayHover ? '#232323' : '#000000'}/>
              <path d="M171.407 1.06C174.44 1.06 176.945 3.5775 176.945 6.625V46.375C176.945 49.4225 174.44 51.94 171.407 51.94H6.59259C3.56 51.94 1.05481 49.4225 1.05481 46.375V6.625C1.05481 3.5775 3.56 1.06 6.59259 1.06H171.407ZM171.407 0H6.59259C2.90074 0 0 3.0475 0 6.625V46.375C0 50.085 2.90074 53 6.59259 53H171.407C175.099 53 178 50.085 178 46.375V6.625C178 3.0475 175.099 0 171.407 0Z" fill="#A6A6A6"/>
              <path d="M62.4978 13.515C62.4978 14.575 62.2341 15.5025 61.5748 16.165C60.7837 16.96 59.8607 17.3575 58.6741 17.3575C57.4874 17.3575 56.5644 16.96 55.7733 16.165C54.9822 15.37 54.5867 14.4425 54.5867 13.25C54.5867 12.0575 54.9822 11.13 55.7733 10.335C56.5644 9.54002 57.4874 9.14252 58.6741 9.14252C59.2015 9.14252 59.7289 9.27502 60.2563 9.54002C60.7837 9.80502 61.1793 10.07 61.443 10.4675L60.7837 11.13C60.2563 10.4675 59.597 10.2025 58.6741 10.2025C57.883 10.2025 57.0919 10.4675 56.5644 11.13C55.9052 11.66 55.6415 12.455 55.6415 13.3825C55.6415 14.31 55.9052 15.105 56.5644 15.635C57.2237 16.165 57.883 16.5625 58.6741 16.5625C59.597 16.5625 60.2563 16.2975 60.9156 15.635C61.3111 15.2375 61.5748 14.7075 61.5748 14.045H58.6741V12.985H62.4978C62.4978 13.1175 62.4978 13.3825 62.4978 13.515Z" fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"/>
              <path d="M68.5631 10.2025H65.0031V12.72H68.2994V13.6475H65.0031V16.165H68.5631V17.225H63.9482V9.27502H68.5631V10.2025Z" fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"/>
              <path d="M72.914 17.225H71.8592V10.2025H69.6177V9.27502H75.1555V10.2025H72.914V17.225Z" fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"/>
              <path d="M78.9792 17.225V9.27502H80.0341V17.225H78.9792Z" fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"/>
              <path d="M84.517 17.225H83.4622V10.2025H81.2207V9.27502H86.6266V10.2025H84.3851V17.225H84.517Z" fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"/>
              <path d="M97.0431 16.165C96.252 16.96 95.329 17.3575 94.1423 17.3575C92.9557 17.3575 92.0327 16.96 91.2416 16.165C90.4505 15.37 90.0549 14.4425 90.0549 13.25C90.0549 12.0575 90.4505 11.13 91.2416 10.335C92.0327 9.54002 92.9557 9.14252 94.1423 9.14252C95.329 9.14252 96.252 9.54002 97.0431 10.335C97.8342 11.13 98.2297 12.0575 98.2297 13.25C98.2297 14.4425 97.8342 15.37 97.0431 16.165ZM92.0327 15.5025C92.5601 16.0325 93.3512 16.43 94.1423 16.43C94.9334 16.43 95.7246 16.165 96.252 15.5025C96.7794 14.9725 97.1749 14.1775 97.1749 13.25C97.1749 12.3225 96.9112 11.5275 96.252 10.9975C95.7246 10.4675 94.9334 10.07 94.1423 10.07C93.3512 10.07 92.5601 10.335 92.0327 10.9975C91.5053 11.5275 91.1097 12.3225 91.1097 13.25C91.1097 14.1775 91.3735 14.9725 92.0327 15.5025Z" fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"/>
              <path d="M99.6799 17.225V9.27502H100.867L104.69 15.5025V13.9125V9.27502H105.745V17.225H104.69L100.603 10.7325V12.3225V17.225H99.6799Z" fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"/>
              <path d="M89.7909 28.885C86.6265 28.885 84.1213 31.27 84.1213 34.5825C84.1213 37.7625 86.6265 40.28 89.7909 40.28C92.9554 40.28 95.4606 37.895 95.4606 34.5825C95.4606 31.1375 92.9554 28.885 89.7909 28.885ZM89.7909 37.895C88.0768 37.895 86.6265 36.4375 86.6265 34.45C86.6265 32.4625 88.0768 31.005 89.7909 31.005C91.505 31.005 92.9554 32.33 92.9554 34.45C92.9554 36.4375 91.505 37.895 89.7909 37.895ZM77.5287 28.885C74.3643 28.885 71.8591 31.27 71.8591 34.5825C71.8591 37.7625 74.3643 40.28 77.5287 40.28C80.6931 40.28 83.1983 37.895 83.1983 34.5825C83.1983 31.1375 80.6931 28.885 77.5287 28.885ZM77.5287 37.895C75.8146 37.895 74.3643 36.4375 74.3643 34.45C74.3643 32.4625 75.8146 31.005 77.5287 31.005C79.2428 31.005 80.6931 32.33 80.6931 34.45C80.6931 36.4375 79.2428 37.895 77.5287 37.895ZM62.8931 30.6075V32.9925H68.5628C68.4309 34.3175 67.9035 35.3775 67.2443 36.04C66.4531 36.835 65.1346 37.7625 62.8931 37.7625C59.3331 37.7625 56.6961 34.98 56.6961 31.4025C56.6961 27.825 59.465 25.0425 62.8931 25.0425C64.7391 25.0425 66.1894 25.8375 67.2443 26.765L68.9583 25.0425C67.508 23.7175 65.662 22.6575 63.025 22.6575C58.2783 22.6575 54.1909 26.6325 54.1909 31.4025C54.1909 36.1725 58.2783 40.1475 63.025 40.1475C65.662 40.1475 67.508 39.3525 69.0902 37.63C70.6724 36.04 71.1998 33.7875 71.1998 32.065C71.1998 31.535 71.1998 31.005 71.068 30.6075H62.8931ZM122.754 32.4625C122.226 31.1375 120.908 28.885 118.007 28.885C115.106 28.885 112.733 31.1375 112.733 34.5825C112.733 37.7625 115.106 40.28 118.271 40.28C120.776 40.28 122.358 38.69 122.886 37.7625L121.04 36.4375C120.381 37.365 119.589 38.0275 118.271 38.0275C116.952 38.0275 116.161 37.4975 115.502 36.305L123.018 33.125L122.754 32.4625ZM115.106 34.3175C115.106 32.1975 116.821 31.005 118.007 31.005C118.93 31.005 119.853 31.535 120.117 32.1975L115.106 34.3175ZM108.909 39.75H111.415V23.1875H108.909V39.75ZM104.954 30.0775C104.295 29.415 103.24 28.7525 101.921 28.7525C99.1524 28.7525 96.5154 31.27 96.5154 34.45C96.5154 37.63 99.0206 40.015 101.921 40.015C103.24 40.015 104.295 39.3525 104.822 38.69H104.954V39.485C104.954 41.605 103.767 42.7975 101.921 42.7975C100.471 42.7975 99.4161 41.7375 99.1524 40.81L97.0428 41.7375C97.702 43.195 99.2843 45.05 102.053 45.05C104.954 45.05 107.327 43.3275 107.327 39.22V29.15H104.954V30.0775ZM102.053 37.895C100.339 37.895 98.8887 36.4375 98.8887 34.45C98.8887 32.4625 100.339 31.005 102.053 31.005C103.767 31.005 105.086 32.4625 105.086 34.45C105.086 36.4375 103.767 37.895 102.053 37.895ZM134.225 23.1875H128.292V39.75H130.797V33.5225H134.225C136.994 33.5225 139.631 31.535 139.631 28.355C139.631 25.175 136.994 23.1875 134.225 23.1875ZM134.357 31.1375H130.797V25.44H134.357C136.203 25.44 137.258 27.03 137.258 28.2225C137.126 29.68 136.071 31.1375 134.357 31.1375ZM149.52 28.7525C147.674 28.7525 145.828 29.5475 145.169 31.27L147.41 32.1975C147.938 31.27 148.729 31.005 149.652 31.005C150.97 31.005 152.157 31.8 152.289 33.125V33.2575C151.893 32.9925 150.838 32.595 149.784 32.595C147.41 32.595 145.037 33.92 145.037 36.305C145.037 38.5575 147.015 40.015 149.124 40.015C150.838 40.015 151.629 39.22 152.289 38.425H152.421V39.75H154.794V33.39C154.53 30.475 152.289 28.7525 149.52 28.7525ZM149.256 37.895C148.465 37.895 147.278 37.4975 147.278 36.4375C147.278 35.1125 148.729 34.715 149.915 34.715C150.97 34.715 151.498 34.98 152.157 35.245C151.893 36.835 150.575 37.895 149.256 37.895ZM163.101 29.15L160.332 36.305H160.2L157.299 29.15H154.662L159.013 39.22L156.508 44.785H159.013L165.738 29.15H163.101ZM140.949 39.75H143.455V23.1875H140.949V39.75Z" fill="white"/>
              <path d="M13.7125 9.9375C13.3169 10.335 13.1851 10.9975 13.1851 11.7925V41.075C13.1851 41.87 13.4488 42.5325 13.8443 42.93L13.9762 43.0625L30.3258 26.6325V26.5V26.3675L13.7125 9.9375Z" fill="url(#paint0_linear_6_148)"/>
              <path d="M35.5998 32.1975L30.1938 26.765V26.5V26.3675L35.5998 20.935L35.7316 21.0675L42.1924 24.7775C44.0383 25.8375 44.0383 27.56 42.1924 28.62L35.5998 32.1975Z" fill="url(#paint1_linear_6_148)"/>
              <path d="M35.7317 32.065L30.1939 26.5L13.7124 43.0625C14.3717 43.725 15.2946 43.725 16.4813 43.195L35.7317 32.065Z" fill="url(#paint2_linear_6_148)"/>
              <path d="M35.7317 20.935L16.4813 9.93751C15.2946 9.27501 14.3717 9.40751 13.7124 10.07L30.1939 26.5L35.7317 20.935Z" fill="url(#paint3_linear_6_148)"/>
              <path opacity="0.2" d="M35.5998 31.9325L16.4813 42.7975C15.4265 43.46 14.5035 43.3275 13.8443 42.7975L13.7124 42.93L13.8443 43.0625C14.5035 43.5925 15.4265 43.725 16.4813 43.0625L35.5998 31.9325Z" fill="#232323"/>
              <path opacity="0.12" d="M13.7125 42.7975C13.3169 42.4 13.1851 41.7375 13.1851 40.9425V41.075C13.1851 41.87 13.4488 42.5325 13.8443 42.93V42.7975H13.7125Z" fill="#232323"/>
              <path opacity="0.12" d="M42.1924 28.2225L35.5999 31.9325L35.7317 32.065L42.1924 28.355C43.1154 27.825 43.511 27.1625 43.511 26.5C43.511 27.1625 42.9836 27.6925 42.1924 28.2225Z" fill="#232323"/>
              <path opacity="0.25" d="M16.4814 10.07L42.1925 24.7775C42.9836 25.3075 43.511 25.8375 43.511 26.5C43.511 25.8375 43.1154 25.175 42.1925 24.645L16.4814 9.9375C14.6354 8.8775 13.1851 9.6725 13.1851 11.7925V11.925C13.1851 9.9375 14.6354 9.01 16.4814 10.07Z" fill="white"/>
              <defs>
                <linearGradient id="paint0_linear_6_148" x1="28.7431" y1="11.5405" x2="6.50664" y2="33.6681" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00A0FF"/>
                  <stop offset="0.00657445" stopColor="#00A1FF"/>
                  <stop offset="0.2601" stopColor="#00BEFF"/>
                  <stop offset="0.5122" stopColor="#00D2FF"/>
                  <stop offset="0.7604" stopColor="#00DFFF"/>
                  <stop offset="1" stopColor="#00E3FF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_6_148" x1="44.6109" y1="26.502" x2="12.7069" y2="26.502" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE000"/>
                  <stop offset="0.4087" stopColor="#FFBD00"/>
                  <stop offset="0.7754" stopColor="#FFA500"/>
                  <stop offset="1" stopColor="#FF9C00"/>
                </linearGradient>
                <linearGradient id="paint2_linear_6_148" x1="32.7345" y1="29.5425" x2="2.58016" y2="59.5493" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF3A44"/>
                  <stop offset="1" stopColor="#C31162"/>
                </linearGradient>
                <linearGradient id="paint3_linear_6_148" x1="9.6213" y1="0.233611" x2="23.0866" y2="13.6329" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#32A071"/>
                  <stop offset="0.0685" stopColor="#2DA771"/>
                  <stop offset="0.4762" stopColor="#15CF74"/>
                  <stop offset="0.8009" stopColor="#06E775"/>
                  <stop offset="1" stopColor="#00F076"/>
                </linearGradient>
              </defs>
            </svg>
            <svg className='cursor-pointer' onMouseOver={() => { setAppleStoreHover(true) }} onMouseOut={() => { setAppleStoreHover(false) }}
              xmlns="http://www.w3.org/2000/svg" width="200" height="53" viewBox="1 0 168 53" fill="none">
              <path d="M162.987 53H5.92001C2.65643 53 0 50.1804 0 46.7288V6.26195C0 2.809 2.65643 0 5.92001 0H162.987C166.25 0 169 2.809 169 6.26195V46.7288C169 50.1804 166.25 53 162.987 53Z" fill="#A6A6A6"/>
              <path d="M169 47.6872C169 50.6224 166.824 53 164.133 53H4.87293C2.18323 53 0 50.6224 0 47.6872V5.3197C0 2.38589 2.18323 0 4.87293 0H164.132C166.824 0 168.999 2.38589 168.999 5.3197L169 47.6872Z" fill={!isAppleStoreHover ? '#232323' : '#000000'}/>
              <path d="M37.7159 26.2138C37.6796 21.9434 41.0195 19.8658 41.1723 19.769C39.2807 16.8501 36.3489 16.4512 35.3186 16.4194C32.8562 16.1452 30.4677 17.979 29.2133 17.979C27.9339 17.979 26.0023 16.4459 23.9205 16.491C21.2415 16.5347 18.7353 18.1764 17.3608 20.7257C14.5241 25.9237 16.6397 33.5623 19.3575 37.7639C20.717 39.8216 22.3056 42.1191 24.3849 42.0383C26.4192 41.9495 27.1791 40.6656 29.6339 40.6656C32.0663 40.6656 32.7798 42.0383 34.9005 41.9866C37.0837 41.9495 38.4582 39.9196 39.7702 37.8434C41.3413 35.4849 41.9722 33.1621 41.9972 33.0429C41.9459 33.0243 37.7572 31.3323 37.7159 26.2138Z" fill="white"/>
              <path d="M33.7099 13.6555C34.804 12.2072 35.5526 10.237 35.3448 8.23755C33.7612 8.31175 31.7807 9.39692 30.6403 10.8133C29.6313 12.0615 28.73 14.1073 28.9628 16.0312C30.7417 16.1716 32.5682 15.0812 33.7099 13.6555Z" fill="white"/>
              <path d="M67.1556 41.7428H64.3127L62.7554 36.5634H57.3424L55.8589 41.7428H53.0911L58.454 24.1097H61.7664L67.1556 41.7428ZM62.2859 34.3904L60.8776 29.786C60.7286 29.3156 60.4494 28.2079 60.0376 26.4642H59.9875C59.8235 27.2142 59.5594 28.3219 59.1963 29.786L57.813 34.3904H62.2859Z" fill="white"/>
              <path d="M80.9473 35.2291C80.9473 37.3915 80.3952 39.1008 79.2911 40.3555C78.3021 41.4725 77.074 42.0303 75.6081 42.0303C74.0258 42.0303 72.8891 41.4288 72.1968 40.2257H72.1467V46.9236H69.4778V33.2138C69.4778 31.8543 69.444 30.4591 69.3789 29.0281H71.7261L71.8751 31.0434H71.9252C72.8152 29.525 74.166 28.7671 75.9787 28.7671C77.3958 28.7671 78.5788 29.3594 79.5252 30.5452C80.4741 31.7324 80.9473 33.2933 80.9473 35.2291ZM78.2282 35.3325C78.2282 34.0949 77.9654 33.0747 77.4371 32.2717C76.86 31.4343 76.0851 31.0156 75.1136 31.0156C74.4552 31.0156 73.8568 31.2488 73.3222 31.7086C72.7864 32.1723 72.4359 32.7779 72.2719 33.5278C72.1893 33.8776 72.148 34.1638 72.148 34.3891V36.5091C72.148 37.4339 72.4159 38.2143 72.9517 38.8517C73.4875 39.489 74.1835 39.807 75.0398 39.807C76.045 39.807 76.8274 39.3962 77.387 38.5774C77.9478 37.7572 78.2282 36.676 78.2282 35.3325Z" fill="white"/>
              <path d="M94.7639 35.2291C94.7639 37.3915 94.2118 39.1008 93.1064 40.3555C92.1187 41.4725 90.8907 42.0303 89.4247 42.0303C87.8424 42.0303 86.7057 41.4288 86.0147 40.2257H85.9646V46.9236H83.2957V33.2138C83.2957 31.8543 83.2619 30.4591 83.1968 29.0281H85.544L85.693 31.0434H85.743C86.6319 29.525 87.9826 28.7671 89.7965 28.7671C91.2124 28.7671 92.3954 29.3594 93.3443 30.5452C94.2894 31.7324 94.7639 33.2933 94.7639 35.2291ZM92.0449 35.3325C92.0449 34.0949 91.7807 33.0747 91.2524 32.2717C90.6753 31.4343 89.9029 31.0156 88.9303 31.0156C88.2705 31.0156 87.6734 31.2488 87.1376 31.7086C86.6018 32.1723 86.2525 32.7779 86.0886 33.5278C86.0072 33.8776 85.9646 34.1638 85.9646 34.3891V36.5091C85.9646 37.4339 86.2325 38.2143 86.7658 38.8517C87.3016 39.4877 87.9976 39.807 88.8564 39.807C89.8616 39.807 90.644 39.3962 91.2036 38.5774C91.7645 37.7572 92.0449 36.676 92.0449 35.3325Z" fill="white"/>
              <path d="M110.212 36.7979C110.212 38.2978 109.72 39.5181 108.732 40.4602C107.647 41.4897 106.136 42.0038 104.194 42.0038C102.401 42.0038 100.964 41.6381 99.8765 40.9054L100.495 38.5509C101.667 39.3008 102.952 39.6771 104.353 39.6771C105.358 39.6771 106.141 39.436 106.703 38.9563C107.262 38.4767 107.542 37.8327 107.542 37.0298C107.542 36.3143 107.311 35.7114 106.849 35.2225C106.39 34.7335 105.622 34.2791 104.551 33.859C101.634 32.7076 100.177 31.0209 100.177 28.8028C100.177 27.3533 100.688 26.1648 101.71 25.2399C102.729 24.3137 104.089 23.8513 105.789 23.8513C107.305 23.8513 108.564 24.1309 109.57 24.6887L108.902 26.9916C107.963 26.451 106.902 26.1807 105.714 26.1807C104.775 26.1807 104.041 26.4258 103.516 26.9134C103.071 27.3493 102.848 27.8806 102.848 28.51C102.848 29.207 103.102 29.7833 103.613 30.2365C104.058 30.6552 104.865 31.1083 106.037 31.5973C107.47 32.2081 108.523 32.9223 109.2 33.7411C109.875 34.5573 110.212 35.5789 110.212 36.7979Z" fill="white"/>
              <path d="M119.036 31.1481H116.094V37.3213C116.094 38.8914 116.612 39.6758 117.651 39.6758C118.128 39.6758 118.524 39.6321 118.837 39.5446L118.911 41.6898C118.385 41.8978 117.693 42.0025 116.835 42.0025C115.781 42.0025 114.958 41.662 114.363 40.9823C113.771 40.3012 113.473 39.1591 113.473 37.5545V31.1455H111.72V29.0255H113.473V26.6974L116.094 25.86V29.0255H119.036V31.1481Z" fill="white"/>
              <path d="M132.31 35.2807C132.31 37.2351 131.781 38.8397 130.727 40.0945C129.622 41.3863 128.155 42.0303 126.326 42.0303C124.563 42.0303 123.16 41.4115 122.113 40.174C121.067 38.9364 120.543 37.3742 120.543 35.4914C120.543 33.5211 121.082 31.9073 122.162 30.6525C123.24 29.3964 124.695 28.7684 126.524 28.7684C128.286 28.7684 129.705 29.3871 130.775 30.626C131.799 31.8278 132.31 33.3794 132.31 35.2807ZM129.541 35.3722C129.541 34.1995 129.304 33.1939 128.824 32.3551C128.265 31.3402 127.465 30.834 126.428 30.834C125.356 30.834 124.541 31.3415 123.981 32.3551C123.502 33.1952 123.265 34.2168 123.265 35.4252C123.265 36.5978 123.502 37.6035 123.981 38.4409C124.558 39.4558 125.364 39.962 126.405 39.962C127.424 39.962 128.224 39.4452 128.801 38.4144C129.293 37.5597 129.541 36.5435 129.541 35.3722Z" fill="white"/>
              <path d="M140.985 31.5125C140.721 31.4608 140.439 31.4343 140.144 31.4343C139.205 31.4343 138.479 31.8093 137.968 32.5606C137.523 33.2231 137.301 34.0605 137.301 35.0714V41.7428H134.633L134.658 33.0323C134.658 31.5668 134.624 30.2325 134.558 29.0294H136.883L136.98 31.4621H137.054C137.336 30.6261 137.78 29.953 138.389 29.4481C138.983 28.9937 139.625 28.7671 140.318 28.7671C140.564 28.7671 140.787 28.7856 140.985 28.8188V31.5125Z" fill="white"/>
              <path d="M152.921 34.7839C152.921 35.2901 152.89 35.7167 152.824 36.0652H144.817C144.848 37.3213 145.235 38.2819 145.978 38.9444C146.653 39.5367 147.526 39.8335 148.597 39.8335C149.783 39.8335 150.864 39.6334 151.837 39.2319L152.255 41.1929C151.118 41.7176 149.777 41.9786 148.228 41.9786C146.365 41.9786 144.903 41.3983 143.839 40.2389C142.777 39.0795 142.245 37.5227 142.245 35.5696C142.245 33.6523 142.74 32.0557 143.73 30.7824C144.767 29.4229 146.167 28.7432 147.93 28.7432C149.661 28.7432 150.972 29.4229 151.862 30.7824C152.567 31.8623 152.921 33.1979 152.921 34.7839ZM150.376 34.0512C150.394 33.2138 150.22 32.4903 149.858 31.8795C149.396 31.0938 148.686 30.7016 147.731 30.7016C146.858 30.7016 146.149 31.0845 145.607 31.853C145.162 32.4638 144.898 33.1965 144.817 34.0498L150.376 34.0512Z" fill="white"/>
              <path d="M61.4032 13.262C61.4032 14.8215 60.9613 15.9954 60.0788 16.7838C59.2613 17.5112 58.0996 17.8756 56.5949 17.8756C55.8488 17.8756 55.2103 17.8412 54.6758 17.7723V9.25118C55.3731 9.13193 56.1242 9.07098 56.9354 9.07098C58.3687 9.07098 59.4491 9.40091 60.1777 10.0608C60.9939 10.8067 61.4032 11.8734 61.4032 13.262ZM60.0199 13.3004C60.0199 12.2894 59.7671 11.5143 59.2613 10.9737C58.7556 10.4344 58.017 10.1641 57.0443 10.1641C56.6312 10.1641 56.2794 10.1933 55.9877 10.2542V16.7321C56.1492 16.7586 56.4446 16.7706 56.874 16.7706C57.878 16.7706 58.6529 16.4751 59.1987 15.8841C59.7445 15.2932 60.0199 14.4319 60.0199 13.3004Z" fill="white"/>
              <path d="M68.7378 14.624C68.7378 15.5847 68.4787 16.3717 67.9604 16.9891C67.4171 17.6238 66.6973 17.9405 65.7985 17.9405C64.9322 17.9405 64.2424 17.6371 63.7279 17.0276C63.2146 16.4194 62.958 15.6522 62.958 14.7274C62.958 13.7601 63.2221 12.9665 63.7529 12.3503C64.2837 11.7342 64.9973 11.4255 65.8961 11.4255C66.7624 11.4255 67.4584 11.7289 67.9854 12.3371C68.4862 12.928 68.7378 13.6912 68.7378 14.624ZM67.377 14.6691C67.377 14.0927 67.2594 13.5985 67.0253 13.1864C66.7499 12.6882 66.358 12.4391 65.8485 12.4391C65.3215 12.4391 64.9209 12.6882 64.6455 13.1864C64.4102 13.5985 64.2937 14.1007 64.2937 14.6943C64.2937 15.2706 64.4114 15.7649 64.6455 16.1769C64.9297 16.6751 65.3253 16.9242 65.836 16.9242C66.3368 16.9242 66.7298 16.6712 67.0128 16.1637C67.2556 15.7437 67.377 15.2455 67.377 14.6691Z" fill="white"/>
              <path d="M78.5724 11.5527L76.7259 17.7987H75.5241L74.7592 15.0864C74.5652 14.4094 74.4075 13.7363 74.2848 13.0685H74.261C74.1471 13.7548 73.9893 14.4266 73.7865 15.0864L72.9741 17.7987H71.7585L70.0222 11.5527H71.3705L72.0377 14.522C72.1992 15.2242 72.3319 15.8934 72.4383 16.5267H72.4621C72.5597 16.0047 72.7212 15.3395 72.949 14.5352L73.7865 11.554H74.8556L75.6581 14.4716C75.8521 15.1832 76.0098 15.8682 76.1313 16.528H76.1676C76.2564 15.8854 76.3904 15.2004 76.5682 14.4716L77.2842 11.554H78.5724V11.5527Z" fill="white"/>
              <path d="M85.3736 17.7987H84.0616V14.2212C84.0616 13.1188 83.666 12.5676 82.8724 12.5676C82.483 12.5676 82.1688 12.7187 81.9247 13.0221C81.6831 13.3255 81.5604 13.6833 81.5604 14.0927V17.7974H80.2485V13.3375C80.2485 12.7889 80.2322 12.194 80.2009 11.55H81.3539L81.4152 12.5266H81.4515C81.6043 12.2231 81.8321 11.9727 82.1313 11.7726C82.4868 11.5394 82.8849 11.4215 83.3205 11.4215C83.8714 11.4215 84.3295 11.6097 84.6938 11.9873C85.147 12.4497 85.3736 13.14 85.3736 14.0569V17.7987Z" fill="white"/>
              <path d="M88.9916 17.7987H87.6809V8.68671H88.9916V17.7987Z" fill="white"/>
              <path d="M96.7156 14.624C96.7156 15.5847 96.4565 16.3717 95.9382 16.9891C95.3949 17.6238 94.6738 17.9405 93.7762 17.9405C92.9087 17.9405 92.2189 17.6371 91.7057 17.0276C91.1924 16.4194 90.9358 15.6522 90.9358 14.7274C90.9358 13.7601 91.1999 12.9665 91.7307 12.3503C92.2615 11.7342 92.9751 11.4255 93.8726 11.4255C94.7402 11.4255 95.4349 11.7289 95.9632 12.3371C96.464 12.928 96.7156 13.6912 96.7156 14.624ZM95.3536 14.6691C95.3536 14.0927 95.2359 13.5985 95.0018 13.1864C94.7277 12.6882 94.3346 12.4391 93.8263 12.4391C93.298 12.4391 92.8974 12.6882 92.6233 13.1864C92.3879 13.5985 92.2715 14.1007 92.2715 14.6943C92.2715 15.2706 92.3892 15.7649 92.6233 16.1769C92.9075 16.6751 93.303 16.9242 93.8138 16.9242C94.3145 16.9242 94.7064 16.6712 94.9893 16.1637C95.2334 15.7437 95.3536 15.2455 95.3536 14.6691Z" fill="white"/>
              <path d="M103.065 17.7987H101.887L101.789 17.0793H101.753C101.35 17.653 100.775 17.9405 100.029 17.9405C99.4721 17.9405 99.0214 17.751 98.6822 17.3747C98.3742 17.0329 98.2202 16.6076 98.2202 16.1027C98.2202 15.3395 98.5207 14.7579 99.1253 14.3551C99.7287 13.9523 100.577 13.7548 101.67 13.7641V13.6475C101.67 12.8247 101.262 12.4139 100.445 12.4139C99.8626 12.4139 99.3494 12.569 98.9062 12.8764L98.6396 11.9648C99.1879 11.6057 99.8652 11.4255 100.664 11.4255C102.206 11.4255 102.98 12.2867 102.98 14.0092V16.3094C102.98 16.9335 103.009 17.4304 103.065 17.7987ZM101.703 15.6522V14.689C100.256 14.6625 99.5322 15.0825 99.5322 15.9477C99.5322 16.2737 99.6148 16.5175 99.7838 16.6804C99.9528 16.8434 100.168 16.9242 100.425 16.9242C100.713 16.9242 100.982 16.8275 101.227 16.6354C101.474 16.4419 101.625 16.1968 101.682 15.896C101.695 15.8285 101.703 15.7463 101.703 15.6522Z" fill="white"/>
              <path d="M110.52 17.7987H109.355L109.294 16.7957H109.258C108.886 17.5589 108.252 17.9405 107.362 17.9405C106.651 17.9405 106.059 17.645 105.59 17.0541C105.12 16.4631 104.886 15.696 104.886 14.7539C104.886 13.7429 105.14 12.9241 105.651 12.2987C106.146 11.7157 106.751 11.4242 107.473 11.4242C108.265 11.4242 108.82 11.7064 109.135 12.2722H109.16V8.68671H110.473V16.116C110.473 16.7242 110.488 17.2846 110.52 17.7987ZM109.16 15.1646V14.1232C109.16 13.943 109.148 13.7972 109.124 13.6859C109.05 13.352 108.891 13.0711 108.649 12.8446C108.405 12.618 108.111 12.504 107.772 12.504C107.282 12.504 106.899 12.7094 106.618 13.1215C106.338 13.5336 106.197 14.0596 106.197 14.7022C106.197 15.3197 106.331 15.8205 106.6 16.2061C106.884 16.6168 107.267 16.8222 107.747 16.8222C108.177 16.8222 108.522 16.6513 108.783 16.3081C109.036 15.9914 109.16 15.6098 109.16 15.1646Z" fill="white"/>
              <path d="M121.74 14.624C121.74 15.5847 121.481 16.3717 120.963 16.9891C120.419 17.6238 119.701 17.9405 118.801 17.9405C117.936 17.9405 117.246 17.6371 116.73 17.0276C116.217 16.4194 115.96 15.6522 115.96 14.7274C115.96 13.7601 116.224 12.9665 116.755 12.3503C117.286 11.7342 117.999 11.4255 118.9 11.4255C119.765 11.4255 120.462 11.7289 120.988 12.3371C121.488 12.928 121.74 13.6912 121.74 14.624ZM120.381 14.6691C120.381 14.0927 120.263 13.5985 120.029 13.1864C119.752 12.6882 119.361 12.4391 118.851 12.4391C118.325 12.4391 117.924 12.6882 117.648 13.1864C117.412 13.5985 117.296 14.1007 117.296 14.6943C117.296 15.2706 117.414 15.7649 117.648 16.1769C117.932 16.6751 118.327 16.9242 118.838 16.9242C119.339 16.9242 119.733 16.6712 120.016 16.1637C120.258 15.7437 120.381 15.2455 120.381 14.6691Z" fill="white"/>
              <path d="M128.794 17.7987H127.484V14.2212C127.484 13.1188 127.088 12.5676 126.293 12.5676C125.904 12.5676 125.589 12.7187 125.347 13.0221C125.104 13.3255 124.982 13.6833 124.982 14.0927V17.7974H123.669V13.3375C123.669 12.7889 123.654 12.194 123.623 11.55H124.775L124.836 12.5266H124.872C125.026 12.2231 125.254 11.9727 125.552 11.7726C125.909 11.5394 126.306 11.4215 126.742 11.4215C127.292 11.4215 127.75 11.6097 128.114 11.9873C128.569 12.4497 128.794 13.14 128.794 14.0569V17.7987Z" fill="white"/>
              <path d="M137.623 12.5928H136.179V15.6271C136.179 16.3982 136.435 16.7838 136.944 16.7838C137.179 16.7838 137.374 16.7626 137.528 16.7189L137.562 17.7722C137.303 17.8756 136.962 17.9273 136.543 17.9273C136.025 17.9273 135.622 17.7603 135.33 17.4264C135.037 17.0925 134.892 16.5307 134.892 15.7423V12.5928H134.029V11.5527H134.892V10.4079L136.177 9.99713V11.5514H137.622L137.623 12.5928Z" fill="white"/>
              <path d="M144.569 17.7987H143.255V14.2477C143.255 13.1281 142.86 12.5676 142.067 12.5676C141.459 12.5676 141.043 12.8923 140.816 13.5415C140.777 13.678 140.754 13.8449 140.754 14.041V17.7974H139.444V8.68671H140.754V12.451H140.779C141.192 11.766 141.785 11.4242 142.552 11.4242C143.095 11.4242 143.545 11.6123 143.901 11.9899C144.346 12.4603 144.569 13.1599 144.569 14.0848V17.7987Z" fill="white"/>
              <path d="M151.733 14.3802C151.733 14.6293 151.716 14.8387 151.684 15.0096H147.75C147.767 15.6271 147.955 16.0974 148.319 16.4234C148.652 16.7149 149.082 16.8606 149.607 16.8606C150.19 16.8606 150.72 16.7626 151.199 16.5652L151.404 17.5298C150.844 17.7868 150.186 17.9153 149.423 17.9153C148.51 17.9153 147.79 17.6305 147.269 17.0607C146.746 16.491 146.487 15.7264 146.487 14.7671C146.487 13.8251 146.728 13.0407 147.215 12.4153C147.723 11.7475 148.411 11.4136 149.278 11.4136C150.127 11.4136 150.772 11.7475 151.207 12.4153C151.559 12.9453 151.733 13.6011 151.733 14.3802ZM150.481 14.0212C150.491 13.6091 150.405 13.254 150.227 12.9545C149.999 12.569 149.653 12.3755 149.183 12.3755C148.755 12.3755 148.406 12.5637 148.139 12.9413C147.921 13.2421 147.792 13.6011 147.75 14.0212H150.481Z" fill="white"/>
            </svg>
          </section>

        </article>


        <animated.div style={slideInRightToLeft} className="mt-24 md:mt-0 order-1 md:order-2 grid justify-start items-center">

          <animated.div style={showIn}>

            {/* CELULAR Y FORMAS */}
            <article>
              <div className='relative w-[175px] h-[350px] lg:w-[250px] lg:h-[500px] xl:w-[300px] xl:h-[600px]'>
                <SmallCircles peakToLeft={true} className="absolute -left-10 -top-10 " />
                <SmallCircles peakToLeft={false} className="absolute -right-10 -bottom-10 " />
                <BigCirclesProps 
                  gradientToCornerRight={true} 
                  className="absolute -right-16 -top-8 lg:-right-32 lg:-top-16 w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] xl:w-[18rem] xl:h-[18rem]" />
                <BigCirclesProps 
                  gradientToCornerRight={false} 
                  className="absolute -left-16 -bottom-8 lg:-left-32 lg:-bottom-16 w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] xl:w-[18rem] xl:h-[18rem]" />
                <Cellphone className='Video-Rounded absolute left-0 top-1 lg:top-4 min-w-full max-w-full h-[96%]' />
              </div>
            </article>

          </animated.div>

        </animated.div>

      </main>
      
    </div>
  )
}

export default Master