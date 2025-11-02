const findTheOldest = function(arr) {
    return arr.reduce((maxAgePerson, person) => {
        const currentYear = (new Date()).getFullYear();
        const personYearOfDeath = person.yearOfDeath != undefined ? person.yearOfDeath : currentYear;
        const maxYearOfDeath = maxAgePerson.yearOfDeath != undefined ? maxAgePerson.yearOfDeath : currentYear;

        return  personYearOfDeath - person.yearOfBirth >
                maxYearOfDeath - maxAgePerson.yearOfBirth ?
                person : maxAgePerson;
    }, arr[0])
};

// Do not edit below this line
module.exports = findTheOldest;
