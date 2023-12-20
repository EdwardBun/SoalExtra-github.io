let Vip = parseFloat(prompt("Tiket Vip yang terjual"))
let Eks = parseFloat(prompt("Tiket Eksekutif yang terjual"))
let Eko = parseFloat(prompt("Tiket Ekonomi yang terjual"))


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

document.write(`Jadi keuntungan per kelas tiket adalah: ${UntungVip}% Untuk Kelas Vip ${UntungEks}% Untuk Kelas Eksekutif ${UntungEko}% Untuk Kelas Ekonomi`)
document.write`<br>`
document.write(`Jadi Keuntungan Keseluruhan adalah: ${JumlahUntung}%`)
document.write`<br>`
document.write(`Jadi Jumlah tiket perkelas adalah: ${Vip} Untuk kelas Vip ${Eks} Unntuk Kelas Eksekutif ${Eko} Untuk kelas Ekonomi`)
document.write`<br>`
document.write(`Jadi Jumlah tiket Keseluruhan adalah:${JumlahTiket}`)