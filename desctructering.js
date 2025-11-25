// ES6 desctructering
// Gör det enkelt att "packa upp" värden från objekt eller arrayer till variabler
// Gör koden mer läsbar
// 
// Destructering med objekt. Istället för punktnotation!
// const obj = {
//         a: 1,
//         b: 2
//     }
//
// const {a, b } = obj
//
// Finns för arrayer 
// const arr = [1, 2];
// const [a, b] = arr;

const person = {
    firstname: "Sandra",
    age: 29,
    adress: {
        street: "Tallvägen 23",
        city: "Linköping"
    }
}

// Punktnotation-sättet
// const firstname = person.firstname;
// const age = person.age;

// Objekt destrcutering
const {firstname, age, adress: {street, city}} = person;
//const {street, city} = adress;
console.log(firstname, age, street, city);

// Användningsområde för objet destructurering är parametrar till funktion!
function doThis({firstname, age}) {
    console.log(firstname, age);
}


// Destructering av array
const colors = ["red", "purple", "yellow"];

// Istället för att göra så här:
const red = colors[0];


// Destrukturera - hämta värden från arrayen till vänst om likamedsteckning
const [col1, col2] = colors;
console.log(col1, col2);



