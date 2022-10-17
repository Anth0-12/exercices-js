let prix = 20
let payé = parseInt(prompt("Donnez une somme"))
let diffPrixPayé = payé - prix
let billetDix = 0
let billetCinq = 0
let piece = 0

while(diffPrixPayé >= 10) {
    diffPrixPayé = diffPrixPayé - 10
    billetDix++
} 
if(diffPrixPayé >= 5) {
    diffPrixPayé = diffPrixPayé - 5
    billetCinq++
}
piece = diffPrixPayé

alert("Rend " + billetDix + " billet(s) de 10€, " + billetCinq + " billet(s) de 5€, " + piece + " piece(s) de 1€")

