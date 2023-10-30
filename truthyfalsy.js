//TRUTHY FALSY--> nilai non boolean yang dikonveriskan menjadi nilai bolean

//falsy : 0, " ", null, undefined, NaN
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

//truthy: selain 0, " ", null, undefined, NaN
console.log(Boolean('a'))
console.log(Boolean(1))



//case. validasi inputan dari luar, apabila apabila kosong maka munculkan pesan eror. apabila inputan ada maka  munculkan pesan sukses.
const input = 'a'
if(input === '' ){
    console.log('error')
}else{
    console.log('succes')
}

// case.  buatlah validasi input dengan ketentuan:
//        -apabila jumlah karakter 