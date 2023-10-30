// write a code to find area of rectangle
let length1 = 5;
let width1 = 3
let areaOfRectangle = length1*width1
console.log("the area of rectangle is: " + areaOfRectangle )

//write a code to find perimeter of rectangle
let length2 = 5;
let width2 = 3;
let perimeterOfRectangle = 2*(length1+width2);

console.log("the perimeter of the rectangle is: " + perimeterOfRectangle )

//write a code to find diameter 
let radius = 5;
let console.log("the diameter of the circle is: " + diameterOfCirle )

//write a code to find angls of rectangle 


//5. 
let date1 = new Date ('2022-01-20').getTime()
let date2 = new Date ('2022-01-22').getTime()

console.log("the difference between those date are: " + (date2-date1) + " days" );


//convert days to years 
let totalDays = 400
let year = Math.floor(totalDays / 365) //year
let daysLeft = 400 % 365 // 35 days
let month = Math.floor(daysLeft / 30 ) //1 month
daysLeft = daysLeft % 30 // 35 days % 30 days = 5 days
console.log(`
${year} Year , ${month} Month , ${daysLeft} Days ')
`)

//modulus
console.log(5%4) // 1
console.log(6%4) // 2
console.log(59%3) // 3x... = 50 

