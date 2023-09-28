import Master from './layout/Master'
// import ContactButton from './components/ContactButton'
import WavesBackground from './components/WavesBackground'


function App(): JSX.Element {

  return (
    <div className='min-w-full'>
      <WavesBackground />
      <Master/>
      <div className='w-full h-[400px] bg-secondary'></div>
      {/* <ContactButton className='absolute right-6 top-[90%] inline-block'/> */}
    </div>
  )
}

export default App
