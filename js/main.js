import { EjemploGuardar }  from "./data/EjemploGuardar.js";
import { Servicios } from "./Servicios.js"; 

import { Pokemon } from "./business/pokemon.js";
import { TipoColor } from "./business/TipoColor.js";

const btnSearch = document.getElementById("btnSearch");
const btnSave = document.getElementById("btnSave");
const btnRead = document.getElementById("btnRead");
const inputPokemonName = document.getElementById("pokemonName");
const pokemonInfo = document.getElementById("pokemonInfo");
Servicios.listaPokemon();
btnSearch.addEventListener("click", async () => {
    pokemonInfo.innerHTML = "searching pokemon..."
     searchPokemon(inputPokemonName.value.toLowerCase());

});

btnSave.addEventListener("click", async () => {
    const pokemons = [{nombre: 'pikachu', nivel: 10}, {nombre: 'charmander', nivel: 15}];
    Servicios.guardarPokemon(pokemons);
    alert("Pokemon guardados en localStorage");
});

btnRead.addEventListener("click", async () => {
    const pokemons = Servicios.obtenerPokemon();
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
        const nuevoPokemon = Pokemon.fromAPI(data);
        displayPokemonInfo(nuevoPokemon);
    } catch (error) {
        pokemonInfo.innerHTML = "Pokemon not found";
    }//END TRY CATCH
}//END serchPokemon

function displayPokemonInfo(pokemon) {
    
    pokemonInfo.innerHTML = `
        <h2>${pokemon.getNombre().toUpperCase()}</h2>
        <img src="${pokemon.getImagen()}" alt="${pokemon.getNombre()}">
        <p>Height: ${pokemon.getAltura()}</p>
        <p>Weight: ${pokemon.getPeso()}</p>
        <p>Types: ${pokemon.getTipo().join(", ")}</p>
    `;
    
    TipoColor.changeBackground(pokemon.getTipo()[0]);
}//END FUNCTION
