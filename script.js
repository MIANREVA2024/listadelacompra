let items = ["Orange", "Apple", "Banana"];
const shopListDOM = document.getElementById("listId");

function printList() {
  shopListDOM.innerHTML = ``;
  for (let index = 0; index < items.length; index++) {
    shopListDOM.innerHTML += `<li> ${items[index]} <span onclick="deleteItemFromList('${items}')" class="item-delete-btn">x</span> </li>`;
  }
}

function deleteItemFromList(element) {
  items.splice(element, 1);
  shopListDOM.innerHTML = ``;
  printList();
}

function addItemsToList() {
  let newInputDOM = document.getElementById("inputId");
  const newItem = newInputDOM.value.trim();
  newInputDOM.value = "";
  
  if (newItem == "") {
    alert("introduzca caracteres válidos");
    return;
  }
  
  if (newItem.length >= 26) {
    alert("Máximo 25 caracteres");
    return;
  }
  
  for (const element of items) {
    if (newItem.toLowerCase() == element.toLowerCase()) {
      alert("No puede estar repetido");
      return;
    }
  }
  
  const wordList = newItem.split(" ");
  for (let index = 0; index < wordList.length; index++) {
    wordList[index] =
      wordList[index].charAt(0).toUpperCase() +
      wordList[index].slice(1).toLowerCase();
  }
  items.push(wordList.join(" "));
  
  printList();
}

// Función principal - Aquí empieza la aplicación
function main() {
  printList();
}

// Llamada a la función principal
main();
