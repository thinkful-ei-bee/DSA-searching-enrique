// How many searches?


//1)
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. 
// Identify the sequence of numbers that each recursive call will search to find 8.

    //  1st call:   start: 3, end: 18, midpoint: 11
    //  2nd call: start: 3, end: 8, midpoint: 5
    //  3rd call: start: 6, end: 8, midpoint: 6
   //   4th call:  start: 8, end: 8, midpoint: 8
    // returns index of 3
   


// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. 
// Identify the sequence of numbers that each recursive call will search to find 16?
    //1st call start: 3, end: 18, middle: 11
    //2nd call start: 12, end: 18, middle: 15
    //3rd call start: 17, end: 18, middle: 17
    //returns -1
    




function binarySearch(array, value, start=0, end=array.length-1) {
    if (start > end) return -1;
    //find the midpoint and the item at the midpoint
    let index = Math.floor((start + end) / 2);
    console.log(`start: ${array[start]}, end: ${array[end]}, middle: ${array[index]}`)
    let item = array[index];
    
    //if the middle element is the target them return that location
    if (item === value) {
        console.log(`${value} is found at index: ${index}`)
        return index;
    }
    //if the middle element is less than the target then the target lies 
    //on the right side so eliminate all left side and only 
    //consider after the middle to the end of the array
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    //if the middle element is greater than the target then the 
    //target is on the left side so the left of the middle 
    else if (item > value) {
       
        return binarySearch(array, value, start, index - 1);
    }
};

// Best Case: O(1), Worst Case (and Average): O(log(n))

let array = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

console.log(binarySearch(array, 16))