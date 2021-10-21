class Padre{
    nombre: string
    edad:number
    constructor(_n:string,_e:number){
        this.nombre = _n;
        this.edad = _e;
    }
    mostrar(){
        console.log(`${this.nombre}`)
    }
}

class Hijo extends Padre{
    apellido: string
    constructor(_n:string,_e:number,_ap:string){
        super(_n,_e)
        this.apellido = _ap
    }
    
    mostrarHijo(){
        console.log(`${this.nombre}`)
    }
}

const brayan = new Hijo ('Brayan',23,'Quirino')
brayan.mostrar()
brayan.mostrarHijo();