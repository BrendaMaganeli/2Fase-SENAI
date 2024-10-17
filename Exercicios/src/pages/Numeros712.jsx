import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros712() {
    const[inputNumero,setInputNumero] = useState("")
    const [contagem,SetContagem] = useState(0)
    const[mostrarResultado,setMostrarResultado] = useState(false)

    function lerNumero() {
        if (inputNumero > 100 && inputNumero < 200) {
            SetContagem(contagem + 1)
        }
    }
    function resultado() {
        setMostrarResultado(true)
    }
  return (
    <div>
        <Navbar />
      <h1>Exercicios 7.12</h1>
      <input type="text"
        value={inputNumero}
        onChange={(event) => setInputNumero(event.target.value)}
      />
      <button onClick={lerNumero}>Ler</button>
      <button onClick={resultado}>Resultado</button>

      { mostrarResultado &&
              <div>
              <p>Números na faixa 100..200:{contagem}</p>
             </div>
      }
    </div>
  )
}

export default Numeros712
