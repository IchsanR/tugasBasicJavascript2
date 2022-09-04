/* Buatlah program searching nama yang dapat dibatasi jumlah
outputnya yang menerapkan callback function dengan data
sebagai berikut:
const name = [
"Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"]
Contoh:
searchName(“an”, 3, callback)

Output:
[“Alexandra”,”Amanda”,”Angela”] */

const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function filterItems(arr, query, lim) {
  const a = arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  let b = lim;

  return console.log(a.slice(0, b));
}

filterItems(name, "el", 3);
