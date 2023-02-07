function isLeapYear(syote) {

    if (((syote % 4 == 0) && (syote % 100 != 0)) || (syote % 400 == 0)) {
        return(syote," is a leap year");
    } else {
        return(syote," isnt a leap year");
    }
}

console.log(isLeapYear(2024));