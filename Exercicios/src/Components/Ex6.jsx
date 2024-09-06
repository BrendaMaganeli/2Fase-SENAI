import React from 'react'
import { useState } from 'react'
import './Media.css'
function Ex6() {
    const [resultado,setResultado] = useState ()
    function Media() {
        let notaUm = Number(prompt("Digite a primeira nota:"))
        let notaDois = Number(prompt("Digite a segunda nota:"))
        let mediaFinal = (notaUm + notaDois) / 2

        if(mediaFinal > 9 && mediaFinal <=10){

            setResultado("Média:" + mediaFinal + "       Notas:" +notaUm +" e "+ notaDois+ "       Conceito: A")
        }
        else if (mediaFinal >7.5 && mediaFinal <=9) {
            setResultado("Média"+mediaFinal+"  Notas:"+notaUm +"e"+ notaDois+"   Conceito: B")
        }
        else if (mediaFinal > 6 && mediaFinal <= 7.5) {
            setResultado("Média"+mediaFinal+"   Notas:"+notaUm +"e"+ notaDois+"  Conceito: C")
        }
        else if (mediaFinal > 4 && mediaFinal <= 6) {
            setResultado("Média"+mediaFinal+"   Notas:"+notaUm +"e"+ notaDois+"  Conceito: D")
        }
        else if (mediaFinal > 0 && mediaFinal <= 4) {
            setResultado("Média"+mediaFinal+"   Notas:"+notaUm +"e"+ notaDois+"   Conceito: E")
        }
    }
  return (
    <div className='Media-Container'>
      <h2>média das notas do semestre</h2>
      <button onClick={Media}>Calcular média</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Ex6
