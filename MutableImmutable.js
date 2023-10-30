//MUTABLE: non-primitive
// variable yang valuenya bisa berubah
let arr = [1, 2, 3] // [index-0, index-1, index-2]
let newArr = arr // newArr = [1, 2, 3]
newArr[1] = 'A'
console.log(arr)
console.log(newArr)

//spread operator...
let students = ['kiki', 'aboy', 'immanuel']
let newStudents = [...students]
newStudents[0] = 'defryan'
console.log(students)
console.log(newStudents)

//IMMUTABLE: primitive
// variable yang valuenya tidak bisa berubah
let name = 'Raihan'
let newName = name  // newName = 'raihan'
newName = 'kiki' // newName = 'raihan'
console.log (name)
console.log (newName)

