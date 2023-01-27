const sentence = "Saya sangat senang mengerjakan soal algoritma"


var test = sentence.split(" ");

var hasil = 0
var terpanjang 

for(let i = 0; i < test.length; i++) {
    if (test[i].length > hasil) {
        hasil = test[i].length
        terpanjang = test[i]
    }
}

console.log('kalimat terpanjang adalah =', terpanjang);


