import video from '../assets/phone-background.mp4'
import phoneAsset from '../assets/celular.png'

interface ICellphoneProps {
  className: string
}

function Cellphone({ className }: ICellphoneProps): JSX.Element { 
  return (
    // <>
    //   <video className='Video-Rounded absolute left-0 top-1 lg:top-2 min-w-full max-w-full h-[98%]'
    //     src={video} autoPlay loop muted />
    //   <img className='w-full h-full opacity-95' src={phoneAsset}/>
    // </>
    <>
      <video className={`${className}`}
        src={video} autoPlay loop muted />
      <img className='w-full h-full opacity-95' src={phoneAsset}/>
    </>
  )
}

export default Cellphone