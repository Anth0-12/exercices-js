let nombre = parseInt(prompt("Donner un nombre de valeur à rentrer"))
let valeur
let arr=[]


for(let i = 0; i < nombre; i++) {
     valeur = parseInt(prompt(nombre))
    arr.push(valeur)
} alert("Votre tableau contient " + nombre + " nombre(s) qui sont : " + arr)


let valeurMax = Math.max(...arr)
let IndexPosition = arr.indexOf(valeurMax)

alert("La valeur max est " + valeurMax + " qui se situe à l'index " + IndexPosition)