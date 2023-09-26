interface BigCirclesProps {
  gradientToCornerRight: boolean,
  className: string
}

function BigCirclesProps({gradientToCornerRight, className}: BigCirclesProps): JSX.Element {

  return (
    <div className={
      `GradientPrimaryToSecondary w-[18rem] h-[18rem] rounded-full
      ${gradientToCornerRight ? 'rotate-180' : ''}
      ${className}`
    }>
    </div>
  )
}

export default BigCirclesProps