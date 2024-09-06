import React from 'react'
import { useState } from 'react'
import './Media.css'
function Ex3() {
    const [resultado,setResultado] = useState(0)

    function GarcomCaraFeia(){
      let salarioFuncionario = Number(prompt("Insira o valor do seu sálario:"))
      let valorEmprestimo = Number(prompt("Insira o valor do seu empréstimo:"))
      let numeroPrestacoes = Number(prompt("Digite o Número das prestações:"))
      let calculoemprestimo = valorEmprestimo / numeroPrestacoes
      let porcentagemEmprestimo = calculoemprestimo * 100 / salarioFuncionario

      if(valorEmprestimo <= 0 || salarioFuncionario <= 0 || numeroPrestacoes <= 0){
        setResultado("Número informado não pode ser zero ou negativo, tente novamente.")
      }
      else if(porcentagemEmprestimo <= 30){
        setResultado('Empréstimo concedido!')
      }
      else if(porcentagemEmprestimo > 30){
        setResultado('Empréstimo recusado.')
      }
    }
   return (
    <div className='Media-Container'>
      <h2>informamos se o empréstimo pode ser concedido.</h2>
      <button onClick={GarcomCaraFeia}>Analise</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Ex3
