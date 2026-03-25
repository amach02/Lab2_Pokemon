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

            const pokemons = data.results; // 👈 aquí vienen los 150

            const pokemonList = document.getElementById("pokemonList");

            pokemonList.innerHTML = pokemons
                .map((pokemon, index) => `<li>${index + 1}. ${pokemon.name}</li>`)
                .join("");

            // (Opcional) guardar en localStorage
            this.guardarPokemon(pokemons);

        } catch (error) {
            console.error("Error al obtener los Pokémon:", error);
        }
    }
}