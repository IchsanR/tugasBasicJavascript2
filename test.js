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
  callback(res, num);
};
hasil = (res, num) => {
  console.log(res.slice(0, num));
};

userInput("an", 4, hasil);
