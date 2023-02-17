interface IMovimiento {
  nombre : string;
  versiones : string[];
}


export default class Movimiento implements IMovimiento {
  constructor(public nombre : string, public versiones : string[] = []) {
    this.nombre = nombre;
    this.versiones = versiones;
  }
}
