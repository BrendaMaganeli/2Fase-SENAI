import React from 'react'
import { useState } from 'react'
import './exercicios.css'

function Atividade1() {
    const [diaSemana, setDiaSemana] = useState()
    const [mensagem,setMensagem] = useState()

    function diasSemanas() {

        switch (true) {
            case diaSemana == 1:
                setMensagem("Domingo")
                break;
            case diaSemana == 2:
                setMensagem("Segunda")
                break;
            case diaSemana == 3:
                setMensagem("Terça")
                break;
            case diaSemana == 4:
                setMensagem("Quarta")
                break;
            case diaSemana == 5:
                setMensagem("Quinta")
                break;
            case diaSemana == 6:
                setMensagem("Sexta")
                break;
            case diaSemana == 7:
                setMensagem("Sábado")
                break;
            default:
                setMensagem("Digite um número de 1-7")
                break;
        }
        
    }
  return (
    <div className='Container'>
        <h3>Escreva um número correspondente aos dias da semana(1-7)</h3>
      <div>
      Digite um número:
      </div>
      <input type="number"
      value={diaSemana} 
      onChange = {(event) => {setDiaSemana(event.target.value)} }
      />

      <button onClick={diasSemanas}>Dia da Semana</button>
      <p>
        <strong>{mensagem}</strong>
      </p>
    </div>
  )
}

export default Atividade1
