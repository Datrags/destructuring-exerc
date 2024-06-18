//obj destruct 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
var {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // prints 8
console.log(yearNeptuneDiscovered); // prints 1846

//obj destruct 2
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
var {numPlanets, ...discoveryYears} = planetFacts;
  
console.log(discoveryYears); 
// prints {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


//obj destruct 3
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) 
  // returns "Your name is Alejandro and you like purple"
  getUserData({firstName: "Melissa"}) 
  // returns "Your name is Melissa and you like green"
  getUserData({}) // Your name is undefined and you like green

//array destruct 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//array destruct 2

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); 
/* [
  "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]*/

//array destruct 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [20, 10, 30]



//object destructuring
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
var {a , b} = obj;

//array swap
var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];


//raceResults()
//accepts a single array. returns an object with keys

const raceResults = ([first, second, third, ...rest]) => {
    first, second, third, rest
};