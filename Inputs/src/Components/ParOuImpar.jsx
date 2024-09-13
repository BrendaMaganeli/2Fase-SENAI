import React from 'react'
import { useState } from 'react'

function ParOuImpar() {
    const [ParOuImpar,setParOuImpar] = useState(0)
    const[numeroDigitado, setnumeroDigitado] = useState()
    function ParEImpar() {
        if (numeroDigitado % 2 == 0) {
            setParOuImpar("Número é Par")
        }else{
            setParOuImpar("Numero é ímpar")
        }
    }
  return (
    <div className='Container'>
      Digite Um Número:
      <input type="number"
      value={numeroDigitado}
      onChange = { (event) => {setnumeroDigitado(event.target.value)} }  
      />
      <button onClick={ParEImpar}>Aperte</button>
      <p>
        
     {ParOuImpar }
     </p>
    </div>
  )
}

export default ParOuImpar
