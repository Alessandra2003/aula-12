const card = document.getElementById("card")

console.log(card)
async function buscarDados() {
    const response = await fetch("http://rickandmortyapi.com/api/character")
    const data = await response.json()

    return data
}

async function render() {
    const dados = await buscarDados()
    const resultados = dados.resultados
    resultados.map((results)) = {
        const div = document.createElement("div")
        let gender;
        if(result.gender === "Male") {
        gender = "Masculino";
    } else {
        gender = "Feminino";
    }


}
}
div.innerHTML =
    < img.width ="100px" scr= "${result.image}" alt = "" />
        <h3>${result.name}</h3><p><strong>Gênero:</strong>${gender}</p><p><strong>status:</strong>${result.status == "Alive?"}"vivo":"morto"
        </p>
        <p><strong>Espécie:</strong>${result.species === "Alien" ? : , "Aliengina" ? : "Humano"}</p><hr>
                card.appenchild(div)
                )
//resultados.map((result))={
                    //let gender
                    //if(result.gender==="Male")
                    //{gender "Masculino"}
                    //else{"feminino"}
                }
                const imagem=document.createElement("img")
            //</hr>Imagem.setAtribute("src", result.image)
//imagem.setAtribute("witdh,100px")
//const titulo=documnet.createElement("h3")
//titulo.textContent=result.name
//const genero=document.createElement("p")
//status.innerhtml=<strong>Status:</strong>${
                //result.status=="Alive?","vivo":"Morto"

                //const species=document.createElement("P")
                //card.AppenChild(imagem)
                //card.AppenChild(titulo)
                //card.AppenChild(genero)
                //card.AppenChild(species)
                //card.AppenChild(status)
                //})
            }
            render()

