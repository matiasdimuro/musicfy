import Advantage from "../components/Advantage";
import BigCircles from "../components/BigCircles";
import Cellphone from "../components/Cellphone";
import SmallCircles from "../components/SmallCircles";

import FreeToUseIcon from "../assets/free-to-use.webp"
import ChatGptIcon from "../assets/chatgpt-icon.webp"
import ColaborativeIcon from "../assets/colaborative-icon.webp"
import OpenSourceIcon from "../assets/opensource-icon.webp"

function Advantages(): JSX.Element {

  const advantages = [
    {
      icon: FreeToUseIcon,
      title: "Free To Use",
      description: "We believe that 'good things should be shared for everyone."
    },
    {
      icon: ChatGptIcon,
      title: "Use AI",
      description: "Explore and have fun with the amazing AI tools."
    },
    {
      icon: ColaborativeIcon,
      title: "Colaborative",
      description: "Share and play music with your friends in real time."
    },
    {
      icon: OpenSourceIcon,
      title: "Open Source",
      description: "Anyone can view and suggest ideas for improve Musicfy."
    }
  ]

  return (
    <article className="MasterContainer w-full h-auto lg:h-[800px] xl:h-screen px-10 py-10 md:py-16 flex flex-col md:flex-row gap-12 md:gap-5">

      <section className="w-full md:w-[400px] lg:w-[500px] h-full flex justify-center md:justify-end items-center relative order-2 md:order-1">
        <BigCircles 
          gradientToCornerRight={false} 
          className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/3 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rotate-90 " />
        <div className="relative w-[250px] h-[500px] lg:w-[300px] lg:h-[600px] xl:w-[400px] xl:h-[800px]">
          <Cellphone className='Video-Rounded absolute left-0 top-1 lg:top-4 min-w-full max-w-full h-[96%]' /> 
          <SmallCircles peakToLeft={true} className="absolute -left-8 -top-8" />
        </div>
      </section>

      <section className="grow grid grid-cols-1 sm:grid-cols-2 order-1 md:order-2">
        {
          advantages.map((advantage, index) => (
            <Advantage 
              key={index}
              icon={advantage.icon} 
              title={advantage.title} 
              description={advantage.description}
              className="w-full"
            />
          ))
        }
      </section>

    </article>
  )
}

export default Advantages;