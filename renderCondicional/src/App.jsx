import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Render from './pages/Render'

function App() {
  const[pagina, setpagina] = useState (<Page2 />)
  return (
    <>
    <nav>
      <button onClick={() => {setpagina(<Home />)}}>Home</button>
      <button onClick={() => {setpagina (<Page2 />)}}>page 2</button>
      <button onClick={() => {setpagina (<Page3 />)}}>page 3</button>
      <button onClick={() => {setpagina (<Render />)}}>Render</button>
    </nav>
     {pagina}
    </>
  )
}

export default App
