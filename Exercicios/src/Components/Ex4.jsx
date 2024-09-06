import React from 'react'
import { useState } from 'react'
import'./Media.css'

function Ex4() {
    const[resultado,setResultado] = useState()
    function produtosEVenda(){
        let valorProduto = Number(prompt('Digite valor do Produto:'))
        let valorVenda
        let valorTotal

        if (valorProduto < 20) {
            valorVenda = valorProduto * 45 / 100
            valorTotal = valorVenda + valorProduto
            setResultado(valorTotal)
        }
        if (valorProduto >= 20) {
            valorVenda = valorProduto * 30 / 100
            valorTotal = valorVenda + valorProduto
            setResultado(valorTotal)
        }
    }
  return (
    <div className='Media-Container'>
      <h2>Calcule valor da venda</h2>
      <button onClick={produtosEVenda}>Valor de Venda</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Ex4
