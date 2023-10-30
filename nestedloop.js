//NESTED LOOP

for (let i=1; i<=5; i++){
    console.log(`looping 1=${i}`)
    for(let j=1; j<=5; j++){
        console.log(`looping j=${j}`)
    }
}

//pattern *
/*
    * * *
    * * *
    * * *
*/
let pattern01 = " "
for(let i=1; i<=3; i++){
    for (let j=1; j<=3; j++){
        pattern01 += '\n'
    }
    console.log(pattern01)
}

let pattern02 = ""
for(let i=1; i<=3; i++){
    for (let j=1; j<=5; j++){
        pattern02 += "*"
    }
    pattern02 += '\n'
    
} 
console.log(pattern02)

let pattern03 = ""
for(let i=1; i<=5; i++){
    for (let j=1; j<=1; j++){
        pattern03 += "*"
    }
    pattern02 += '\n'
    
} 
console.log(pattern03)

