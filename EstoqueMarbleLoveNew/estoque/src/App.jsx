import { useState, useEffect } from 'react'
import Indicadores from './components/indicadores/Indicadores'
import "../src/globals/globals.css"
import Produtopesquisa from './components/produtoEpesquisa/Produtopesquisa'
import Tabela from './components/tabela/Tabela'
import Modal from './components/modal/Modal'
import imagemteste from "../src/assets/41bNCkmY8-L.jpg"


function App() {
  const [modalAberto, setModalAberto] = useState(false)
  const [file, setFile] = useState(null);
  const [cor, setCor] = useState("Inox");
  const [nome, setNome] = useState("Torneira apl");
  const [codigo, setCodigo] = useState("fd254f");
  const [estoque, setEstoque] = useState(5);
  const [compra, setCompra] = useState(250);
  const [venda, setVenda] = useState(400);
  const [produtos, setProdutos] = useState([])
  const [defaultImage] = useState(imagemteste)
  const [valorInOut, setValorInOut] = useState (1)
  const [valoresEntrada, setValoresEntrada] = useState({});
  const [produtoEditando, setProdutoEditando] = useState(null);
  const [pesquisa, setPesquisa] = useState ("");

  
  const handleFile = (e) => setFile(e.target.files[0]);
  const handleCor = (e) => setCor(e.target.value);
  const handleNome = (e) => setNome(e.target.value);
  const handleCodigo = (e) => setCodigo(e.target.value);
  const handleEstoque = (e) => setEstoque(e.target.value);
  const handleCompra = (e) => setCompra(e.target.value);
  const handleVenda = (e) => setVenda(e.target.value);
  // const handleValorEntrada = (e) => setValorInOut(e.target.value);

  useEffect(() =>{
    localStorage.setItem("produtos", JSON.stringify(produtos));
}, [produtos]);

useEffect(() => {
  const produtosSalvos = localStorage.getItem("produtos");
  if(produtosSalvos){
    setProdutos(JSON.parse(produtosSalvos))
  }
}, []);

  const envia = () => {
    const novoProduto = {
      file,
      cor,
      nome,
      codigo,
      estoque,
      compra,
      venda,
      valorEntrada:1,
    };

    if(produtoEditando != null){
      const novosProdutos = [...produtos];
      novosProdutos[produtoEditando] = novoProduto;
      setProdutos(novosProdutos);
      setProdutoEditando(null);
    }else{
    setProdutos([...produtos, novoProduto])
     
    }

    fecha();
  };

  const abremodal = () => {
    setModalAberto(true)
  }


  const fecha = () => {
    setModalAberto(false)
  }

  const handleValorEntrada = (index, value) => {
    const novosProdutos = [...produtos];
    novosProdutos[index].valorEntrada = Number(value);
    setProdutos(novosProdutos);
  };

  const addValorEntrada = (index) =>{
    const novosProdutos = [...produtos];
    const produto = novosProdutos[index]
    produto.estoque = Number(produto.estoque) + Number(produto.valorEntrada)
    // novosProdutos[index].estoque = Number(novosProdutos[index].estoque) + Number(novosProdutos[index].valorEntrada);
    setProdutos(novosProdutos);

  }

  const removeValorEntrada = (index) =>{
    const novosProdutos = [...produtos];
    const produto = novosProdutos[index];
    const novoEstoque = Number(produto.estoque) - Number(produto.valorEntrada);
    produto.estoque = novoEstoque < 0 ? 0 : novoEstoque;
    setProdutos(novosProdutos)

  }

  const removeItemEstoque = (index) => {
    setProdutos((produtos) => produtos.filter((item, i) => i !== index));

  };

 const editarItemEstoque = (index) => {
  const produto = produtos[index];
  setProdutoEditando(index); 
  setFile(produto.file);
  setCor(produto.cor);
  setNome(produto.nome);
  setCodigo(produto.codigo);
  setEstoque(produto.estoque);
  setCompra(produto.compra);
  setVenda(produto.venda);
  setModalAberto(true);
};

const produtosFiltrados = produtos.filter((p) =>
  p.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
  p.codigo.toLowerCase().includes(pesquisa.toLowerCase()) ||
  p.cor.toLowerCase().includes(pesquisa.toLowerCase())
);
 

const totalEstoque = produtos.reduce((acc, p) => acc + Number(p.estoque), 0);
const totalGasto = produtos.reduce((acc, p) => acc + Number(p.compra) * Number(p.estoque), 0);
const totalReceber = produtos.reduce((acc, p) => acc + (Number(p.venda) * Number(p.estoque) - Number(p.compra) * Number(p.estoque)), 0);


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
          titulo={"Lucro"}
          valor={totalReceber}
          icon="bx  bx-print-dollar"
        />
      </div>
      <Produtopesquisa
        abremodal={abremodal}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
      />
      <Tabela
        // produtos={produtos}
        defaultImage={defaultImage}
        valorEntrada={valorInOut}
        handleValorEntrada={handleValorEntrada}
        addValorEntrada={addValorEntrada}
        removeValorEntrada={removeValorEntrada}
        removeItemEstoque={removeItemEstoque}
        editarItemEstoque={editarItemEstoque}
        produtos={produtosFiltrados}
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

