var divConteudo = document.getElementById("conteudo");
var divAbilities = document.getElementById("abilities")
function renderizaPokedex(data) {
    divConteudo.innerHTML = `
    <h1>${data.name}</h1> <br/>
    <img src='${data.sprites.front_default}'></img><br/>
    <h2>Habilidades</h2>
    `
    divAbilities.innerHTML = ""
}

function renderizaHabilidades(abilities){
    console.log(abilities.ability.name)
    divAbilities.innerHTML += `<br/>${abilities.ability.name}`   
}

var inputNomePokemon = document.getElementById("pokemon")
var btnProcurar = document.getElementById("btnProcurar");
btnProcurar.onclick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputNomePokemon.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderizaPokedex(data)
        data.abilities.forEach(renderizaHabilidades);
    })
    .catch(exception =>{
        console.error(exception)
    })
}