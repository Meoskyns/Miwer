// scripts/produto.js

// Simulação de banco de dados de produtos
const produtos = {
  1: {
    titulo: "Produto Fofo 1",
    descricao: "Este produto é super útil e ainda por cima fofo!",
    imagem: "assets/produto1.jpg",
    linkAfiliado: "https://siteoficial.com/produto1?ref=miwer"
  },
  2: {
    titulo: "Produto Fofo 2",
    descricao: "Mais um produtinho lindo e funcional!",
    imagem: "assets/produto2.jpg",
    linkAfiliado: "https://siteoficial.com/produto2?ref=miwer"
  }
};

// Função para pegar parâmetro da URL
function getParametro(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

const id = getParametro("id");
const produto = produtos[id];

// Preenche os dados na página
if (produto) {
  document.getElementById("img-produto").src = produto.imagem;
  document.getElementById("titulo-produto").textContent = produto.titulo;
  document.getElementById("descricao-produto").textContent = produto.descricao;
  document.getElementById("link-afiliado").href = produto.linkAfiliado;
} else {
  document.querySelector("main").innerHTML = "<p>Produto não encontrado 😢</p>";
}
