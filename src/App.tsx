import Master from './layout/Master'
import Quote from './layout/Quote'
import Advantages from './layout/Advantages'
import FAQ from './layout/FAQ'
// import ContactButton from './components/ContactButton'
// import WavesBackground from './components/WavesBackground'


function App(): JSX.Element {

  return (
    <>
      {/* <WavesBackground /> */}
      <Master/>
      <Quote />
      <Advantages />
      <FAQ />
      {/* <ContactButton className='absolute right-6 top-[90%] inline-block'/> */}
    </>
  )
}

export default App
