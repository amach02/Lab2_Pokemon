export class EjemploGuardar {

<<<<<<< HEAD
=======
    static guardarPokemon(pokemones) {
        localStorage.setItem(this.KEY, JSON.stringify(pokemones));
    }//END GUARDAR

    static obtenerPokemon() {
        const datos = localStorage.getItem(this.KEY);
        return datos ? JSON.parse(datos) : [];//OPERADOR TERNARIO, SI HAY DATOS LOS PARSEO, SINO DEVUELVO UN ARRAY VACIO
    }
>>>>>>> 37045d8cdbe8cfb8323bd5e05712a9c6e88e6350

}//END CLASS
