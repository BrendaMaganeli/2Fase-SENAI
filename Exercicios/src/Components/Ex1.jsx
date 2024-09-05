import React from 'react'
import { useState } from 'react'
import './Media.css'
function Ex1() {
    const [resultado,setResultado] = useState (0)
    function numeroLer(){

        let lerNumero = Number(prompt("Digite um número: "))
         
        if(lerNumero == 0 ){
            setResultado("Número é nulo")
        }
        else if(lerNumero > 0){
            setResultado("Número é positivo")
           
        }
        else if(lerNumero < 0){
            setResultado("Número é negativo")
        }
    }
  return (
    <div className='Media-Container'>
      <h2>Descobra se o número que você Digitou e nulo, positivo ou Negativo.</h2>
      <button onClick={numeroLer}>Resultado</button><br />
      {resultado}
    </div>
  )
}

export default Ex1
