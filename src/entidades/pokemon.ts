import  Movimiento  from './movimiento';

interface IPokemon { 
  id : number;
  nombre : string;
  foto : string;
  habilidades : string[];
  tipos : string[];
  movimientos : Movimiento[];
}

export default class Pokemon implements IPokemon {
  constructor(public id : number, public nombre : string, public foto : string, public habilidades : string[], public tipos : string[], public movimientos : Movimiento[] = []) {
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
    this.habilidades = habilidades;
    this.tipos = tipos;
    this.movimientos = movimientos;
  }
}
