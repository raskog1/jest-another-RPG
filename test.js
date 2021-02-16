var day = 3; // number between 0-6

function ifDay(day) {
    if (day === 0) { //true
        return "Sunday"
    } else if (day === 1) {
        return "Monday"
    } else if (day === 2) {
        return "Tuesday";
    } else if (day === 3) {
        return "Wednesday";
    } else if (day === 4) {
        return "Thursday";
    } else if (day === 5) {
        return "Friday";
    } else if (day === 6) {
        return "Saturday";
    } else {
        return "This is not an actual day"
    }
}

function switchDay(day) {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "This is not an actual day";
    }
}

console.log(ifDay(day));
console.log(switchDay(day));