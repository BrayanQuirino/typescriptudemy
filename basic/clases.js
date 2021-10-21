/*Clase es una plantilla de un objeto, donde
se definen metodos y atributos de dicho
objeto*/
/*Cuando creo un obketo de una clase, estoy
instanceando*/
var Coche = /** @class */ (function () {
    function Coche(marca_, fecha_, puertas_, ruedas_) {
        if (ruedas_ === void 0) { ruedas_ = 4; }
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
        this.ruedas = ruedas_;
        this.velocidad = 0;
    }
    Coche.prototype.acelerar = function () {
        this.velocidad++;
        console.log("" + this.velocidad);
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
        console.log("" + this.velocidad);
    };
    return Coche;
}());
var audi = new Coche('Audi', new Date(), 5);
console.log(audi);
audi.acelerar();
console.log(audi);
audi.frenar();
console.log(audi);
