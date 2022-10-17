let arr=[]
arr[0] = 1
arr[1] = 1
console.log(arr[0], arr[1])



for(let i = 2; i <= 8; i++) {
    arr.push(arr[i-1] + arr[i-2])
    console.log(arr[i])
}