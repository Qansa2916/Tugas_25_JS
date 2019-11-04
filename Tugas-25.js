function tugas25() {
    var number = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    console.log("Sebelumnya: ", number);
    var urut = number.sort();
    console.log("Ascending: ", urut);
    console.log("Descending: ", number.reverse());
    console.log("Filtrer > 10 ", number.filter(number => number > 10));


}
tugas25();