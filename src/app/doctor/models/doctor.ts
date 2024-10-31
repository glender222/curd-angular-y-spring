import { Especialidad } from "../../especialidad/models/especialidad";

export class Doctor{
  id! : number;
  nombre! :string;
  apellido! : string;
  especialidad : Especialidad;
  constructor (id: number = 0, nombre : string = '', apellido : string = '', especialidad : Especialidad = new Especialidad()){
     this.id = id;
     this.nombre = nombre;
     this.apellido = apellido;
     this.especialidad = especialidad;
  }

}