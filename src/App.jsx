import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="bg-orange-200 font-bold p-4">Vite + React + Tailwind</h1>
    </div>
  )
}

export default App
