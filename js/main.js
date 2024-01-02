const main = document.querySelector("#main");
const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
const url = "https://pokeapi.co/api/v2/pokemon/";

const pokeLoop = async () => {
  for (let i = 1; i <= 151; i++) {
    const res = await fetch(url + i);
    const data = await res.json();
    //console.log(data);
    mostrarPokemon(data);
  }
};

pokeLoop();

const mostrarPokemon = (data) => {
  let tipos = data.types.map(
    (type) => `<p class="tipo ${type.type.name}">${type.type.name}</p>`
  );
  tipos = tipos.join("");

  let pokeId = data.id.toString();

  if (pokeId.length === 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
    pokeId = "0" + pokeId;
  }
  //console.log(pokeId);

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `<p class="pokemon-id-back">#${pokeId}</p>
                     <div class="pokemon-imagen">
                         <img src="${
                           data.sprites.other.dream_world.front_default
                         }"
                             alt="${data.name}">
                     </div>
                     <div class="pokemon-info">
                         <div class="nombre-contenedor">
                             <p class="pokemon-id"># ${pokeId}</p>
                             <h2 class="pokemon-nombre">${data.name}</h2>
                         </div>
                         <div class="pokemon-tipos">
                             ${tipos}

                         </div>
                         <div class="pokemon-stats">
                             <p class="stat">${data.height / 10} M height</p>
                             <p class="stat">${data.weight} kg</p>
                         </div>
                                             </div>`;
  listaPokemon.append(div);
};
