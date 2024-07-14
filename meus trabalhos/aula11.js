// import * from ("./db/estado.json")
async function carregarDados() {
  const div = document.getElementById('estados do brasil')

  const loading = document.getElementsByClassName("loading")
  const response = await fetch("./db/data.json")
  const data = await response.json()
  const estados = data.estados
  console.log(response)
  console.log(data.estados)
  estados.map((estados) =>
    console.log(estado.nome)
    let.h3 = document.createElement("h3")
   < h3.textContent = estado.nome
    let .p = document.createElement("p")
    p.textContent = estado.descrição
    let.clima = document.createElement("p")
    clima.textContent = estado.clima
    div.appendChild(h3)
    div.appendChild(p)
//data.map()
    let.documenth1 = document.createElement("h1")
   // h1.textConent=estado.nome
div.appendChild(h3)
{loading.style.display = "none"

}

//h1.innertext=

carregarDados();