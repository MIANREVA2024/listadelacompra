let items = [
  {
    name: "orange",
    bought: false,
  },
  {
    name: "banana",
    bought: false,
  },
  {
    name: "apple",
    bought: false,
  },
];
const shopListDOM = document.getElementById("listId");

function printList() {
  shopListDOM.innerHTML = ``;
  for (let index = 0; index < items.length; index++) {
    shopListDOM.innerHTML += `<li><label><input type="checkbox"/> ${items[index].name} </label>
    
    <span onclick="deleteItemFromList('${items[index].name}')" class="item-delete-btn">x</span></li>`;
  }
}

function deleteItemFromList(itemsName) {
  items = items.filter((e) => itemsName != e.name);

  printList();
}

function addItemsToList() {
  let newInputDOM = document.getElementById("inputId");
  const newItemName = newInputDOM.value.trim();
  newInputDOM.value = "";

  if (newItemName == "") {
    alert("introduzca caracteres válidos");
    return;
  }

  if (newItemName.length >= 26) {
    alert("Máximo 25 caracteres");
    return;
  }

  for (const element of items) {
    if (newItemName.toLowerCase() == element.name.toLowerCase()) {
      alert("No puede estar repetido");
      return;
    }
  }

  const wordList = newItemName.split(" ");
  for (let index = 0; index < wordList.length; index++) {
    wordList[index] =
      wordList[index].charAt(0).toUpperCase() +
      wordList[index].slice(1).toLowerCase();
  }
  let newItem = {
    name: wordList.join(" "),
    bought: false,
  };

  items.push(newItem);
  console.log(items);
  printList();
}

// Función principal - Aquí empieza la aplicación
function main() {
  printList();
}

// Llamada a la función principal
main();
