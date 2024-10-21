import { getItemsFromApi } from "./API-REST.js";

let items = [
  {
    name: "Orange",
    bought: true,
    id: "20",
  },
  {
    name: "Banana",
    bought: false,
    id: "21",
  },
  {
    name: "Apple",
    bought: false,
    id: "22",
  },
];

const shopListDOM = document.getElementById("listId");

function printList() {
  shopListDOM.innerHTML = ``;
  for (let index = 0; index < items.length; index++) {
    shopListDOM.innerHTML += `<li><input type="checkbox" ${
      items[index].bought ? "checked" : " "
    }  onchange ="checkList('${items[index].name}')" /> 
    <span ${items[index].bought ? "class='cross'" : " "}>${
      items[index].name
    } </span>
    
    <span onclick="deleteItemFromList('${
      items[index].name
    }')" class="item-delete-btn">x</span></li>`;
  }
}

function checkList(checkName) {
  for (const item of items) {
    if (item.name == checkName) {
      item.bought = !item.bought;
    }
  }
  printList();
}

function deleteItemFromList(itemsName) {
  items = items.filter((e) => itemsName != e.name);

  printList();
}

async function addItemsToList() {
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

  const newItemApi = await createDataApi(newItem);
  items.push(newItemApi);

  printList();
}

async function createDataApi(newItem) {
  const response = await fetch(
    "https://6716056f33bc2bfe40bc0567.mockapi.io/items",
    {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }
  );
  const newItemAPI = await response.json();
  return newItemAPI;
}

// Función principal - Aquí empieza la aplicación
async function main() {
  items = await getItemsFromApi();
  console.log(items);
  printList();
}

// Llamada a la función principal
main();

window.addItemsToList = addItemsToList;
window.checkList = checkList;
window.deleteItemFromList = deleteItemFromList;
