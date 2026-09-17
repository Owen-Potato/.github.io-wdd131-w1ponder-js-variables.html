let age = 19;
let name = "Owen";

// This is like print in Python
/* Multilien comment
in javascript
*/
console.log(age);

age = 20;

console.log(age);

const eyecolor = "blue";
policydisclaimers = "Exclustions to vehicles register in Michigan";

// scope is where variables can be referenced
if(age == 34) {
    // we are now in a different scope
    // inside this scope, we can reference variables declared outside of this scope
    console.log(name);

    //declare a variable in an inner scope
    let favoritecolor = "BLUE"
}

// console.log(favoritecolor);

// pull something from the HTML page
document.querySelector("h1").style.color = favoritecolor;