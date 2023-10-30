// buatlah program untuk menampilkan setiap character yang ada didalam variable menggunakan console.log
//ex. input = 'pwdk'
/* output = 
p
w
d
k
*/

const input1 = 'pwdk'
for(let i=0; i < input1.length; i++){
    console.log(input1[i])
}

// buatlah program untuk menampilkan setiap angka pada sebuah data bertipe data number 
//ex. input: 62857853331
/*outuput: 
6
2
8
*/

let num = 62857853331
num = num.toString()
for(let i=0; i < num.length; i++){
    console.log(num[i])
}

//1.covert celcius to fahrenheit
let c = 60;
let f = 0;
f = (c * (9/5) + 32 )
console.log("the value of the temperature in fahrenheit is " + f)

//2. 
// program to check if the number is even or odd
const number = 25

if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}                                        
const number2 = 2
if(number2 % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

//3. 
const numberPrime = 15;
let isPrime = true;

// check if number is equal to 1
if (numberPrime === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (numberPrime > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < numberPrime; i++) {
        if (numberPrime % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${numberPrime} is a prime number`);
    } else {
        console.log(`${numberPrime} is a not prime number`);
    }
} else {

}

//4. find the sum of the number
const = 10
let total = 0

for(let i=1; i <= n; i++){
    total += 1
}
console.log(total)

//5. factorial
const numbb = 4
let totalFact = 0
 for(let i =numbb; i > 0; i--){
    totalFact *= i
 }
 console.log(totalFact)

 //6. FIBONACCI

 const nFibo = 15
 let firstFibo = 0
 let secondFibo = 1

 for(let i = 2; i <= nFibo; i++){
    let nextFibo = firstFibo + secondFibo
    firstFibo = secondFibo
    secondFibo = nextFibo
 }
console.log(secondFibo)