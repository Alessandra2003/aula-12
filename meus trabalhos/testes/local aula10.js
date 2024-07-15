const inputTarefas = document.getElementById("lista de tarefas")
const buttonAdicionar = document.getElementById("Button")
const ul = document.getElementById("lista")

buttonAdicionar.addEventListener("click", function () {
    let tarefa = inputTarefas.value;
    let tarefas = JSON.parse(localStorage.getItem("tarefas"))//[]
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefa))
    ul.innerHTML = ""
    tarefa.map(tarefa => {
        const li = documentcreateElement("li")
        const button = document.createElement("button")
        button.type = "button"
        button.textContent = "Excluir"
        li.appendChild(button)
        ul.appendChild(li)

    })
    inputTarefas.value = ""
    function exibirlista(index) {
        let tarefa = JSON.parse(localStorage.getItem(tarefa))//[]
        tarefa.splice(index, 1)
        localStorage.setItem("tarefa,JSON.stringify"(tarefas))//[]
        ul.innerHTML = "";
        exibirlista()
        console.log("tarefas", tarefas)
    }
    function exibirlista() {
        let Tarefas = JSON.parse(localStorage.getItem("tarefas"))//[];
        tarefa.map((tarefa, index))
        const li = document.createElement("li")
        const Button = document.createElement("button")
        button.type = "button"
        button.textContent = "Excluir"
        button.id = index
        //button.onclick=()=>excluirtarefas(index)
        li.textContent = tarefa
        button.addEventListener("Click", function () {
            tarefa.splice(index, 1)
            localStorage.setItem("tarefas", JSON.stringify(tarefas))
            ul.innerHTML = ""
            exibirlista()
            console.log("tarefas", tarefas)
        })
        li.appendChild("button")
        ul.appendChild(li)
    }



})

exibirlista()