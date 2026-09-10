import { useState, useEffect } from 'react';
import ItemCardapio from './components/ItemCardápio';
import './App.css';

function App() {
    const [carrinho, setCarrinho] = useState(0);
    const [endereco, setEndereco] = useState('');
    const [cardapio, setModalAberto] = useState(false);
    const [mensagem, setMensagemModal] = useState('');

    useEffect(() => {
        console.log('Cardápio carregado');
    }, []);

    function finalizarCompra() {

        if (carrinho === 0) {
            setMensagemModal("Coloque algo no carrinho!");
            setModalAberto(true);
            return;
        }

        if (endereco.trim() === '') {
            setMensagemModal('Por favor, preencha o endereço de entrega!');
            setModalAberto(true);
            return;
        }
        setMensagemModal('Pedido realizado com sucesso!');
        setModalAberto(true);
        setCarrinho(0);
        setEndereco('');
    }
    return (
        <div className="container">
            {cardapio && (
                <div className="modal-overlay">
                    <div className="modal-card">
                        <p>{mensagem}</p>
                        <button className="btn-modal" onClick={() => setModalAberto(false)}>
                            Ok
                        </button>
                    </div>
                </div>
            )}
            <h1
                style={{
                    textAlign: 'center',
                    color: '#333',
                    gap: '16px',
                }}>
                {' '}
                cardapio de Lanches
            </h1>
            <div className="carrinho-box">
                <p>
                    {' '}
                    Itens no Carrinho: <strong>{carrinho}</strong>
                </p>
                <ItemCardapio
                    nome="X-Burger"
                    descricao="Hambúrguer com queijo e salada"
                    preco={20}
                    onAdd={() => setCarrinho(carrinho + 1)}
                />
            </div>

            <h2> Finalizar Pedido</h2>

            <input
                className="input-endereco"
                type="text"
                placeholder=" Rua e Número da Entrega"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}></input>
            <button className="btn-finalizar" onClick={finalizarCompra}>
                Finalizar Pedido
            </button>
        </div>
    );
}

export default App;