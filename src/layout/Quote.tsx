function Quote(): JSX.Element {
  
  return (
    <article className="GradientPrimaryToSecondary w-full h-[425px] sm:h-[350px] md:h-[300px] relative flex justify-center items-center">

      <section className="Font-Subtitle w-full h-fit relative flex flex-col justify-center items-center text-coral select-none p-5 md:p-0">
        <p className="w-full md:w-[700px] lg:w-[900px] xl:w-[1000px] text-center text-3xl lg:text-4xl">
          “<span className="font-bold text-4xl lg:text-5xl">Musicfy</span> is coming to revolutionize music playback and the way we interact with it throughout  artificial intelligence attributes and functionalities!”
        </p>
        <div className="hidden sm:inline-block absolute bottom-4 md:-bottom-3 lg:-bottom-6 left-1/2 -translate-x-1/2 w-[200px] md:w-[250px] h-[2px] md:h-[3px] bg-white" />
      </section>

      <section className="w-full text-center sm:w-fit absolute right-1/2 translate-x-1/2 sm:translate-x-0 bottom-4 sm:right-6 sm:bottom-4">
        <p className="text-coral text-xl sm:text-2xl">
          - Jhon Doe, Musicfy CEO
        </p>
      </section>

    </article>
  )
}

export default Quote;