//* Implementation of linear search 
// It travels the entire length of array 

function linearSearch(arr,target){
    
    for(let i =0 ; i<arr.length ; i++){
        if (arr[i] == target) {
            return `Value found at position ${i}`
        } 
    }
    return 'Item not found'

}

let arr = [1,2,3,4,5,6,7,8]
console.log(linearSearch(arr,4));