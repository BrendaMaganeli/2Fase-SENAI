import { useState } from "react"
import './Media.css'

function Media() {
    const [resultado,setResultado] = useState()
    function calcularMedia(){
        let notaUm = Number (prompt("Digite o 1o número: "))
        let notaDois = Number (prompt("Digite o 2o número: "))
        let notatres = Number (prompt("Digite o 3o número: "))
        let media = (notaUm + notaDois + notatres)/3
        setResultado(media)
    }
  return  (
    <div className="Media-Container">
      <h2>Exercício para calcular média de 3 números</h2>
      <button onClick={calcularMedia}>Calcular</button>
      <div>

      Média:{resultado}

      </div>
    </div>
  )
}

export default Media
