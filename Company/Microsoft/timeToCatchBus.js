"use strict";

const sortArr = (a, b) => {
    return a - b;
}

// Bus - 10, 20, 30
// Passengers = 
// n log n
const calculation = (sortedBuses, sortedPassenger, capacity) => {
    let count = 0, arr = [], result;
    console.log(sortedBuses, sortedPassenger)
    for(let i = 0; i < sortedBuses.length; i++) { 
        count = 0, arr = [];
        for(let j = 0; j < sortedPassenger.length; j++) {
            if(sortedPassenger[j] < sortedBuses[i]) {
                arr.push(sortedPassenger[j]); // 10
                sortedPassenger.shift();
                count++; // 1
            }
        }
        console.log("Arr:", arr)

        if(count >= capacity) {
           if(result < (arr[0] - 1)) {
                result = arr[0] - 1; // Because that time we need to reach
           }
        }

        
    }

    return result;
}

const mainFunction = (buses, passengers, capacity) => {
   const sortedBuses = buses.sort(sortArr);
   const passengersSort = passengers.sort(sortArr);

   const output = calculation(sortedBuses, passengersSort, capacity);
   console.log(output);
}

mainFunction([10, 20, 30],  [19, 13, 26, 4, 25, 11, 21]);
