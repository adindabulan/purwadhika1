// carilah angka yang bernilai genap yang ada didalam string
//ex. const stringNumber = '35912'
//    outpu = 'there is even number'

//ex. const stringNumber = '35917'
// output = 'there is no even number'


let stringNumber = '35912'
const isEven = 0

for (let i=0; i < stringNumber.length; i++){
    if (stringNumber % i == 0){
        isEven++
    }
}


if(isEven > 0 ) {
    console.log('there is even number')
}else{
    console.log('there is no even number')
}


//buatlah program untuk menentukan jumlah bilangan ganjil dan bilangan genap
//ex. const stringNum = '33124'
//    output : total even = 2, total odd = 3
//ex. const stringNum = '11'
//output: total even = 0, total odd = 2

let totalEven = 0;
let totalOdd = 0;

const stringNumb = "33124"
for(let i = 0; i <stringNumb.length; i++) {
    if(stringNumb[i] % 2 === 0) {
        totalEven += 1;
        continue;
    }
    totalOdd += 1;
}
console.log(`Total Event = ${totalEven} Total Odd = ${totalOdd}`)
// */

 //PALINDROME
 // susunan karakter katayang dibalik akan membentuk kata aslinya
 // ex. malam -> malam -> palindrome
 //     kota -> atok -> not palindrome
 //     katak -> katak -> palindrome

 let word1 = (12434).toString()

 
 for(let i = word1.length - 1; i >= 0; i--){
     console.log(word1[i])
 }

 