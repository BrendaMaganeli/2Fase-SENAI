import React from 'react'
import { useState } from 'react'
import MensagemSuperSecreta from './MensagemSuperSecreta'

function MensagemSecreta() {
    const[Digitar,setDigitar] = useState()
    const[mensagemSecreta, setMensagemSecreta] = useState(false)

    function mensagem(){
        if (Digitar == "Abracadabra" || Digitar == "abracadabra" ) {
            setMensagemSecreta(true)
        }else{
            setMensagemSecreta(false)
        }
    }


  return (
    <div className='Container'>
        <h3>Mensagem Secreta</h3>
      Digite uma senha:
      <input type="text" 
      value={Digitar}
      onChange = {(event) => {setDigitar(event.target.value)} }
      />
      <button onClick={mensagem}>Mensagem</button>
      { mensagemSecreta && <MensagemSuperSecreta />}

    </div>
  )
}

export default MensagemSecreta
