import { useState } from 'react'
import Footer from "./Footer"

function Subscription() {

  const [email, setEmail] = useState('')

  return (
    <article className="h-[400px] grid grid-rows-2">

      <section className="bg-coral  flex justify-center items-center">
        <div className="w-full sm:w-auto px-5 sm:px-0 ">
          <p className="Font-Title mb-5 text-2xl sm:text-3xl md:text-4xl text-dark text-center uppercase">Would you like to receive news?</p>
          
          <div className="GradientPrimaryToSecondary p-[1px] rounded-full">

            <div className="Font-Text sm:w-auto ps-3 md:ps-4 pe-1 md:pe-2 py-1 md:py-2 flex items-center justify-between gap-5 bg-coral rounded-full">
            {/* border  border-primary */}
              <input type="email" placeholder="email@email.com" 
                className="
                grow h-full bg-inherit text-md md:text-lg text-dark 
                focus:outline-none placeholder:text-dark-light" 
                value={email} onChange={(event) => setEmail(event.target.value)}
              />
              <button className="
                px-2 py-1 md:px-3 md:py-2 text-coral rounded-full
                  bg-primary-light hover:bg-primary active:bg-primary-dark" onClick={() => setEmail('')}>
                Subscribe
              </button>
            </div>

          </div>

        </div>
      </section>

      <section className="GradientPrimaryToSecondary flex flex-col">
        <div className="grow flex justify-center items-center">
          <p className="Font-Text w-full sm:w-[400px] px-5 sm:px-0 text-lg text-center text-coral">
            You would be notified about changes, news, gifts and rewards for using Musicfy!
          </p>
        </div>
        <Footer/>
      </section>
    </article>
  )
}

export default Subscription