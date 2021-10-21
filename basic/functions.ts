/*function sumar(a:number,b:number):number{
    return a + b;
}*/


const sumar = (a:number,b:number):number => {
    return a + b;
}

//Opcionales con ? (Interrogante)
const opcionales = (nombre:string,apellido:string,edad?:number):void=>{
    if(edad){
        console.log(`${nombre} ${apellido}: ${edad}`)
    }else{
        console.log(`${nombre} ${apellido}`)
    }
}

//opcionales('Brayan','Quirino');


//Parametros por default, si no viene edad, se inicializa con 32

const defaults = (nombre:string, apellido:string, edad:number = 32)=>{
    console.log(`${nombre} ${apellido}: ${edad}`)
}

//defaults('Brayan','Quirino')

//Parametros REST

const cartaDePostres = (postre:string, ...frutas:string[]):void => {
    console.log(`El poste es ${postre} y tiene:\n${frutas}`)
}

cartaDePostres('PostreOne','naranja','platano')