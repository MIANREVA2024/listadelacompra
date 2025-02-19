const baseAPI = "https://6716056f33bc2bfe40bc0567.mockapi.io/items";
export async function getItemsFromApi() {
  const response = await fetch(baseAPI);
  const itemsData = await response.json();
  return itemsData;
}

export async function createDataApi(newItem) {
  const response = await fetch(baseAPI, {
    method: "POST",

    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  });
  const newItemAPI = await response.json();
  return newItemAPI;
}

export async function deleteDataFromApi(itemId) {
  await fetch(baseAPI + "/" + itemId, {
    method: "DELETE",
  });
}

export async function editBoughtFromApi(item) {
  const response = await fetch(baseAPI + "/" + item.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}
