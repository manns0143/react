import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <h1 className='bg-amber-700 mb-5 p-5 rounded-xl'>Tailwind CSS and Props</h1>
      <Card title="new york" desc="big apple"/>
      <Card title="california" desc="hollywood"/>
      <Card title="los angeles"/>
    </>
  )
}

export default App
