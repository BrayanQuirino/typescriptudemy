import{ nombre,Humano,mostrar } from './modulos'

/*Importacion no recomendable*/
import * as paquete from './modulos'

/*Sin llaves por que exportamos todo como
componente*/
import Persona from './exportDefault'

const p:Persona = new Persona('Brayan',23,167)
const humano:Humano = {nombre:'Brayan'}
mostrar('Hello')