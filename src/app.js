/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let btnDraw = document.querySelector(".draw");
let btnBubble = document.querySelector(".bubblesort");
let btnSelect = document.querySelector(".selectsort");

btnDraw.addEventListener("click", function(e) {
  e.preventDefault();
  let input = document.querySelector(".input");
  let cantidad = input.value;
  let desordenado = document.querySelector(".desordenado");
  let cartas = generarCartas(cantidad);
  insertarCartas(cartas, desordenado);

  btnBubble.addEventListener("click", function(e) {
    e.preventDefault();
    let ordenado = document.querySelector(".ordenadoBubble");
    let cartasOrdenadas = bubbleSort(cartas);
    insertarCartas(cartasOrdenadas, ordenado);
  });
  btnSelect.addEventListener("click", function(e) {
    e.preventDefault();
    let ordenado = document.querySelector(".ordenadoSelect");
    let cartasOrdenadas = selectSort(cartas);
    insertarCartas(cartasOrdenadas, ordenado);
  });
});

function generarCarta() {
  var figuras = ["♦", "♥", "♠", "♣"];
  var numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  var indiceFigura = Math.floor(Math.random() * figuras.length);
  var indiceNumero = Math.floor(Math.random() * numeros.length);

  if (indiceFigura <= 1) {
    figura.style.color = "red";
    figuraInv.style.color = "red";
    numero.style.color = "red";
  }

  let carta =
    '<div class="carta bg-white d-flex flex-column justify-content-between"><div class="figura"><h1>' +
    figuras[indiceFigura] +
    '</h1></div><div class="numero d-flex justify-content-center"><h1>' +
    numeros[indiceNumero] +
    '</h1></div><div class="figura invertida float-right"><h1>' +
    figuras[indiceFigura] +
    "</h1></div></div>";

  return carta;
}

function generarCartas(cantidad) {
  const figuras = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let arreglo = [];
  for (let i = 0; i < cantidad; i++) {
    let nuevaCarta = {};
    let randomFigura = figuras[Math.floor(Math.random() * figuras.length)];
    let valorNumero = Math.floor(Math.random() * numeros.length);
    let randomNumero = numeros[valorNumero];
    nuevaCarta = {
      figura: randomFigura,
      numero: randomNumero,
      valor: valorNumero,
      color: ""
    };
    if (randomFigura == "♦" || randomFigura == "♥") {
      nuevaCarta.color = "text-danger";
    } else {
      nuevaCarta.color = "text-dark";
    }

    arreglo.push(nuevaCarta);
    console.log(arreglo);
  }
  return arreglo;
}

function insertarCartas(arr, contenedor) {
  contenedor.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let carta =
      '<div class="carta bg-white d-flex flex-column ' +
      arr[i].color +
      ' justify-content-between"><div class="figura"><h1>' +
      arr[i].figura +
      '</h1></div><div class="numero d-flex justify-content-center"><h1>' +
      arr[i].numero +
      '</h1></div><div class="figura invertida ' +
      arr[i].color +
      ' float-right"><h1>' +
      arr[i].figura +
      "</h1></div></div>";
    contenedor.innerHTML += carta;
  }
}

const bubbleSort = arr => {
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (arr[index].valor > arr[index + 1].valor) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--;
  }
  return arr;
};

const selectSort = arr => {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length - 1; i++) {
      if (arr[min].valor > arr[i].valor) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
  }
  return arr;
};
