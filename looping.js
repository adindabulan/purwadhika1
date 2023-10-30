//LOOPING -> perulangan

//while 
/* while (condition){
    block of code
}
*/
let start = 1 // 1---> 2; 2 ---> 3---> 4
while(start <= 3){// 1 <= 3? true---> 2 <=3? true---> 3 <= 3? true---> 4 <= 3? false
console.log('hello world!') // 1x---> 2x ---3x
start++
}
let initial = 1
while (initial <3){//true---> false
console.log ('hai')
initial += 10
}


// do while
/* do{
    block of code
}while(condition)
*/
let angka = 1 
do{
    console.log(angka)
    angka++
}while(angka <= 3)

let angka2 = 100
do{
    console.log(angka2)
    angka2++
}while(angka2 < 10)

// for loop
/*
for(start; condition; exitWay){
    block of code 
}
*/
for(let i =1; i <= 3; i++){
    console.log(i)
}
// EXERCISE buatlah console.log untuk menampilkan angka dari 10-1
for(let abc = 10; abc >= 1 ; abc--){
    console.log(abc)
}

//scope
//var:  tidak mengenal scope
//let & const: mengenak scope 

//VAR
{
    var name = 'raihan'
}
console.log(name)

//let & const
// declare di global scope bisa diakses diloca scope
/*
{
    const number = 10
}
console.log(number)
*/

{
    const point = 100
    {
        console.log(point)
    { 
    console.log(point)
}
}
}

