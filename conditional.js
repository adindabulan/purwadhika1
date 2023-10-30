//CONDITIONAL STATMENT
//pengkondisian

//if 
/*
if(condition){ // apabila condition terpenuhi maka 
    block of code 
}
    */
   
const pointStudent = 80
if (pointStudent > 70) { //80 > 70? true
console.log('student lulus!')
  }

  if ('abc' = 'abc'){ // false
console.log ('sama!')
}

// if - else ---> else sebagai deafult output apabila 
if (50 < 80) {
    console.log('running') 
}else{
    console.log('error')
}

// if--else if--else
const = nilaiSiswa1 = 75
if (nilaiSiswa1 > 90) { // false 
console.log('lulus baik')
}else if (nilaiSiswa1 > 74) { // true
    console.log('lulus bagus')
}else{

}

// ternary operator 
/*
condition?  block of code if conditon === true : block of code if condition === false
*/
//ex. saya ingin memvalidasi panjang input dari form user dengan 2 kondisi apabila
//   jumlah karatker > 19 ---> register failed
//   jumlah karater  < 20 ---> register success
const formUser = 'defryan@gmail.com'

if(formUser.length) > 19 {
    console.log('register failed')
}else{ 
    console.log('register failed')
}else{
    console.log('register success')

}

formUser.length > 19? console.log('register failed') : console.log('register success') //ternary opertor
const point = 70
point > 90? 
console.log('nilai anda baik') :
point > 70?
console.log('nilai anda cukup') : console.log('nilai anda kurang')


