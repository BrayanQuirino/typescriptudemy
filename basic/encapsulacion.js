var Animal = /** @class */ (function () {
    function Animal(_n, _t) {
        this.nombre = _n;
        this.tamano = _t;
        this.posicion = [0, 0];
    }
    Animal.prototype.mover = function () {
        var nuevaPosicion = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nuevaPosicion[_i] = arguments[_i];
        }
        this.posicion = nuevaPosicion;
        console.log("" + this.posicion);
    };
    Object.defineProperty(Animal.prototype, "cambiarNombre", {
        set: function (_nombre) {
            this.nombre = _nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "obtenerNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
//Comando si me sale un tema tsc -t es6 archivo.ts
var gato = new Animal('Galileo', 'Mediano');
gato.mover(5, 7);
