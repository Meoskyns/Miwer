const produtos = [
  {
    id: 1,
    nome: "Espelho com Luz LED",
    descricao: "Ideal para maquiagem e decoração.",
    imagem: "assets/produto1.jpg",
    categoria: "beleza",
  },
  {
    id: 2,
    nome: "Luminária de Lua",
    descricao: "Iluminação suave para qualquer ambiente.",
    imagem: "assets/produto2.jpg",
    categoria: "casa",
  },
  {
    id: 3,
    nome: "Caixinha Bluetooth Rosa",
    descricao: "Leve sua música com estilo!",
    imagem: "assets/produto3.jpg",
    categoria: "tecnologia",
  },
  {
    id: 4,
    nome: "Bolsa Pastel Love",
    descricao: "Perfeita para looks delicados.",
    imagem: "assets/produto4.jpg",
    categoria: "moda",
  }
];

// Função para mostrar os produtos
function mostrarProdutos(lista) {
  const container = document.getElementById("lista-produtos");
  container.innerHTML = "";

  lista.forEach(prod => {
    const produtoEl = document.createElement("div");
    produtoEl.classList.add("produto");

    produtoEl.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}">
      <h2>${prod.nome}</h2>
      <p>${prod.descricao}</p>
      <a class="botao" href="produto.html?id=${prod.id}">Ver mais</a>
    `;

    container.appendChild(produtoEl);
  });
}

// Função para filtrar por categoria
function filtrarCategoria(categoria) {
  if (categoria === "tudo") {
    mostrarProdutos(produtos);
  } else {
    const filtrados = produtos.filter(p => p.categoria === categoria);
    mostrarProdutos(filtrados);
  }
}

// Mostrar todos por padrão
mostrarProdutos(produtos);
