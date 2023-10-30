// carilah angka yang bernilai genap yang ada didalam string
//ex. const stringNumber = '35912'
//    outpu = 'there is even number'

//ex. const stringNumber = '35917'
// output = 'there is no even number'


let stringNumber = '35912'
let evenNumberCount = 0

for (let i=0; i < stringNumber.length; i++){
    if (stringNumber[i] % 2 === 0){
        evenNumberCount++
    }
}


if(evenNumberCount > 0 ) {
    console.log(`there is ${evenNumberCount} even number`)
}else{
    console.log('there is no even number')
}