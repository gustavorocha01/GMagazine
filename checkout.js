import { desenharProdutoNoCarrinhoSimples,
    LerLocalStorage, 
    apagarDoLocalStorage,
    salvarLocalStorage,           
   } from "./src/utilidades";

function desenharProdutosCheckout(){
const idsProdutoCarrinhoComQuantidade = LerLocalStorage('carrinho') ?? {};
for(const idProduto in idsProdutoCarrinhoComQuantidade){
   desenharProdutoNoCarrinhoSimples(idProduto, "container-produtos-checkout", 
   idsProdutoCarrinhoComQuantidade[idProduto]
   );
}
}

function finalizarCompra(evento){
evento.preventDefault();
const idsProdutoCarrinhoComQuantidade = LerLocalStorage('carrinho') ?? {};
if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
   return;
}

const dataAtual = new Date();
const pedidoFeito = {
   dataPedido: dataAtual,
   pedido: idsProdutoCarrinhoComQuantidade,    
};
const historicoDePedidos = LerLocalStorage('historico') ?? [];
const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

salvarLocalStorage('historico', historicoDePedidosAtualizado);
apagarDoLocalStorage('carrinho');

window.location.href = "/pedidos.html";
}

desenharProdutosCheckout();

document.addEventListener('submit', (evt) => finalizarCompra(evt));