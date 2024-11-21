let nombreTxt = document.getElementById("pokemon-name");
let typesList = document.getElementById("pokemon-types");
let image = document.getElementById("pokemon-image");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((pokemon) => {
        /*console.log(pokemon.name);
        console.log(pokemon.types);
        console.log(pokemon.sprites.front_default);*/
        nombreTxt.innerText = pokemon.name;
        image.setAttribute("src", pokemon.sprites.front_default);
        
        let lista = document.createElement("ul");
        for(let i = 0; i<pokemon.types.length; i++){
            const tipo = pokemon.types[i];

            let item = document.createElement("li");
            item.innerText = tipo.type.name;
            lista.appendChild(item);
        }
        typesList.appendChild(lista);
    })
    .catch((error) => console.error(error));