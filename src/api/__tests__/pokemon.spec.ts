import {
  BASE_URL, cargarPokemon, cargarPokemones, LIMITE_POKEMONES,
} from '../pokemon.js';

beforeEach(() => {
  global.fetch = jest.fn();
});


test('carga 1 pokemon', () => {
  (global.fetch as unknown as jest.Mock)(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));

  cargarPokemon('bulbasaur');
  expect(global.fetch)
    .toHaveBeenCalledTimes(1);

  expect(global.fetch)
    .toHaveBeenCalledWith(`${BASE_URL}bulbasaur`);
});

test('carga listado de pokemones con parametros por default', () => {
  (global.fetch as unknown as jest.Mock)(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r([]);
    });
    resolve({ json: () => jsonPromise });
  }));

  cargarPokemones();

  expect(global.fetch)
    .toHaveBeenCalledTimes(1);
  expect(global.fetch)
    .toHaveBeenCalledWith(`${BASE_URL}?offset=0&limit=${LIMITE_POKEMONES}`);
});


test('carga listado de pokemones con parametros definidos por el usuario', () => {
  (global.fetch as unknown as jest.Mock)(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r([]);
    });
    resolve({ json: () => jsonPromise });
  }));

  cargarPokemones(1, 15);

  expect(global.fetch)
    .toHaveBeenCalledTimes(1);
  expect(global.fetch)
    .toHaveBeenCalledWith(`${BASE_URL}?offset=1&limit=${15}`);
});
