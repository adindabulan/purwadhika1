//FUNCTION
//temoat untuk menyimpan baris code

// -function declaration



//1. build
function showConsole(){
    console.log('hello')
}

//2. call
showConsole()

//hoisting --> call dulu baru kita build
Penjumlahan()
Penjumlahan()
Penjumlahan()
Penjumlahan()
Penjumlahan()
Penjumlahan()
function Penjumlahan(){
    console.log(1 + 1)
}

// -  function expression: function yang dimasukkan kedalam variable
const Pengurangn = function(){ //function()---> anonymus function
    console.log(1-1)
}
Pengurangn()

// - arrow function
const Perkalian = () => {
    const num1 = 5
    const num2 = 10
    
    console.log(num1 * num2)
}

Perkalian()

// FUNCTION WITH PARAMETER
const Pembagian = (num1, num2) => {
    console.log(num1 / num2)
}
Pembagian(10,5)

function Perkalian(num1 * num2){
    console.log(num1 * num2)


}
Perkalian(3,3)

//function with return
const Penjumlahan1 = (num1, num2) => {
    return num1 + num2
}
console.log(Penjumlahan1(3, 3) + 3)
console.log(Penjumlahan1())

//function with rest parmeter

// RECURSIVE FUNCTION
const countDown = (num) => {
    console.log(num)
    num--

    if(num > 0){
        return countDown(num)
    }
    return num
}

console.log(countDown(5))

//CLOSURE FUNCTION
const greeting = () => {
    const name = 'defryan'
    const showGreeting()
    function showGreeting(){
        console.log(`welcome, ${name} `)
    }

    }

greeting()