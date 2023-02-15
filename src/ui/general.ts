export function actualizarTextoAyuda(texto: string) {
  const $ayuda = document.querySelector('#ayuda')!;
  $ayuda.textContent = texto;
}

export function mostrarTotalPokemones(totalPokemones : number) {
  document.querySelector('#total-pokemones')!.textContent = `${totalPokemones}`;
}
