import { EjemploGuardar }  from "./data/EjemploGuardar.js";


const btnSearch = document.getElementById("btnSearch");
const btnSave = document.getElementById("btnSave");
const btnRead = document.getElementById("btnRead");
const inputPokemonName = document.getElementById("pokemonName");
const pokemonInfo = document.getElementById("pokemonInfo");

btnSearch.addEventListener("click", async () => {
    pokemonInfo.innerHTML = "searching pokemon..."
     searchPokemon(inputPokemonName.value.toLowerCase());
});

btnSave.addEventListener("click", async () => {
    const pokemons = [{nombre: 'pikachu', nivel: 10}, {nombre: 'charmander', nivel: 15}];
    EjemploGuardar.guardarPokemon(pokemons);
    alert("Pokemon guardados en localStorage");
});

btnRead.addEventListener("click", async () => {
    const pokemons = EjemploGuardar.obtenerPokemon();
    alert("Pokemon obtenidos de localStorage: " + JSON.stringify(pokemons));
    let data_pokemons = '';
    pokemons.forEach(pokemon => {
        data_pokemons += `Nombre: ${pokemon.nombre}, Nivel: ${pokemon.nivel}\n`;
    });
    alert("Pokemon obtenidos de localStorage:\n" + data_pokemons);
});

async function searchPokemon(nombre) {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!response.ok) {
            throw new Error("Pokemon not found");
        }//END IF
        const data = await response.json();
        displayPokemonInfo(data);
    } catch (error) {
        pokemonInfo.innerHTML = "Pokemon not found";
    }//END TRY CATCH
}//END serchPokemon

function displayPokemonInfo(data) {
    const type = data.types[0].type.name;
    pokemonInfo.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Types: ${data.types.map(type => type.type.name).join(", ")}</p>
    `;
    console.log(type);
    changebackground(type);
}//END FUNCTION

function changebackground(type) {
    console.log(type);
    switch (type) {
        case "grass":
            document.body.style.backgroundColor = "#78b35a";
            document.body.style.color = "#11540f";
            break;
        case "fire":
            document.body.style.backgroundColor = "#d27553";
            document.body.style.color = "#672d0a";
            break;    
        case "water":
            document.body.style.backgroundColor = "#69bce0";
            document.body.style.color = "#10425b";

            break;
        case "electric":
            document.body.style.backgroundColor = "#F9E79F";
            document.body.style.color = "#863636";
            break;
        default:
            document.body.style.backgroundColor = "#FFFFFF";
    }

}//END FUNCTION