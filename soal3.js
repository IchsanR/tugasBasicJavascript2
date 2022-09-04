/* Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan
nilaiAkhir (number), serta dataArray (array).
Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan
jumlah data dalam dataArray harus lebih dari 5.
Fungsi tersebut akan mencari data didalam dataArray yang
memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan
hasil pencarian dan menampilkannya ke layar/console.*/

const seleksiNilai = (awal, akhir, array) => {
  let hasil = [];

  array.sort((a, b) => a - b);
  if (awal > akhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }

  if (array.length < 5) {
    console.log("Array harus lebih dari 5");
  } else {
    for (let i = 0; i <= akhir; i++) {
      if (array[i] >= awal && array[i] <= akhir) {
        hasil.push(array[i]);
      }
    }
    if (hasil.length == 0) {
      hasil = "Tidak ada Nilai";
    }
  }
  console.log(hasil);
};

seleksiNilai(1, 22, [1, 4, 6, 23, 19]);
