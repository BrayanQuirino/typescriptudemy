class Animal{
    private nombre:string
    private tamano:string
    private posicion: number[] 
    constructor(_n:string,_t:string){
        this.nombre = _n
        this.tamano = _t
        this.posicion = [0,0]
    }

    public mover(...nuevaPosicion:number[]):void{
        this.posicion = nuevaPosicion
        console.log(`${this.posicion}`)
    }

    set cambiarNombre(_nombre:string){
        this.nombre = _nombre
    }

    get obtenerNombre():string{
        return this.nombre
    }
}

//Comando si me sale un tema tsc -t es6 archivo.ts
const gato = new Animal('Galileo','Mediano')
gato.mover(5,7)
