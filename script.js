// Esta lista es la que de debe mostrar en el navegador
let items = ["Orange", "Apple", "Banana"];

// Función para pintar la lista en el navegador
function printList() {
  const shopListDOM = document.getElementById("listId");
  shopListDOM.innerHTML = ``;
  for (let index = 0; index < items.length; index++) {
    shopListDOM.innerHTML += `<li> ${items[index]} <span class="item-delete-btn">x</span> </li>`;
  }
}
// Función para eliminar un item de la lista
function deleteItemFromList(item) {}

// Función para agregar un item a la lista
//seleccionamos el input
// añadir a la lista el valor del input
//actualizar la lista enel DOM
// añadir como se ejecuta listener o meter los   en html en el button onclick ="addItemsToList() {
// console.log("add item")"

function addItemsToList() {
  // Obtiene el valor del campo de texto
  let newInputDOM = document.getElementById("inputId");
  const newItem = newInputDOM.value.trim();
  newInputDOM.value = "";
  // newInputDOM.value = newInputDOM.value.substring(0,24)
  if (newItem == "") {
    alert("introduzca caracteres válidos");
    return;
  }
  if (newItem.length >= 26) {
    alert("Máximo 25 caracteres");
    return;
  }

  //if (items.includes(newItem.filter())) {
    
    if (newItem !== '') {
        if (!items.includes(newItem)) {
            items.push(newItem);
            mostrarLista();
            newItemInput.value = '';
        } else {
            alert(`El newItem "${newItem}" ya está en tu lista.`);
        }
    alert("Se encontraron valores duplicados");
    return;
  }
  const wordList = newItem.split(" ");
  for (let index = 0; index < wordList.length; index++) {
    wordList[index] =
      wordList[index].charAt(0).toUpperCase() +
      wordList[index].slice(1).toLowerCase();
  }
  console.log(wordList);

  items.push(wordList.join(" "));
  printList();
}

// Función principal - Aquí empieza la aplicación
function main() {
  printList();
}

// Llamada a la función principal
main();
