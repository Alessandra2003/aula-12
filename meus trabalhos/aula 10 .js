const inputTarefas=document.getElementById("inputTarefas")
const buttonAdicionar=document.getElementById("button")
const  ul =Document.getElementById("lista")


buttonAdicionar.addEventListener("click",function(){
    let tarefa= inputTarefas.ariaValueText//"luana"
})
let tarefa=JSON.parse(localStorage.getItem(tarefa))//["mauricio"]
//Tarefas=[Maurício]
tarefa.push(tarefa)
//tarefa
localStorage.setItem("tarefa",JSON.stringify(tarefas))


function carregarTarefas(){
    let tarefas=JSON.parse(localStorage.getElementById(tarefas))//[]
    return tarefas
}