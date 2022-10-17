let arr=[]
let total = 0


for(let i=0; i<5; i++) {
    let note = parseInt(prompt("rentrez une valeur"))
    arr.push(note)
    total += note
}

let result = total/arr.length
alert(arr)
alert(result)

let noteSuperieur = arr.filter((num)=>num>result)

alert("Les notes de la classe sont " + arr + ", la moyenne est de " + result + ", les notes supérieures à la moyenne sont " + noteSuperieur)