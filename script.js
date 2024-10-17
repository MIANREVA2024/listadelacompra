let items = [
  {
    name: "Orange",
    bought: false,
  },
  {
    name: "Banana",
    bought: false,
  },
  {
    name: "Apple",
    bought: true,
  },
];
const shopListDOM = document.getElementById("listId");

function printList() {
  shopListDOM.innerHTML = ``;
  for (let index = 0; index < items.length; index++) {
    shopListDOM.innerHTML += `<li><input id= "check" type="checkbox" ${
      items[index].bought ? "checked" : " "
    }  onchange ="checkList()" /> ${items[index].name} 
    
    <span onclick="deleteItemFromList('${
      items[index].name
    }')" class="item-delete-btn">x</span></li>`;
  }
}
function checkList() {
  console.log("check");
  let isCheckedDOM = document.getElementById("check");

  const isChecked = isCheckedDOM.checked;

  for (index of items) {
    if (isChecked == false) {
      console.log("es falso");
      // index.bought == false;
    } /* else {
      index.bought == true;
    }*/
  }
  printList();
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
