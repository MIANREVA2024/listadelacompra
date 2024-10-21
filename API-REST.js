const BASEAPI = "https://6716056f33bc2bfe40bc0567.mockapi.io";
export async function APIServices() {
  const response = await fetch(BASEAPI + "/items");
  return await response.json();
}
