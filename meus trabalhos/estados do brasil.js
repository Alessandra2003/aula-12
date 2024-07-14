const div = document.getElementById("Estados do Brasil")

async function carregarDados() {
    const response = await fetch("./db/data.json")
    const data = await response.json()
    const estados = data.estados
}

estados.map((estado))
let h3 = document.createElement("h3")
h3.textContent = estado.nome

let descrição = document.createElement("p")
descrição.textContent = estado.descrição
let clima = document.createElement("p")
clima.textContent = estado.descrição
let Habitantes = document.createElement("p")
Habitantes.innerHTML = Habitantes
estado.habitantes
let area = document.createElement("p")
area.innerHTML=<strong>Área:</strong>${estado.area_km2}area_km2
let bandeira = document.createElement("img")
bandeira.setAttribute(src, estado.bandeira_url)
bandeira.setAttribute("width", "100px")
div.appendChild(h3)
div.appendChild(bandeira)
div.appendChild(descrição)
div.appendChild(clima)
div.append(habitantes)
div.appendChild(area)
div.appendChild(linha)


carregarDados()