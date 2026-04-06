/**
 * Renderizar.js - Encargado de generar el HTML dinámico
 */

export class Renderizar {


    static tarjetaDetallada(pokemon) {
        // Obtenemos los tipos para crear las etiquetas
        const tipos = pokemon.getTipo().map(tipo =>
            `<span class="tag ${tipo}">${tipo.toUpperCase()}</span>`
        ).join(" ");

        return `
            <div class="card-content animate-fade">
                <h2>${pokemon.getNombre().toUpperCase()}</h2>
                <img src="${pokemon.getImagen()}" alt="${pokemon.getNombre()}" style="width: 150px;">
                <div class="info-grid">
                    <p><strong>Altura:</strong> ${pokemon.getAltura()} m</p>
                    <p><strong>Peso:</strong> ${pokemon.getPeso()} kg</p>
                </div>
                <div class="types-container">
                    ${tipos}
                </div>
                <div class="stats-mini">
                    <small>HP: ${pokemon.getEstadisticas()[0].base_stat} | ATK: ${pokemon.getEstadisticas()[1].base_stat}</small>
                </div>
            </div>
        `;

    }


    static equipoCompleto(listaEquipo) {
        if (listaEquipo.length === 0) {
            return `<p>No tienes Pokémon en tu equipo todavía.</p>`;
        }

        // Usamos .map para crear una tarjeta por cada pokemon en el arreglo
        return listaEquipo.map(pokemon => `
        <div class="mini-card-equipo animate-fade-in">
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}" class="mini-img">
            
            <div class="mini-card-info">
                <strong class="mini-name">${pokemon.nombre.toUpperCase()}</strong>
                <p class="mini-level">Nivel: ${pokemon.nivel || 10}</p>
                <span class="mini-tag ${pokemon.tipo}">${pokemon.tipo || ''}</span>
            </div>
        </div>
    `).join('');
    }




    static miniTarjeta(pokemon) {
        return `
            <div class="mini-card" style="display: inline-block; margin: 5px; padding: 10px; background: #fff; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <img src="${pokemon.imagen}" alt="${pokemon.nombre}" style="width: 50px; display: block; margin: 0 auto;">
                <strong style="font-size: 12px;">${pokemon.nombre}</strong>
            </div>
        `;
    }
}