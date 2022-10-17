let arr=[]

arr[0] = 1
console.log(arr[0])

for(let i=1; i < 7 ; i++) {
    
arr.push(arr[i-1]+2)
console.log(arr[i])
}
