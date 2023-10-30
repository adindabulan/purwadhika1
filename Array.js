// ARRAY
// tipe data yang menampung tipe data lainya

// [..., ..., ...,]
//[index ke-0, index ke-1, index ke-2, dst]

const students = ['raihan', 'feri', 'aboy']
const data = ['abc', 123, true, false, null, undefined] // bisa dicombine, tidka harus seragam

// create red update delete (CRUD)
//creatE
const campusPwd = ['BSD', 'JKT', 'BDG']

//read
 campusPwd //['BSD', 'JKT', 'BDG']
 campusPwd[2] // 'BSD'
 console.log(campusPwd)

 //update 
 let name = 'ryan' //pake let karena value nya akan diubah. 
 name = 'defryan'
 
 const example = ['yuta', 'taeyong', 'mark']
 example[2] = 'lucas' //array valuenya masih bisa diubah meskipun pakai const

 const studentsName = ['kiki', 'bulan', 'rahma']
 studentsName[0] = 'defryan' 
 console.log(studentsName)
 studentsName[2] = 'aboy'
 console.log(studentsName)
 studentsName[3] = 'karta' //menambahkan data baru di index ke 3
console.log(studentsName)

//delete
delete studentsName[0]
console.log(studentsName) //index ke 0 bakal muncul "empty item"

//method
// - push : menambahkan data di index paling akhir
const arrNumber = [1, 2, 3]
arrNumber.push(4, 5, 'abc')
console.log(arrNumber)

// -unshift : menambahkan data di index paling awal
const alphabets = ['a', 'b', 'c,']
alphabets.unshift('d', 'e')
console.log(alphabets)

// - pop: menghapus data di index paling akhir
const campusPwdNew = ['BSD', 'JKT']
campusPwdNew.pop()
console.log(campusPwdNew) 

//shift: menghapus data di dindex paling awal
const arrRandom =  [1, true, 'abd']
arrRandom.shift()
console.log(arrRandom)

//splice: bisa digunakan untuk menghapus atau menambah
//variableName.splice(index, howMany,ToDelete, items)
// 'menghapus using slice'
const programming = ['JS', 'PH', 'Phyton']
programming.splice(0,2)
console.log(programming)

// 'menambah using splice'
const dataRandom = [1, true, 'a']
dataRandom.splice(1, 2, 'B, D')
console.log(dataRandom)



//ADD DATA MANUAL vs SPLICE
//manual
const arrNumberss = [1,2,3]
//arrNumberss[5] = 10 --> manual
arrNumberss.splice(5, 0, 'BCD') // --> splice
console.log(arrNumberss)





