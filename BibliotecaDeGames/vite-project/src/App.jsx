import { useState } from 'react'

function App() {

const [games, setGames] = useState([])
const [title, setTitle] = useState("")
const [cover, setCover] = useState("")  

const addGames = ({title, cover}) => {
  const id = Math.floor(Math.random() * 100000)
  console.log({id})
  const game = {id, title, cover}
  setGames(state => [...state, game])
}

const removeGame = (id) => {
setGames(state => state.filter(game => game.id !== id))
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
          <label htmlFor="title">Título:</label>
          <input 
          type="text" 
          id="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input 
          type="text" 
          id="cover" 
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <button>Adicionar</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
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
