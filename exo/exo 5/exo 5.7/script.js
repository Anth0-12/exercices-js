let position = 0
let max = 0

for(let i = 0; i <= 5; i++) {
    let x = parseInt(prompt("donnez 5 chiffres"));
    if(x > max) {
        max = x
        position = i
    }
    
} alert("la valeur max est "+ max + " en position "+ position)