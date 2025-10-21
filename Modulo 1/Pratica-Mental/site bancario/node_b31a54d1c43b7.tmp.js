var tot = 240
var nota100 = 0

if (tot >= 100){
    while (tot > 0){
        if (tot > 100){
            tot /= 100
            nota100++
        }
    }
}

console.log(nota100)