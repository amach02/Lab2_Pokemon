export class GuardarEquipo {
    static KEY = "equipo_pokemon";

    // Para leer antes de guardar
    static obtenerEquipo() {
        const datos = localStorage.getItem(this.KEY);
        return datos ? JSON.parse(datos) : [];
    }

    static guardarPokemon(nuevoPokemon) {
        let equipo = this.obtenerEquipo();

        // Revisa de que no haya un pokemon con el mismo nombre.
        const existe = equipo.some(p => p.nombre.toLowerCase() === nuevoPokemon.nombre.toLowerCase());
        if (existe) {
            alert("Este Pokémon ya está en tu equipo.");
            return;
        }

        // Revisa que no se exceda el límite de 6 pokemones
        if (equipo.length >= 6) {
            alert("No puedes guardar más de 6 pokemones en tu equipo");
            return;
        }

        // Se agrega si esta todo bien
        equipo.push(nuevoPokemon);
        localStorage.setItem(this.KEY, JSON.stringify(equipo));
        alert(`${nuevoPokemon.nombre} guardado con éxito!`);
    }
}