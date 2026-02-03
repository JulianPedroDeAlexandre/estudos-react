import { useState } from 'react'

function App() {

const [games, setGames] = useState(() => {
  const storageGames = localStorage.getItem("obc-game-lib")
  if(!storageGames) return []
  return JSON.parse(storageGames)
})

const [title, setTitle] = useState("")
const [cover, setCover] = useState("")  

const addGames = ({title, cover}) => {
  const id = Math.floor(Math.random() * 100000)
  console.log({id})
  const game = {id, title, cover}

  setGames(state => {
    const newState = [...state, game]
    localStorage.setItem("obc-game-lib", JSON.stringify(newState))
    return newState
  })
}

const removeGame = (id) => {
setGames(state => {
  const newState = state.filter(game => game.id !== id)
  localStorage.setItem("obc-game-lib", JSON.stringify(newState))
  return newState
})
}

const handleSubmit = (e) =>{
  e.preventDefault();
  addGames({title, cover})
  setTitle("")
  setCover("")
}

  return (
  <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
           <label htmlFor="title">Título</label>
          <select 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          >
          <option value="">Selecione...</option>  
          <option value="Zelda Ocarina Of Time">Zelda Ocarina Of Time</option>
          <option value="Xenoblade Cronicles">Xenoblade Chronicles</option>
          <option value="Final Fantasy XII">Final Fantasy XII</option>
          <option value="Resident Evil 4">Resident Evil 4</option>
          <option value="Expedition 33">Expedition 33</option>
          </select>
          {/* <label htmlFor="title">Título:</label>
          <input 
          type="text" 
          id="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          /> */}
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <select
          id="cover"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          >
          <option value="">Selecione...</option>  
          <option value="https://upload.wikimedia.org/wikipedia/pt/1/17/The_Legend_of_Zelda_Ocarina_of_Time_capa.png">Zelda Ocarina Of Time</option>
          <option value="https://upload.wikimedia.org/wikipedia/pt/9/96/Xenoblade_Chronicles_capa.png">Xenoblade Chronicles</option>
          <option value="https://upload.wikimedia.org/wikipedia/pt/2/27/Final_Fantasy_XII_Box_Art.png">Final Fantasy XII</option>
          <option value="https://upload.wikimedia.org/wikipedia/en/d/d9/Resi4-gc-cover.jpg">Resident Evil 4</option>
          <option value="https://upload.wikimedia.org/wikipedia/pt/d/d7/Clair_Obscur_Expedition_33.png">Expedition 33</option>
          </select>
          {/* <label htmlFor="cover">Capa:</label>
          <input 
          type="text" 
          id="cover" 
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          /> */}
        </div>
        <button>Adicionar</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id} className='div-cover'>
            <img src={game.cover} alt="" />
            <div>
              <h2>Id: {game.id}</h2>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame (game.id)}>Remover</button>
            </div>
          </div>
        ))}

      </div>
      </div>
  )
}

export default App
