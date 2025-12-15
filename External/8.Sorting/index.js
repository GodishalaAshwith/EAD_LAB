const numbers = [15,2,45,7,44,4,53,1]

const numbersAsc = [...numbers].sort((a,b) => a-b)
const numbersDsc = [...numbers].sort((a,b) => b-a)

console.log(numbersAsc)
console.log(numbersDsc)