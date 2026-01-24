import { useState } from "react"
function App() {

  const [password, setPassword] = useState("")
  const [copiar, setCopiar] = useState("Copiar");

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12;
    let newpassworld = "";
    for (let i=0; i<length; i++) {
      //gera numero float aleatorio maior que 0 e menor que 1, que tem varias casas, e multiplica pelo
      //comprimento do characters, exemplo: 0,2356 * 90 daria 21.204 o math.floor aredonda pra 21
      //pelo o caracter de posição 21 da variavel
      const position = Math.floor(Math.random() * characters.length)
      newpassworld += characters[position]
    }
    setPassword(newpassworld)
    setCopiar("Copiar")
  }

  function copyToClipBoard(){
    window.navigator.clipboard.writeText(password)
    setCopiar("Copiado")

  }
  return (
    <div className="app">
      <h1>Gerador de senha</h1>
      <button onClick={generate}>Gerar</button>
      <button onClick={copyToClipBoard}>{copiar}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
