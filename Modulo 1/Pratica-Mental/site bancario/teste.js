var tot = 240
var nota100 = 0
var nota20 = 0


if (tot >= 100){
    while (tot > 0){
        if (tot > 100){
            tot -= 100
            nota100++
        }
        if(tot > 20){
            tot -= 20
            nota20++
        }
    }
}
console.log(nota100)