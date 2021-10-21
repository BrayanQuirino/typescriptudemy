export default class Persona{
    nombre:string
    edad:number
    altura:number

    constructor(_n:string,_e:number,_a:number){
        this.nombre = _n
        this.edad = _e
        this.altura = _a
    }

    mostrar():void{
        console.log(this.nombre)
    }
}