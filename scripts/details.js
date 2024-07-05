import { URL_API } from "../modules/endpoints.js";
import { obtenerDetallePokemon } from "../modules/services.js";
import { pintarDetallesPokemon } from "../modules/ui.js";


const idPokemon = sessionStorage.getItem("idPokemon");
const contenedorDetalles = document.querySelector("main");
const botonRegresar = document.getElementById("back");

document.addEventListener("DOMContentLoaded", async () => {
  const pokemon = await obtenerDetallePokemon(URL_API, idPokemon);
  console.log(pokemon);
  pintarDetallesPokemon(pokemon, contenedorDetalles);
});

botonRegresar.addEventListener("click", () => {
  window.location.href = "../index.html";
});
