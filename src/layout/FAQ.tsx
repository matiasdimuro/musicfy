/* eslint-disable react-refresh/only-export-components */
import FAQItem from "../components/FAQItem";

const items = [
  {
    question: "Is Musicfy available for IOS devices?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    question: "Is Musicfy available for IOS devices?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    question: "Is Musicfy available for IOS devices?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
]

function FAQ() {

  return (
    <article className="
      GradientPrimaryToSecondary w-full min-h-[500px] py-10 
      relative flex justify-center items-center bg-primary
    ">
      
      <section className="
        w-full sm:w-8/12 h-auto px-5 sm:px-0 flex flex-col gap-7 md:gap-11 z-20
      ">
        
        {
          items.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} />
              ))
            }
      </section>

      <section className="
        absolute w-full h-full left-0 top-0 
        flex justify-center items-center z-0 overflow-hidden
      ">
        <p className="
          Font-Title relative top-5 left-0 text-center w-fit h-fit
          text-[350px] md:text-[400px] lg:text-[450px]
          lg:tracking-[70px] xl:tracking-[175px] 2xl:tracking-[275px]
          lg:translate-x-[50px] xl:translate-x-[100px]
          text-[#EEDFDF] opacity-20 select-none
        ">
            FAQ
        </p>
      </section>
      
    </article>
  )
}

export default FAQ;