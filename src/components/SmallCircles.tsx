interface SmallCirclesProps {
  peakToLeft: boolean,
  className: string;
}

function SmallCircles({peakToLeft, className}: SmallCirclesProps): JSX.Element {

  return (
    <div className={
      `flex w-[3.75rem] h-[3.75rem] items-start content-start gap-[0.75rem] shrink-0 flex-wrap 
      ${!peakToLeft ? 'rotate-180' : ''}
      ${className}`
    }>
      <svg className="w-[1.5rem] h-[1.5rem] shrink-0" 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#822E9A"  transform="rotate(-180 12 12)"/>
      </svg>

      <svg className="w-[1.5rem] h-[1.5rem] shrink-0" 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#822E9A"  transform="rotate(-180 12 12)"/>
      </svg>

      <svg className="w-[1.5rem] h-[1.5rem] shrink-0" 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#822E9A"  transform="rotate(-180 12 12)"/>
      </svg>
    </div>
  )
}

export default SmallCircles