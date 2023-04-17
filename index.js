const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*¿Que debén hacer?

🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:
* */

//a)  Las pizzas que tengan un id impar.

const IdPizza = [];

pizzas.forEach((pizzas) => {
  IdPizza.push(pizzas.id);
});

IdPizza.forEach((id) => {
  if (id % 2 == !0) {
    console.log(`Los id impares son ${id}`);
  }
});

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

const PrecioPizza = [];

pizzas.forEach((pizzas) => {
  PrecioPizza.push(pizzas.precio);
});

const Precio = PrecioPizza.some((numero) => numero < 600);
if (Precio === true) {
  console.log(
    `Sí, en nuestro menú contamos con pizzas que valen menos de $600`
  );
} else {
  console.log(`No, hay pizzas que vale menos de $600`);
}

//c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach((pizzas) => {
  console.log(
    `Nuestra oferta del día es ${pizzas.nombre} a tan solo : $${pizzas.precio}`
  );
});

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

const ArrayIngredientes = [];

pizzas.forEach((pizzas) => {
  ArrayIngredientes.push(pizzas.ingredientes);
});

ArrayIngredientes.forEach((ArrayIngredientes) => {
  console.log(`Nuestros ingredientes son  ${ArrayIngredientes}`);
});
