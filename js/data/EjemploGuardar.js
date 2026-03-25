export class EjemploGuardar {
    static KEY = "mis_pokemon";

    static guardarPokemon(pokemones){
        localStorage.setItem(this.KEY, JSON.stringify(pokemones));
    }//END GUARDAR

    static obtenerPokemon(){
        const datos= localStorage.getItem(this.KEY);
        return datos ? JSON.parse(datos) : [];//OPERADOR TERNARIO, SI HAY DATOS LOS PARSEO, SINO DEVUELVO UN ARRAY VACIO
    }

}//END CLASS
