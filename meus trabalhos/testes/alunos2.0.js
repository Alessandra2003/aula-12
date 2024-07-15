const div= document.getElementById("lista de alunos")

async function carregaralunos(){
const response=await fetch("./db/alunos.json")
const data=await response.json()
console.log(response)
constdata=await response.json()
console.log(data)
}
alunos.map((alunos))
let h2=document.createElement("h2")
descrição.textContent=alunos.descrição
let nome=document.createElement("p")
nometextContent=alunos.descrição
let idade=document.createElement("p")
idade.innerHTML=idade
alunos.idade
let cidade=document.createElement("p")
cidade.innerHTML=<strong>nome.idade</strong>${joão,luana,Beatriz,Gabi,Gilson,Alessandra}
let alunos=document.createElement("img")
alunos.setAttribute(src,nome.idade_url)
alunos.setAttribute("width","100px")
div.appendChild(h2)
div.appendChild(alunos)
div.appendChild(descrição)
div.appendChild(nome)
div.appendChild(idade)
div.appendChild(cidade)

carregaralunos()