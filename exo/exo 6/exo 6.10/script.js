// let arr3=[]

// let arr1=[10, 17, 9]
// const [a, b , c]= arr1
// console.log(arr1)

// let arr2=[10, 17, 9]
// const [d, e , f]= arr2
// console.log(arr2)

// arr3  = [a + d, b + e, c + f]
// alert(arr3)

let arr1=[10, 17, 9]
let arr2=[10, 17, 9]
let arr3=[]


for(let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i] + arr2[i]
}

alert(arr3)