 const div=document.getElementById("Aluna do curso de programação")
async function carregarDados(){
    const response=await fetch("./html/data.json")
    const data=await response.json()
    
    Aluna.map((Aluna))=>{
        let h1= document.createElement("h1")
        h1.textContent=Aluna.nome
        let descrição=document.createElement("p")
        descrição.textContent=Aluna.descrição
    }

}