interface IListadoPokemones {
  total : number;
  siguienteUrl : string;
  anteriorUrl : string;
  nombresPokemones : string[];
}

export default class ListadoPokemones implements IListadoPokemones {
  constructor(public total : number, public siguienteUrl : string, public anteriorUrl : string, public nombresPokemones : string[] = []) {
    this.total = total;
    this.siguienteUrl = siguienteUrl;
    this.anteriorUrl = anteriorUrl;
    this.nombresPokemones = nombresPokemones;
  }
}
