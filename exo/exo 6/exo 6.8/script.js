let nombre = parseInt(prompt("Donner un nombre de valeur à rentrer"))
let valeur
let arr=[]


for(let i = 0; i < nombre; i++) {
     valeur = prompt(nombre)
    arr.push(valeur)
} alert("Votre tableau contient " + nombre + " nombre(s) qui sont : " + arr)


let positif = arr.filter((num)=>num>0)
let negatif = arr.filter((num)=>num<0)

alert("Votre tableau contient " + positif.length + " valeur(s) positive(s) : " + positif)
alert("Votre tableau contient " + negatif.length + " valeur(s) négative(s) : " + negatif)