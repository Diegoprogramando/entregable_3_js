const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const inputId = document.getElementById("inputId");
const buscarPizzaButton = document.getElementById("buscarPizza");
const containerPizza = document.getElementById("containerPizza");

function renderPizza(pizza) {
  containerPizza.innerHTML=`
  <div class="card-pizza">
  <h3>${pizza.nombre}</h3>
  <img src="${pizza.imagen}" alt="${pizza.nombre}"></>
  <p>Precio: $${pizza.precio}</p>
  </div>
  `
}

function renderError(message) {
  containerPizza.innerHTML=`
  <p class="error-mensaje">${message}</p>
  `
}


function buscarPizza() {
  const pizzaId = parseInt(inputId.value);


  if(isNaN(pizzaId)) {
    renderError("404 - Recurso no encontrado");
    return;
  }

  const pizza = pizzas.find(p => p.id === pizzaId);

  if(pizza) {
    renderPizza(pizza)
    localStorage.setItem("PizzaPedida", JSON.stringify(pizza));
  }else {
    renderError("404 - Recurso no encontrado");
  }

}

buscarPizzaButton.addEventListener("click", buscarPizza);

window.addEventListener("DOMContentLoaded",()=>{
  const pizzaSeleccionada = localStorage.getItem("PizzaPedida");
  if(pizzaSeleccionada) {
    const pizza = JSON.parse(pizzaSeleccionada);
    renderPizza(pizza);
  }
})
