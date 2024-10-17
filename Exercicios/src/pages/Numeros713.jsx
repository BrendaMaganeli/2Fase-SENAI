import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros713() {
    const[inputNumeroUM, setInputNumeroUM] = useState()
    const[inputNumeroDOIS, setInputNumeroDOIS] = useState()
    const[numerosPares,setNumerosPares] = useState()

    function numerosPares() {
        
        for (i=inputNumeroUM+1;i < inputNumeroDOIS; i++){
    
            if(i%2==0){
                {numerosPares}
            }
        }

    }

  return (
    <div>
        <Navbar />
      <h2>Um algoritmo que lê dois números e mostre todos os números pares contidos entre eles. </h2>
      <label htmlFor="">Primeiro Número</label>
      <input type="text"
        value={inputNumeroUM}
        onChange={(event) => setInputNumeroUM(event.target.value)}
      />
      <label htmlFor="">Segundo Número</label>
      <input type="text"
        value={inputNumeroDOIS}
        onChange={(event) => setInputNumeroDOIS(event.target.value)}
      />
      <button onClick={numerosPares}>
        Números Pares
      </button>
      { MostrarPares &&
              <div>
              <p>Números na faixa 100..200:{contagem}</p>
             </div>
      }
    </div>
  )
}

export default Numeros713

// 7.13 - Faça um algoritmo que leia dois números e mostre todos os números 
// pares contidos entre eles. 
// Exemplo: 
//  - Limite inferior: 3 
//  - Limite superior: 12 
//  - Saída: 4 6 8 10