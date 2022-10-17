let arr=[]
let total = 0


for(let i=0; i<9; i++) {
    let note = parseInt(prompt("rentrez une valeur"))
    arr.push(note)
    total += note
}

let result = total/arr.length
alert(arr)
alert(result)