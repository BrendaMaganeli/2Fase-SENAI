
import { useState } from 'react'
import'./Media.css'
function Ex2() {
    const[resultado,setResultado] = useState(0)

    function NumeroAnalisado(){
        let numeroDigitado = Number(prompt('Digite um número:'))

        if( numeroDigitado %2 == 0 && numeroDigitado > 0){
            setResultado('Número digitado é positivo e par')
        }
        else{
            setResultado('Número digitado não é positivo e par ao mesmo tempo')
        }
    }
  return (
    <div className='Media-Container'>
      <h2>Descobra se o número que você Digitou é positivo e par.</h2>
      <button onClick={NumeroAnalisado}>Resultado</button>
      <div>
      {resultado}
      </div>
    </div>
  )
}

export default Ex2
