// 7.11 – Enzo e Valentina:
// Valentina, a irmã do Mano Juca tem 1.50m e cresce 2 centímetros por ano, 
// enquanto Enzo, o irmão mais novo, tem 1.40m e cresce 3 centímetros por 
// ano. Crie um programa/script/algoritmo que mostre quando Enzo será mais 
// alto que Valentina.

import React from 'react'
import { useState } from 'react'
import './exercicios.css'

function E711() {
    const[calculodiferençaAlturas, setCalculodiferençaAlturas] = useState()
    function alturas(){
        let alturavalentina = 1.50
        let alturaEnzo = 1.40
        let valentinaCresce = 0.02
        let enzoCresce = 0.03
        let contador = 0

    
        while (alturavalentina >= alturaEnzo) {
             alturavalentina = alturavalentina + valentinaCresce
             alturaEnzo = alturaEnzo + enzoCresce
            
            contador++
        }

        setCalculodiferençaAlturas(contador)
    }
  return (
    <div className='container'>
      <h2>Quando Enzo será mais alto que valentina?</h2>
      <button onClick={alturas}>Aperte</button>
      <div>
        {calculodiferençaAlturas} anos
      </div>
    </div>
  )
}

export default E711
