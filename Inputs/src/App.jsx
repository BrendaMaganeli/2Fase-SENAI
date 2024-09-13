import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Exercicios.css'
import Maior from './Components/Maior'
import Menor from './Components/Menor'
import Atividade1 from './Components/Atividade1'
import MensagemSecreta from './Components/MensagemSecreta'
import ParOuImpar from './Components/ParOuImpar'

function App() {
  const [inputIdade,SetInputIdade] = useState(0)
  const [maior,setMaior] = useState(false)
  const [menor,setMenor] = useState(false)

  function processarIdade(){
    if (inputIdade >= 18) {
      setMaior(true)
      setMenor(false)
    }else{
      setMenor(true)
      setMaior(false)
    }
  }
  return (
    < >
    <div className='box-shadow: 60px -16px teal;'>

    <h2>Inputs</h2>

    Idade: 
    <input type="number" className='Formularios'
      value = {inputIdade}
      onChange = { (event) => {SetInputIdade(event.target.value)} }   
      />


      <button onClick={processarIdade}>Processar Idade</button>
      {maior && <Maior />}
      {menor && <Menor />}

      <Atividade1 />
      <MensagemSecreta />
      <ParOuImpar />
      </div>
    </>

  )
}

export default App
