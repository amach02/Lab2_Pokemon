import { EjemploGuardar }  from "./data/EjemploGuardar.js";
import { Servicios } from "./Servicios.js"; 

import { Pokemon } from "./business/pokemon.js";
import { TipoColor } from "./business/TipoColor.js";
import { EjemploGuardar } from "./data/EjemploGuardar.js";
import { GuardarEquipo } from "./data/GuardarEquipo.js";

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
const btnGuardarEquipo = document.getElementById("btnGuardarEquipo");
});

btnSearch.addEventListener("click", async () => {
    pokemonInfo.innerHTML = "searching pokemon..."
    searchPokemon(inputPokemonName.value.toLowerCase());
});

btnSave.addEventListener("click", async () => {
    const pokemons = [{ nombre: 'pikachu', nivel: 10 }, { nombre: 'charmander', nivel: 15 }];
    EjemploGuardar.guardarPokemon(pokemons);
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


// Evento para guardar un pokemon en el equipo
btnGuardarEquipo.addEventListener("click", async () => {
    const busqueda = inputPokemonName.value.toLowerCase();
    if (!busqueda) {
        alert("Escribe un nombre o ID primero");
        return;
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`);
        if (!response.ok) {
            alert("No se pudo encontrar el Pokémon para guardar");
            return;
        }
        const data = await response.json();
        const pokemon = {
            nombre: data.name,
            nivel: 10 // Puse este asi, pero se puede cambiar
        };
        GuardarEquipo.guardarPokemon(pokemon);
    } catch (error) {
        console.error("Error al procesar el guardado:", error);
        alert("Hubo un error al intentar guardar el equipo");
    }
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
