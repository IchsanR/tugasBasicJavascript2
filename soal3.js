/* Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan
nilaiAkhir (number), serta dataArray (array).
Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan
jumlah data dalam dataArray harus lebih dari 5.
Fungsi tersebut akan mencari data didalam dataArray yang
memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan
hasil pencarian dan menampilkannya ke layar/console.*/

const seleksiNilai = (nilaiAwal, nilaiAkhir, array) => {
  let hasil = [];

  array.sort((a, b) => a - b);
  if (nilaiAwal > nilaiAkhir) {
    hasil = "Nilai akhir harus lebih besar dari nilai awal";
  } else if (array.length < 5) {
    hasil = "Array harus lebih dari 5";
  } else {
    for (let i = 0; i <= nilaiAkhir; i++) {
      if (array[i] >= nilaiAwal && array[i] <= nilaiAkhir) {
        hasil.push(array[i]);
      }
    }
    if (hasil.length == 0) {
      hasil = "Tidak ada Nilai";
    }
  }
  console.log(hasil);
};

seleksiNilai(3, 22, [1, 4, 6, 19, 18]);
seleksiNilai(71, 22, [2, 65, 6, 4, 19, 18]);
seleksiNilai(1, 10, [2, 65, 6, 4]);
seleksiNilai(18, 22, [2, 8, 6, 4, 10, 23]);
