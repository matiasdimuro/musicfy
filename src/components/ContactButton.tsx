interface ContactButtonProps {
  className: string;
}

function ContactButton ({className}: ContactButtonProps): JSX.Element {

  return (
    <div className={
      `w-fit h-fit shrink-0 ${className}`
    }>

      <div className="relative">

        {/* CIRCULO */}
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="linear-gradient(45deg, #EF6C00 1.06%, #822E9A 127.76%)">
          <ellipse cx="40.4392" cy="40.25" rx="40.4392" ry="40.25" fill="url(#paint0_linear_62_657)"/>
          <defs>
            <linearGradient id="paint0_linear_62_657" x1="-2.73805e-06" y1="83.5667" x2="105.033" y2="-20.6263" gradientUnits="userSpaceOnUse">
              <stop offset="0.0227526" stop-color="#EF6C00"/>
              <stop offset="1" stop-color="#822E9A"/>
            </linearGradient>
          </defs>
        </svg>

        {/* TRIANGULO */}
        {/* <svg className="w-[2.6rem] h-[2.6rem] shrink-0 rotate-[120deg] absolute -right-[.6rem] -bottom-2" 
          xmlns="http://www.w3.org/2000/svg" width="35" height="37" viewBox="0 0 35 37" fill="linear-gradient(180deg, #D75E23 -66.44%, #B74C50 245.31%)">
          <path d="M34.8628 36.4023L0.220743 24.8789L27.6439 0.507277L34.8628 36.4023Z" fill="url(#paint0_linear_62_658)"/>
          <defs>
            <linearGradient id="paint0_linear_62_658" x1="-39.8709" y1="29.1333" x2="81.7799" y2="-53.9065" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EF6C00"/>
              <stop offset="1" stop-color="#822E9A"/>
            </linearGradient>
          </defs>
        </svg> */}

        {/* ICONO */}
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none" className="w-[2.4rem] h-[2.4rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <path d="M6.836 6.85556H32.3736V26.0222H8.70344L6.836 27.891V6.85556ZM6.836 3.66111C5.08029 3.66111 3.65976 5.09861 3.65976 6.85556L3.6438 35.6056L10.0282 29.2167H32.3736C34.1293 29.2167 35.5658 27.7792 35.5658 26.0222V6.85556C35.5658 5.09861 34.1293 3.66111 32.3736 3.66111H6.836ZM10.0282 19.6333H29.1814V22.8278H10.0282V19.6333ZM10.0282 14.8417H29.1814V18.0361H10.0282V14.8417ZM10.0282 10.05H29.1814V13.2444H10.0282V10.05Z" fill="white"/>
        </svg>

      </div>

    </div>
  )
}

export default ContactButton