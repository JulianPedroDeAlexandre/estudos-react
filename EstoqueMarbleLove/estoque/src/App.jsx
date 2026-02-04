import { useState } from 'react'
import Indicadores from './components/indicadores/Indicadores'
import "../src/globals/globals.css"
import Produtopesquisa from './components/produtoEpesquisa/Produtopesquisa'
import Tabela from './components/tabela/Tabela'
function App() {

  return (
    <>
      <Indicadores/>
      <Produtopesquisa/>
      <Tabela/>
    </>
  )
}

export default App
