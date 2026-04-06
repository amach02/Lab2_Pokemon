import { Servicios } from "./Servicios.js";
import { Pokemon } from "./business/pokemon.js";
import { TipoColor } from "./business/TipoColor.js";
import { EjemploGuardar } from "./data/EjemploGuardar.js";
import { GuardarEquipo } from "./data/GuardarEquipo.js";
import { Renderizar } from "./business/Renderizar.js";


const btnSearch = document.getElementById("btnSearch");
const btnSave = document.getElementById("btnSave");
const btnRead = document.getElementById("btnRead");
const btnCapturar = document.getElementById("btnCapturar");
const inputPokemonName = document.getElementById("pokemonName");
const pokemonInfo = document.getElementById("pokemonInfo");
const btnVerEquipo = document.getElementById("btnVerEquipo");
const equipoContainer = document.getElementById("equipoContainer");
Servicios.listaPokemon();
btnSearch.addEventListener("click", async () => {
    pokemonInfo.innerHTML = "searching pokemon..."
    searchPokemon(inputPokemonName.value.toLowerCase());

});

btnSave.addEventListener("click", async () => {
    const pokemons = [{ nombre: 'pikachu', nivel: 10 }, { nombre: 'charmander', nivel: 15 }];
    Servicios.guardarPokemon(pokemons);
    const btnCapturar = document.getElementById("btnCapturar");
});

btnSearch.addEventListener("click", async () => {
    pokemonInfo.innerHTML = "searching pokemon...";

    const data = await Servicios.searchPokemon(inputPokemonName.value.toLowerCase());

    if (!data) {
        pokemonInfo.innerHTML = "Pokemon not found";
        return;
    }

    const nuevoPokemon = Pokemon.fromAPI(data);
    displayPokemonInfo(nuevoPokemon);
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


btnCapturar.addEventListener("click", async () => {
    const busqueda = inputPokemonName.value.toLowerCase();

    if (!busqueda) {
        alert("Escribe un nombre o ID primero para buscar al Pokémon");
        return;
    }

    try {
        // 1. Buscamos los datos actualizados de la API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`);

        if (!response.ok) {
            alert("No se pudo encontrar el Pokémon para guardar");
            return;
        }

        const data = await response.json();

        const pokemonParaGuardar = {
            nombre: data.name,
            nivel: 10,
            imagen: data.sprites.other['official-artwork'].front_default,
            tipo: data.types[0].type.name
        };

        //  GuardarEquipo ya se encarga de validar el límite de 6 y duplicados
        GuardarEquipo.guardarPokemon(pokemonParaGuardar);

    } catch (error) {
        console.error("Error al procesar el guardado:", error);
        alert("Hubo un error de conexión al intentar guardar el equipo");
    }
});

btnVerEquipo.addEventListener("click", () => {
    // 1. Obtenemos los datos guardados en el equipo
    const miEquipo = GuardarEquipo.obtenerEquipo();

    // 2. Verificamos si existe el contenedor en el HTML
    if (equipoContainer) {
        // 3. Renderizamos usando la función
        equipoContainer.innerHTML = Renderizar.equipoCompleto(miEquipo);

        console.log("Mostrando equipo:", miEquipo);
    } else {
        console.error("Error: No se encontró el contenedor 'equipoContainer' en el HTML.");
    }
});


function displayPokemonInfo(pokemon) {
    //usamos la función que genera el HTML d
    pokemonInfo.innerHTML = Renderizar.tarjetaDetallada(pokemon);
    TipoColor.changeBackground(pokemon.getTipo()[0]);
}

