import { obtenerPokemons, obtenerDetallesPokemons } from "../modules/services.js";
import { pintarPokemons } from "../modules/ui.js";
import { URL_API } from "../modules/endpoints.js";

const contenedorPokemons = document.querySelector("main");

document.addEventListener("DOMContentLoaded", async () => {
  const pokemons = await obtenerPokemons(URL_API);
  const detallesPokemons = await obtenerDetallesPokemons(pokemons);
  pintarPokemons(detallesPokemons, contenedorPokemons);
});
