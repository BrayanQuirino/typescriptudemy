interface Persona{
    /* Parametros opciones con ?*/
    nombre?:string
    /*Parametros de solo lectura*/
    readonly peso:number
    altura:number
}

function caminar(persona:Persona):void{
    console.log(`${persona.nombre}`)
}

let nuevaPersona:Persona = {nombre:'Brayan',altura:166,peso:61}

function mostrarPersona(persona:Persona):string{
    let mediaPeso:number = persona.altura / persona.peso
    if(persona.nombre){
        return `${persona.nombre}: ${mediaPeso}`
    }else{
        return `${mediaPeso}`
    }
}
console.log(mostrarPersona(nuevaPersona));