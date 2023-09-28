import Master from './layout/Master'
import './styles/App.css'

function App(): JSX.Element {

  return (
    <div className='min-w-full'>
      <Master/>
      <div className='w-full bg-secondary'></div>
    </div>
  )
}

export default App
