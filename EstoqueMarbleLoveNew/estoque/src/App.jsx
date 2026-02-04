import { useState } from 'react'
import Indicadores from './components/indicadores/Indicadores'
import "../src/globals/globals.css"
import Produtopesquisa from './components/produtoEpesquisa/Produtopesquisa'
import Tabela from './components/tabela/Tabela'
function App() {

  return (
    <>
      <div className="indicadores">
        <Indicadores
          titulo={"Total De Produtos"}
          valor={100}
          icon="bx  bx-garage"
        />
        <Indicadores
          titulo={"Total Gasto"}
          valor={1000}
          icon="bx  bx-print-dollar"
        />
        <Indicadores
          titulo={"Valor a Receber"}
          valor={1000}
          icon="bx  bx-print-dollar"
        />
      </div>
      <Produtopesquisa />
      <Tabela />
    </>
  )
}

export default App
