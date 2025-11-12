import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind css</h1>
    <div className="flex gap-4">
        <Card channel="chai aur code" btnText="click me" />
        <Card channel="aura++" />
      </div>
    </>
  )
}

export default App
