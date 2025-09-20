const findTheOldest = function(people) {
    let name = people.map(i => i.name)
    let birthYear = people.map(i => i.yearOfBirth)
    let deathYear = people.map(i => i.yearOfDeath)
    
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;

