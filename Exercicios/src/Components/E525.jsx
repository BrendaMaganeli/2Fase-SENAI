// 5.25 - O porco: Faça um programa que leia o valor de um produto X e leia 
// a quantidade de moedas de um cofrinho que contenha: 
//  N moedas de 1 real; 
//  N moedas de 50 centavos; 
//  N moedas de 25 centavos; 
//  N moedas de 10 centavos; 
//  N moedas de 5 centavos; 
// O programa deverá verificar se o total de reais que contem no cofrinho é 
// o bastante para compra o produto X. 
// <Muleta da compreensão: Tem que ler o preço da coisa; tem que ler a 
// quantidade de cada moeda que tem no porco; calcular quantos pila tem no 
// porco; ver se cabe no “orçamento”>

import React from 'react'
import { useState } from 'react'
import './Media.css'

function E525() {
    const[produto, setproduto] = useState()
    const[valorFinal, setValorFinal] = useState()
    const[mensagem,setMensagem] = useState()
    
    function valorPorquinho() {

        let moedasUmReal = Number(prompt("Número de moedas de um real:"))
        let moedasCinquentaCentavos = Number(prompt("Número de moedas de cinquenta centavos:"))
        let moedasVinteCincoCentavos = Number(prompt("Número de moedas de vinte cinco centavos:"))
        let moedasDezCentavos = Number(prompt("Número de moedas de dez centavos:"))
        let moedasCincoCentavos = Number(prompt("Número de moedas de cinco centavos:"))


        let calculoMoeda1 = moedasUmReal * 1
        let calculoMoeda50 = moedasCinquentaCentavos * 0.50
        let calculoMoeda25 = moedasVinteCincoCentavos * 0.25
        let calculoMoeda10 = moedasDezCentavos * 0.10
        let calculomoeda5 = moedasCincoCentavos * 0.05

        let CalculoTotal = calculoMoeda1 + calculoMoeda50 + calculoMoeda25 + calculoMoeda10 + calculomoeda5

        if (CalculoTotal > produto) {
            setValorFinal("R$"+CalculoTotal)
            setMensagem(" Valor é o suficiente para comprar produto")
        }else{
            setValorFinal("R$"+CalculoTotal)
            setMensagem(" Valor não é o suficiente para comprar produto")
        }

    }

  return (
    <div className='Media-Container'>
      <h2>Valor do cofrinho</h2>
      <input type="text" 
      value={produto}
      onChange={(event) => setproduto(event.target.value)}
      />
      <div>
      <button onClick={valorPorquinho}>Calcular</button>
      </div>
      <div>
      {valorFinal}
      </div>
        {mensagem}
    </div>
  )
}

export default E525
