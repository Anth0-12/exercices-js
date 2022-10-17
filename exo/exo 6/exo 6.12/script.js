let nombre = parseInt(prompt("Donner un nombre de valeur à rentrer"))
let valeur
let arr=[]

let arr2=[]

for(let i = 0; i < nombre; i++) {
     valeur = parseInt(prompt(nombre))
    arr.push(valeur)
    arr2.push(arr[i]+1)


} alert(arr2)
