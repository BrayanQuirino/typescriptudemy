function caminar(persona) {
    console.log("" + persona.nombre);
}
var nuevaPersona = { nombre: 'Brayan', altura: 166, peso: 61 };
function mostrarPersona(persona) {
    var mediaPeso = persona.altura / persona.peso;
    if (persona.nombre) {
        return persona.nombre + ": " + mediaPeso;
    }
    else {
        return "" + mediaPeso;
    }
}
console.log(mostrarPersona(nuevaPersona));
