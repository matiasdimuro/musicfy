interface BigCirclesProps {
  gradientToCornerRight: boolean,
  className: string
}

// function BigCirclesProps({gradientToCornerRight, className}): JSX.Element {
function BigCirclesProps({gradientToCornerRight, className}: BigCirclesProps): JSX.Element {

  return (
    <div className={
      `GradientPrimaryToSecondary rounded-full
      ${gradientToCornerRight ? 'rotate-180' : ''}
      ${className}`
    }>
    </div>
  )
}

export default BigCirclesProps