export class Pokemon {
    constructor(nombre, tipo, altura, peso, imagen, estadisticas) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.altura = altura;
        this.peso = peso;
        this.imagen = imagen;
        this.estadisticas = estadisticas;
    }

    static fromAPI(data) {
        return new Pokemon(
            data.name,
            data.types.map(t => t.type.name),
            data.height,
            data.weight,
            data.sprites.other['official-artwork'].front_default,
            data.stats
        );
    }

    getNombre() {
        return this.nombre;
    }
    getTipo() {
        return this.tipo;
    }
    getAltura() {
        return this.altura;
    }
    getPeso() {
        return this.peso;
    }
    getImagen() {
        return this.imagen;
    }
    getEstadisticas() {
        return this.estadisticas;
    }

    toString() {
        return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Altura: ${this.altura}, Peso: ${this.peso}`;
    }

}