// break & continue 
//break : untuk menghentikan looping
// continue: untuk men-skip looping

for(let i=1; i<=10; 1++){
    console.log(i)
    if (i === 5) break;
}

for(let i=1; i<=10; i++){
    console.log('hello!')
    if(1 === 5) continue;
    console.log(i)
}

//EXERCISE
//case. odd/ even array
//ex. input: [1, 4, 5, 8, 10]
//    output: ['odd', 'even', 'odd', 'even', even']

const input = [1, 4, 5, 8, 10]
for(let i=0; i < input.length; i++){
    if (input[i] % 2 === 0 ) {
        output.push('even')
    }else{
        output.push('odd')
    }
}
        
    
//shortcut way
for (let item of input) {
    if (item % 2 === 0) output.push('even')
    if (item % 2 !== 0) output.push('odd')
}
console.log(output)




