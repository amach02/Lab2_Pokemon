export class Servicios {
    static KEY = "mis_pokemon";

    static guardarPokemon(pokemones) {
        localStorage.setItem(this.KEY, JSON.stringify(pokemones));
    }//END GUARDAR

    static obtenerPokemon() {
        const datos = localStorage.getItem(this.KEY);
        return datos ? JSON.parse(datos) : [];//OPERADOR TERNARIO, SI HAY DATOS LOS PARSEO, SINO DEVUELVO UN ARRAY VACIO
    }

static async listaPokemon() {
    try {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await respuesta.json();

        const pokemons = data.results;

        const datalist = document.getElementById("pokemonSuggestions");

        // SOLO AUTOCOMPLETE
        datalist.innerHTML = pokemons
            .map(pokemon => `<option value="${pokemon.name}">`)
            .join("");

        // (opcional) guardar
        this.guardarPokemon(pokemons);

    } catch (error) {
        console.error("Error al obtener los Pokémon:", error);
    }
}

    static async searchPokemon(nombre) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

        if (!response.ok) {
            throw new Error("Pokemon not found");
        }

        const data = await response.json();
        return data; // 👈 SOLO devuelve datos

    } catch (error) {
        console.error(error);
        return null;
    }
}
    
    
}