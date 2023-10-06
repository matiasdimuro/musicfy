import Advantages from './layout/Advantages'
import Master from './layout/Master'
// import ContactButton from './components/ContactButton'
// import WavesBackground from './components/WavesBackground'
import Quote from './layout/Quote'


function App(): JSX.Element {

  return (
    <>
      {/* <WavesBackground /> */}
      <Master/>
      <Quote />
      <Advantages />
      <Quote />

      {/* <ContactButton className='absolute right-6 top-[90%] inline-block'/> */}
    </>
  )
}

export default App
