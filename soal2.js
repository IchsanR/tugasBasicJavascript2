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

const userInput = (query, num, callback) => {
  const res = name.filter((cariNama) =>
    cariNama.toLowerCase().includes(query.toLowerCase())
  );
  return callback(res, num);
};

const hasil = (res, num) => {
  console.log(res.slice(0, num));
};

userInput("an", 3, hasil);
