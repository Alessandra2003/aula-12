const div_bandeiras = document.getElementById("bandeiras");
const div_texto = document.getElementById("texto");


function carregarTexto(estado){
    div_texto.innerHTML = '';
    let nome = document.createElement('h3');
    nome.textContent = estado.nome;
    div_texto.appendChild(nome);
    //alert(estado.nome);

    let descricao = document.createElement('p');
    descricao.textContent = estado.descricao
    div_texto.appendChild(descricao)
}

async function carregarDados() {
  const response = await fetch("https://mauriciodiias.github.io/estadosDoBrasil/data.json");
  const data = await response.json();
  const estados = data.estados;
  console.log(response)

  estados.map((estado) => {
    let h3 = document.createElement("h3");
    h3.textContent = estado.nome;

    let descricao = document.createElement("p");
    descricao.textContent = estado.descricao;
    

    let bandeira = document.createElement("img");
    bandeira.setAttribute("src", estado.bandeira_url);
    bandeira.setAttribute("width", "200px");
    bandeira.addEventListener("click", () => carregarTexto(estado));
    

    div_bandeiras.appendChild(h3);
    div_bandeiras.appendChild(bandeira);
  });
}

carregarDados();
