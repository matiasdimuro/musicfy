interface IAdvantageProps {
  className?: string;
  icon: string;
  title: string;
  description: string;
}

function Advantage({ className, icon, title, description }: IAdvantageProps): JSX.Element {
  
  return (
    <div className={`
      flex flex-col justify-center items-center p-5 gap-5
      ${className} 
    `}>
      <img src={icon} alt={`${title} image`} width={'auto'} className="select-none AdvantageIcon" />
      <p className="Font-Subtitle AdvantageTitle font-bold text-dark">{title}</p>
      <p className="Font-Text text-md lg:text-xl text-dark-light text-center">{description}</p>
    </div>
  )
}

export default Advantage