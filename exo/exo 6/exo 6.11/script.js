let arr1=[4, 8, 7, 12]
let arr2=[3, 6]

let total = 0


for(let i = 0; i < arr1.length; i++) {
    // total1 += arr1[i] * arr2[0]

    for(let j = 0; j < arr2.length; j++) {
    total += arr1[i] * arr2[j]
    }
}
alert(total)