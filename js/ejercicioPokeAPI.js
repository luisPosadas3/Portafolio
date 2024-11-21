let nombreTxt = document.getElementById("pokemon-name");
let typesList = document.getElementById("pokemon-types");
let image = document.getElementById("pokemon-image");
let shiny = document.getElementById("pokemon-shiny");
let numero = document.getElementById("pokemon-id");
let grito = document.getElementById("pokemon-grito");
let habilidades = document.getElementById("pokemon-habilidades");
let peso = document.getElementById("pokemon-peso");

function mostrarPokemon(poke){
    poke = document.getElementById("buscarTxt").value;
fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((response) => response.json())
    .then((pokemon) => {
        nombreTxt.innerText = pokemon.name;
        image.setAttribute("src", pokemon.sprites.front_default);
        shiny.setAttribute("src", pokemon.sprites.front_shiny);
        numero.innerText = pokemon.id;
        grito.src = pokemon.cries.latest;
        peso.innerText = pokemon.weight;

        let lista = document.createElement("ul");
        typesList.innerHTML = "";
        for(let i = 0; i<pokemon.types.length; i++){
            const tipo = pokemon.types[i].type;

            let item = document.createElement("li");
            item.innerText = tipo.name;
            lista.appendChild(item);
        }
        typesList.appendChild(lista);

        let listaHabilidades = document.createElement("ul");
        habilidades.innerHTML = "";
        for(let i = 0; i<pokemon.abilities.length; i++){
            const habilidad = pokemon.abilities[i].ability;

            let itemHabilidad = document.createElement("li");
            itemHabilidad.innerText = habilidad.name;
            listaHabilidades.appendChild(itemHabilidad);
        }
        habilidades.appendChild(listaHabilidades);
    })
    .catch((error) => {
        console.error(error);
        nombreTxt.innerText = "";
        image.setAttribute("src", "");
        shiny.setAttribute("src", "");
        numero.innerText = "";
        grito.setAttribute("src", "");
        peso.innerText = "";
        habilidades.innerHTML = "";
        typesList.innerHTML = "";
        alert(`No se encontro el pokemon "${poke}"`);
    });
}