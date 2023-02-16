import ListadoPokemones from '../entidades/listadoPokemones';
import Pokemon from '../entidades/pokemon';

export const LIMITE_POKEMONES = 20;

function obtenerKeyPokemon(id : string) {
  return `pokemon_${id}`;
}

function obtenerKeyPokemones(offset : number, limite: number) {
  return `pokemones_${offset}_${limite}`;
}

export function cargarPokemon(id : string) : Pokemon {
  if (id === undefined) {
    throw new Error('Se necesita un identificador para cargar un pokemón');
  }

  const pokemonString = localStorage.getItem(obtenerKeyPokemon(id));
  if (pokemonString === null) {
    throw new Error(`Pokemon con id ${id} no encontrado`);
  }
  const pokemon: Pokemon = JSON.parse(pokemonString);
  return pokemon;
}

export function cargarPokemones(offset : number = 0, limite : number = LIMITE_POKEMONES): ListadoPokemones {
  const pokemonesString = localStorage.getItem(obtenerKeyPokemones(offset, limite));
  if (pokemonesString === null) {
    throw new Error(`Listado de pokemones con offset ${offset} y limite ${limite} no encontrado`);
  }

  const pokemones: ListadoPokemones = JSON.parse(pokemonesString);
  return pokemones;
}


export function guardarPokemon(id : string, pokemon : Pokemon) {
  if (id === undefined || typeof pokemon !== 'object') {
    throw new Error('Se necesita un identificador y un pokemon para guardar en localStorage');
  }

  localStorage.setItem(obtenerKeyPokemon(id), JSON.stringify(pokemon));
}


export function guardarPokemones(offset : number, limite : number, pokemones : ListadoPokemones) {
  if (offset === undefined || limite === undefined || typeof pokemones !== 'object') {
    throw new Error('Se necesita offset, limite y pokemones');
  }

  localStorage.setItem(obtenerKeyPokemones(offset, limite), JSON.stringify(pokemones));
}
