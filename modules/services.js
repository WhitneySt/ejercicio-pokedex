import getData from "../helpers/getData.js";

const obtenerPokemons = async (url) => {
  try {
    const datos = await getData(url);
    return datos?.results;
  } catch (error) {
    console.error(error);
  }
};

const obtenerDetallesPokemons = async (listaPokemons) => {
  const detallesPokemons = [];
  try {
    for (const pokemon of listaPokemons) {
      const detalles = await getData(pokemon.url);

      detallesPokemons.push({
        id: detalles.id,
        nombre: pokemon.name,
        imagen: detalles?.sprites.other.home.front_default || null,
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    return detallesPokemons;
  }
};

const obtenerDetallePokemon = async (url, id = "0") => {
  try {
    const urlApi = `${url}${id}`;
    const datosPokemon = await getData(urlApi);
    return datosPokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {obtenerPokemons, obtenerDetallesPokemons, obtenerDetallePokemon}