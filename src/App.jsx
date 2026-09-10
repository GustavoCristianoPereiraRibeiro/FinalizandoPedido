import { useState } from 'react'
import './App.css'

function App() {
  const [itensCarrinho, setItensCarrinho] = useState(0)
  const [endereco, setEndereco] = useState('')
  const [modalAberto, setModalAberto] = useState(false)
  const [mensagemModal, setMensagemModal] = useState('')

  function finalizarCompra() {
    if (itensCarrinho === 0) {
      setMensagemModal('Coloque algo no carrinho!')
      setModalAberto(true)
      return
    }

    if (endereco.trim() === '') {
      setMensagemModal('Informe o endereço de entrega!')
      setModalAberto(true)
      return
    }

    setMensagemModal('Pedido finalizado com sucesso!')
    setModalAberto(true)
    setItensCarrinho(0)
    setEndereco('')
  }

  return (
    <main className="app">
      {modalAberto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div>
            <p>{mensagemModal}</p>
            <button onClick={() => setModalAberto(false)}>OK</button>
          </div>
        </div>
      )}

      <h1>Finalizar pedido</h1>
      <p>Carrinho: {itensCarrinho} itens</p>

      <section>
        <button onClick={() => setItensCarrinho(itensCarrinho + 1)}>
          + Adicionar lanche
        </button>
      </section>

      <section className="checkout">
        <h2>Endereço de entrega</h2>
        <input
          type="text"
          placeholder="Rua e Número da Entrega"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <button onClick={finalizarCompra}>Finalizar Pedido</button>
      </section>
    </main>
  )
}

export default App
