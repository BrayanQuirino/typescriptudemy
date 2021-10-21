/*El tipo de dato any es contraproducente al 
lenguje wtf

La "T" es por convensión y representa el 
tipo generico
*/

//Funciones genericas
function mostrar<T>(dato:T):T{
    return dato
}

const aux = mostrar('Cualquier dato')

//Clases genericas

class Persona<T>{
    nombre:string
    edad:T

    mostrar(params:T):T{
        return params
    }
}

//Interfaces genericas

interface Persona_<T>{
    apellido_m:T
}

let person:Persona_<string> = {apellido_m: 'Brayan'}