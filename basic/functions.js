/*function sumar(a:number,b:number):number{
    return a + b;
}*/
var sumar = function (a, b) {
    return a + b;
};
//Opcionales con ? (Interrogante)
var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log(nombre + " " + apellido + ": " + edad);
    }
    else {
        console.log(nombre + " " + apellido);
    }
};
//opcionales('Brayan','Quirino');
//Parametros por default, si no viene edad, se inicializa con 32
var defaults = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 32; }
    console.log(nombre + " " + apellido + ": " + edad);
};
//defaults('Brayan','Quirino')
//Parametros REST
var cartaDePostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El poste es " + postre + " y tiene:\n" + frutas);
};
cartaDePostres('PostreOne', 'naranja', 'platano');
