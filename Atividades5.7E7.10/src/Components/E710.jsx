// 7.10 - Foi feita um a pesquisa entre os habitantes de um a região e 
// coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
// um programa que leia os dados de 10 pessoas e informe: 
//  a maior e a menor altura encontrada; 
//  a média de altura das mulheres; 
//  a média de altura da população; 
//  o percentual de homens na população.

import React from 'react'
import { useState } from 'react'
import './exercicios.css'

function E710() {
    const [alturaMaior, setAlturaMaior] = useState()
    const [alturaMenor, setAlturaMenor] = useState()
    const [mediaMulher, setMediaMulher] = useState()
    const [homensPercentual, setHomensPercentual] = useState()
    const [populacaoMedia, setPopulacaoMedia] = useState()

    function analise(){

        let contador = 0
        let maiorAltura = 0
        let menorAltura = 100
        let alturaMulheres = 0
        let contadorMulher = 0 
        let contadorHomem = 0
        let alturapopulação = 0

        while (contador < 10) {
            let alturaDigitada = Number(prompt("Digite sua altura:"))
            let generoDigitado = Number(prompt("Digite seu gênero(0=masc , 1=fem):"))

            contador++
            alturapopulação = alturapopulação + alturaDigitada

            if(maiorAltura < alturaDigitada){
                maiorAltura = alturaDigitada
                setAlturaMaior(maiorAltura)
                console.log(maiorAltura)
            }else if(menorAltura > alturaDigitada){
                menorAltura = alturaDigitada
                setAlturaMenor(menorAltura)
                console.log(menorAltura)
            }

            if (generoDigitado == 1) {
                alturaMulheres = alturaMulheres + alturaDigitada
                contadorMulher++
            }

            if (generoDigitado == 0) {
                contadorHomem++
            }
        }
        let mediaMulher = (alturaMulheres / contadorMulher).toFixed(2)
          setMediaMulher(mediaMulher)

        let percentualHomens = (contadorHomem * 100) / 10
          setHomensPercentual(percentualHomens)

        let mediaPopulacao = (alturapopulação / contador).toFixed(2)
          setPopulacaoMedia(mediaPopulacao)

    }
  return (
    <div className='container'>
      <h2>Pesquisa Habitantes</h2>
      <button onClick={analise}>Analise</button>
      <div>
      Maior altura: {alturaMaior}
      </div>
      <div>
      Menor altura: {alturaMenor}
      </div>
      <div>
      Média de altura das Mulheres: {mediaMulher}
      </div>
      <div>
      Percentual de Homens na população: {homensPercentual}
      </div>
      <div>
      A média de altura da população: {populacaoMedia}
      </div>

    </div>
  )
}

export default E710
