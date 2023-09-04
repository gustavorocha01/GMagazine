import { 
    LerLocalStorage,
    desenharProdutoNoCarrinhoSimples,
    } from "./src/utilidades";
    
    function criarPedidoHistorico(pedidoComData) {
        const elementoPedido = `<p class='text-xl text-bold' >${new Date(pedidoComData.dataPedido)
            .toLocaleDateString ('pt-BR', {hour:'2-digit', minute: '2-digit'})}</p>
        <section id='container-pedidos-${pedidoComData.dataPedido}' class='bg-stone-300 p-3 rounded-xl'></section>
        `;
        const main = document.getElementsByTagName("main")[0];
        main.innerHTML += elementoPedido;
    
        for(const idProduto in pedidoComData.pedido) {
            desenharProdutoNoCarrinhoSimples(
                 idProduto,
                `container-pedidos-${pedidoComData.dataPedido}`,
                 pedidoComData.pedido[idProduto]
            );
        }
    }
    
    function renderizarHistoricoPedidos()   {
        const historico = LerLocalStorage('historico');
        for (const pedidoComData of historico) {
            criarPedidoHistorico(pedidoComData);
        }
    }
    
    renderizarHistoricoPedidos();