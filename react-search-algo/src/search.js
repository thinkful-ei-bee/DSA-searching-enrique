
const searchAlgos={




    linearSearch(array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                console.log(`value to search for: ${array[i]}, number of tries:${i} `)
                return i;
            }
        }
        console.log(`value:${value} not found, number of tries:${array.length} `)
        return -1;
    },




     binarySearch(array, value, start=0, end=array.length-1, count=1) {
    if (start > end) return -1;
    //find the midpoint and the item at the midpoint
    let index = Math.floor((start + end) / 2);
    console.log(`start: ${array[start]}, end: ${array[end]}, middle: ${array[index]}`)
    let item = array[index];
    
    //if the middle element is the target them return that location
    if (item == value) {
        console.log(`${value} is found at index: ${index}, number of tries ${count}`)
        return index;
    }
    //if the middle element is less than the target then the target lies 
    //on the right side so eliminate all left side and only 
    //consider after the middle to the end of the array
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end, count+1);
    }
    //if the middle element is greater than the target then the 
    //target is on the left side so the left of the middle 
    else if (item > value) {
       
        return this.binarySearch(array, value, start, index - 1, count+1);
    }
    // Best Case: O(1), Worst Case (and Average): O(log(n))
    
    // let array = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
    
    // console.log(binarySearch(array, 16))
},
}

export default searchAlgos