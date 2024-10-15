// Esta lista es la que de debe mostrar en el navegador
let items = ["Orange", "Apple", "Banana"];

// Función para pintar la lista en el navegador
function printList() {
  const shopListDOM = document.getElementById("listId");

  shopListDOM.innerHTML= ``;

  for (let index = 0; index < items.length; index++) {
    shopListDOM.innerHTML += `<li> ${items[index]} <span class="item-delete-btn">x</span> </li>`;
  } 
} 


// Función para eliminar un item de la lista
function deleteItemFromList(item) {}

// Función para agregar un item a la lista
function addItemToList() {}

// Función principal - Aquí empieza la aplicación
function main() {
  printList();
}

// Llamada a la función principal
main();
