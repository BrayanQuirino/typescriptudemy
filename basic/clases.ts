/*Clase es una plantilla de un objeto, donde
se definen metodos y atributos de dicho
objeto*/

/*Cuando creo un obketo de una clase, estoy
instanceando*/

class Coche{
    marca:string
    fecha: Date
    puertas: number
    ruedas:number
    velocidad:number
    constructor(marca_:string,fecha_:Date,puertas_:number,ruedas_:number = 4){
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
        this.ruedas = ruedas_;
        this.velocidad = 0;
    }

    acelerar():void{
        this.velocidad ++;
        console.log(`${this.velocidad}`)
    }
    frenar():void{
        this.velocidad --;
        console.log(`${this.velocidad}`)
    }
}

const audi = new Coche('Audi', new Date(),5)
console.log(audi);
audi.acelerar();
console.log(audi);
audi.frenar();
console.log(audi);
