import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './Components/Cabecalho'
import Links from './Components/Links'
import Corpo from './Components/Corpo'
''
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <Links />
      <Corpo />
    </>
  )
}

export default App
