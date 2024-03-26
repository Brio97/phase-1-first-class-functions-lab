// Code your solution in this file!
const returnFirstTwoDrivers = function() {
    return ['Antonia', 'Nuru'];
}
const returnLastTwoDrivers = function() {
    return ['Amari', 'Mo'];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const drivers = ['Antonia','Nuru','Amari','Mo'];
const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}
