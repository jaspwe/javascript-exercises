const findTheOldest = function(people) {
    return people.reduce((oldest, person) =>{
        let deathYear = person.yearOfDeath || 2025;
        let age = deathYear - person.yearOfBirth;

        let oldestDeathYear = oldest.yearOfDeath || 2025
        let oldestAge = oldestDeathYear - oldest.yearOfBirth;

        return age > oldestAge ? person : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
