import { IApiPokemon, IApiListadoPokemones } from '../mapeadores/pokemon';

export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
export const LIMITE_POKEMONES = 20;

export async function cargarPokemon(id : string) : Promise<IApiPokemon> {
  if (id === undefined) {
    throw new Error('Se necesita un identificador para cargar un pokemón');
  }
  return (await fetch(`${BASE_URL}${id}`)).json();
}

export async function cargarPokemones(offset : number = 0, limite : number = LIMITE_POKEMONES) : Promise<IApiListadoPokemones> {
  return (await fetch(`${BASE_URL}?offset=${offset}&limit=${limite}`)).json();
}
