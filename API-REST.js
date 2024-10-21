export async function getItemsFromApi() {
  const response = await fetch(
    "https://6716056f33bc2bfe40bc0567.mockapi.io/items"
  );
  const itemsData = await response.json();
  return itemsData;
}
