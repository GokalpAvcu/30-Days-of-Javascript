//Declare a function fullName and it print out your full name.
function fullName1(){
    console.log("Sergen Yalçın")
}
fullName1()

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName("Gökalp", "Avcu"));

//Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(x,y){
    return x + y;
}
console.log(addNumbers(2,5))

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle

function areaOfRectangle (length, width){
    let area = length * width
    return area
}
console.log(areaOfRectangle(3,5))

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width){
    let area = (length + width) * 2
    return area
}
console.log(perimeterOfRectangle(10,12))

