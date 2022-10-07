"use strict";

const data = pokemons.splice(0, 150);
const newData = data.map((item, index, array) => {
  return {
    image: item.img,
    name: item.name,
    type: item.type,
    weight: item.weight,
    age: item.candy_count,
  };
});
console.log(newData);

newData.forEach((e) => {
  const card = createElement(
    "div",
    "card shadow m-2 border border-dark border-2 ",
    `
          <img src="${e.image}" alt="${e.name}" width="157" height="157" class="card-top-img image">
          <div class="card-body">
          <h3 class="title">${e.name}</h3>
          <span class="text d-block">${e.type}</span>
          </br>
          <strong class="words me-4">${e.weight}</strong>
          <strong class="words">${e.age} age</strong>
          </div>
          `
  );

  $(".wrapper").appendChild(card);
});

const types = [];
function type() {
  newData.forEach((item) => {
    item.type.forEach((e) => {
      if (!types.includes(e)) {
        types.push(e);
      }
    });
  });
}

type();

console.log(types);

types.forEach((e) => {
  const option = createElement("option", "option-item", e);
  $("#type").appendChild(option);
});

const filterTypes = types.filter((e) => {
  return e.type === "Grass";
});
