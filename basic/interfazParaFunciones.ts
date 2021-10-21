interface General{
    (nombre:string, apellido:string, edad:number):void
}

let funcionGeneralUno:General
funcionGeneralUno = function(nombre:string, apellido:string,edad:number):void{
    console.log(`${nombre} ${apellido}`)
}