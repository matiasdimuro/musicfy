import { useState } from "react";

interface IFAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({question, answer}: IFAQItemProps) {
  
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div 
      className="w-full h-fit bg-coral  py-3 px-[35px] rounded-lg hover:cursor-pointer hover:bg-[#c4b7b7]" 
      onClick={() => setExpanded(!isExpanded)}>

      <div className="flex items-center justify-between">
        <p className="Font-Subtitle text-lg sm:text-xl text-dark">{question}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none"
        className={`${isExpanded ? '' : 'rotate-180'}`}>
          <path d="M-5.24537e-07 7.15256e-07L6.91425 12L8.08575 12L15 5.95849e-08L13.383 1.30266e-07L7.5 9.9186L1.617 6.44574e-07L-5.24537e-07 7.15256e-07Z" fill="var(--dark)"/>
        </svg>
      </div>

      <div className={`${isExpanded ? 'visible' : 'hidden'} mt-5`}>
        <p className="Font-Text text-justify">{answer}</p>
      </div>

    </div>
  )
}

export default FAQItem