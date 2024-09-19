import React from 'react'
import { useState } from 'react'
import './exercicios.css'
function E57() {
    const[diaria, setDiaria] = useState()
    const[valTotal, setValTotal] = useState()
    const[valorSemdesconto, setValorSemdesconto] = useState()

    function ValorFinal() {
        if (diaria <= 5) {
          let valorDiarias = diaria*100
           let valorTotal = valorDiarias + 150
           let desconto1 = 10/100 * valorDiarias
           let desconto2 = 15/100 * valorDiarias
           let valor = valorTotal - (desconto1 + desconto2)
           setValorSemdesconto(valorTotal)
           setValTotal(valor)
        }else if (diaria > 5 && diaria <=10) {
          let valorDiarias = diaria*90
           let valorTotal = valorDiarias + 150
           let desconto1 = 10/100 * valorDiarias
           let desconto2 = 15/100 * valorDiarias
           let valor = valorTotal - (desconto1 + desconto2)
           setValorSemdesconto(valorTotal)
           setValTotal(valor)
        }else if (diaria >= 11) {
          let valorDiarias = diaria*80
           let valorTotal = valorDiarias + 150
           let desconto1 = 10/100 * valorDiarias
           let desconto2 = 15/100 * valorDiarias
           let valor = valorTotal - (desconto1 + desconto2)
           setValorSemdesconto(valorTotal)
           setValTotal(valor)
        }

    }
  return (
    <div className='container'>
      <h2>Diárias</h2>
      <p>Digite o número de diárias que você ficou hospedado no albergue:</p>
      Diárias<input type="text" 
      value={diaria}
      onChange={(event) => setDiaria(event.target.value)}
      />
      <div>
        <button onClick={ValorFinal}>Valor final da diária</button>
      </div>
        <div>
        valor sem desconto:{valorSemdesconto}
        </div>
        valor total:{valTotal}
    </div>
  )
}

export default E57
