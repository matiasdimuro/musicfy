import Master from './layout/Master'
import Quote from './layout/Quote'
import Advantages from './layout/Advantages'
import FAQ from './layout/FAQ'
import Subscription from './layout/Subscription'
// import ContactButton from './components/ContactButton'

function App(): JSX.Element {

  return (
    <>
      <Master/>
      <Quote/>
      <Advantages/>
      <FAQ/>
      <Subscription/>
      {/* <ContactButton className='absolute right-6 top-[90%] inline-block'/> */}
    </>
  )
}

export default App