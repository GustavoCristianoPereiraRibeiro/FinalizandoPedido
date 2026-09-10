export default function ItemCardapio({ nome, descricao, preco, onAdd }) {
    return (
        <div style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h3>
                {nome} - R$ {preco.toFixed(2)}
            </h3>
            <p>{descricao}</p>
            <button onClick={onAdd}>Adicionar ao Carrinho</button>
        </div>
    );
}