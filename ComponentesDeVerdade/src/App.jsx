import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './Components/Cabecalho'
import Links from './Components/Links'
''
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <Links />
    </>
  )
}

export default App
