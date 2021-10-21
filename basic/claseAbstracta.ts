/*Las clases abstractas NO pueden ser
instanciadas por si mismas si no por las clases
hijas

Si el método esta definido como abstracto
tengo la obligación de definirlo en las 
clases hijo*/

abstract class Animal{
    abstract ruido():void
    caminar(){
        console.log('Ojo que camino')
    }
}

class Gato extends Animal{
    constructor(){
        super();
    }
    ruido(){
        console.log('Miau')
    }
}

class Perro extends Animal{
    constructor(){
        super();
    }
    ruido(){
        console.log('Guau')
    }
}