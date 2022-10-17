let position = 0
let max = 0
let i = 1
let x = parseInt(prompt("rentrez autant de chiffre que vous voulez"))

while(x !==0 ) {
    x = parseInt(prompt("rentrez autant de chiffre que vous voulez"))
    if(x > max) {
        max = x
        position = i
    } i++
} alert("la valeur max est " + max + " en position " + position)