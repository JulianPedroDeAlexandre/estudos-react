import { useState } from 'react'
import Indicadores from './components/indicadores/Indicadores'
import "../src/globals/globals.css"
import Produtopesquisa from './components/produtoEpesquisa/Produtopesquisa'
import Tabela from './components/tabela/Tabela'
import Modal from './components/modal/Modal'
import imagemteste from "../src/assets/41bNCkmY8-L.jpg"

function App() {

  const [modalAberto, setModalAberto] = useState(false)
  const [file, setFile] = useState(null);
  const [cor, setCor] = useState("");
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [estoque, setEstoque] = useState(5);
  const [compra, setCompra] = useState(250);
  const [venda, setVenda] = useState(400);
  const [produtos, setProdutos] = useState([])
  const [defaultImage] = useState(imagemteste)
  
  const handleFile = (e) => setFile(e.target.files[0]);
  const handleCor = (e) => setCor(e.target.value);
  const handleNome = (e) => setNome(e.target.value);
  const handleCodigo = (e) => setCodigo(e.target.value);
  const handleEstoque = (e) => setEstoque(e.target.value);
  const handleCompra = (e) => setCompra(e.target.value);
  const handleVenda = (e) => setVenda(e.target.value);

  const envia = () => {
    const novoProduto = {
      file,
      cor,
      nome,
      codigo,
      estoque,
      compra,
      venda,
    };

    setProdutos([...produtos, novoProduto])
    fecha();
  }

  const abremodal = () => {
    setModalAberto(true)
  }


  const fecha = () => {
    setModalAberto(false)
  }

  const totalEstoque = produtos.reduce((est, p) => est + Number(p.estoque), 0)
  const totalGasto = produtos.reduce((gast, p) => gast + Number(p.compra * estoque), 0)
  const totalReceber = produtos.reduce((rec, p) => rec + Number(p.venda * estoque), 0)

  return (
    <>
      <div className="indicadores">
        <Indicadores
          titulo={"Total De Produtos"}
          valor={totalEstoque}
          icon="bx  bx-garage"
        />
        <Indicadores
          titulo={"Total Gasto"}
          valor={totalGasto}
          icon="bx  bx-print-dollar"
        />
        <Indicadores
          titulo={"Valor a Receber"}
          valor={totalReceber}
          icon="bx  bx-print-dollar"
        />
      </div>
      <Produtopesquisa
        abremodal={abremodal}
      />
      <Tabela
        produtos={produtos}
        defaultImage={defaultImage}
      />
      <div className="modal">
        {modalAberto && <Modal onClose={fecha}
          fecha={fecha}
          envia={envia}
          file={file}
          handleFile={handleFile}
          cor={cor}
          handleCor={handleCor}
          nome={nome}
          handleNome={handleNome}
          codigo={codigo}
          handleCodigo={handleCodigo}
          estoque={estoque}
          handleEstoque={handleEstoque}
          compra={compra}
          handleCompra={handleCompra}
          venda={venda}
          handleVenda={handleVenda}
        />}

      </div>
    </>
  )
}

export default App

