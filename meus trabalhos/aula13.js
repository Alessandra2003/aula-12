const div = document.getElementById("bandeiras")
const divtext = document.getElementById("texto")

async function carregarTexto(estados) {
    divtext.innerHTML = ''}
    {
        const response = await fetch("https://mariciodiias.github.io/estadosDoBrasil/data,json")
    const data = await response.json()
const estados= data
    
    let nome=document.createElement("h3")
    nome.textContent=estado.nome
    divtext.anexarChild(nome)
    //alert(estado.nome)
    let descricao=document.createElement("p")
    descricao.textContent=estado.descricao
    divtext.appendChild(descricao)
}

    async function carregarDados(){
        const response=await fetch("https://mariciodiias.github.io/estadosDoBrasil/data,json")
        const data= await response.json()
        const estados=data.estados
        console.log(response)
        estados.map((estados)=>{
            let h3=document.createElement("h3")
            h3.textContent=estado.nome
            let descricao=document.createElement("p")
            descricao.textContent=estado.nome
            let bandeira=document.createElement("p")
            bandeira.setAttribute("src",estado.bandeira_url)
            bandeira.setAttribute("width","200px")
            bandeira.setAttribute("click", ()=>carregarTexto(estado))
            div.bandeiras.appendChild("h3")
            div.bandeiras.anexarChild(bandeira)

        })
    }
    carregarDados();