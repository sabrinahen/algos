//Find max and min
//Given an array of numbers, find and return the minimum and maximum values

let testArray = [1,5,4,3,2]

//Define a function that accepts an array of numbers
function findMinMax(arr) {
    // Need max and min variable 
    let max = arr[0];
    let min = arr[0];
    // Need a for loop that loops through the given array
    for(let i=1; i < arr.length; i++) {
        // Compare current array value to "max" and "min"
        if(arr[i] > max) {
            // if current value is greater than "max" then replace "max" with current value
            max = arr[i];
        }
        if(arr[i] < min) {
            // if current value is lesser than "min" then replace "min" with current value
            min = arr[i];
        }
    }
    // Return the max and min
    return [max, min]
}

console.log(findMinMax(testArray))