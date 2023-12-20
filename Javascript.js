let Vip = 50
let Eks = 50
let Eko = 50


//VIP//
if (Vip >= 35) {
    Untung = 25
}else if (Vip >= 20 && Vip <35 ){
    Untung = 15
}else {
    Untung = 5
}

//Eks//
if (Eks >= 40) {
    Untung1 = 20
}else if (Eks >= 20 && Eks <40 ){
    Untung1 = 10
}else {
    Untung1 = 2
}

//Eko//
if (Eko >= 0) {
    Untung3 = 7
}

let UntungVip = Vip * Untung
let UntungEks = Eks * Untung1
let UntungEko = Eko * Untung3
let JumlahUntung = UntungVip + UntungEks + UntungEko
let JumlahTiket = Vip + Eks + Eko

console.log(`Jadi keuntungan per kelas tiket adalah: ${UntungVip}% Untuk Kelas Vip ${UntungEks}% Untuk Kelas Eksekutif ${UntungEko}% Untuk Kelas Ekonomi`)
console.log(`Jadi Keuntungan Keseluruhan adalah: ${JumlahUntung}%`)
console.log(`Jadi Jumlah tiket perkelas adalah: ${Vip} Untuk kelas Vip ${Eks} Unntuk Kelas Eksekutif ${Eko} Untuk kelas Ekonomi`)
console.log(`Jadi Jumlah tiket Keseluruhan adalah:${JumlahTiket}`)