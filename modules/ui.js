export const pintarPokemons = (listaPokemons, contenedor) => {
  contenedor.innerHTML = "";
  listaPokemons.forEach((pokemon) => {
    const card = document.createElement("article");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");

    img.setAttribute("src", pokemon.imagen);
    img.setAttribute("alt", pokemon.nombre);
    h2.textContent = pokemon.nombre;
    card.classList.add("card");

    card.addEventListener("click", () => {
      sessionStorage.setItem("idPokemon", pokemon.id);
      window.location.href = "/pages/details.html";
    });

    figure.appendChild(img);
    card.appendChild(figure);
    card.appendChild(h2);
    contenedor.appendChild(card);
  });
};

export function pintarDetallesPokemon(datosPokemon, contenedor) {
  contenedor.innerHTML = "";
  const figure = document.createElement("figure");
  const imagen1 = document.createElement("img");
  const imagen2 = document.createElement("img");
  const h2 = document.createElement("h2");

  imagen1.setAttribute("src", datosPokemon.sprites.other.home.front_default);
  imagen1.setAttribute("alt", datosPokemon.name);

  imagen2.setAttribute(
    "src",
    datosPokemon.sprites.other.dream_world.front_default
  );
  imagen2.setAttribute("alt", `Segunda imágen: ${datosPokemon.name}`);
  h2.textContent = datosPokemon.name;

  figure.appendChild(imagen1);
  figure.appendChild(imagen2);
  contenedor.appendChild(h2);
  contenedor.appendChild(figure);
}
