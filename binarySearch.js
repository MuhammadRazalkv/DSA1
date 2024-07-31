// * Binary search 
//! The complexity of the binary search is O(log n ) :-
// because with each comparison, the algorithm reduces the search space by half.



function binarySearch(array,target){
    let start = 0
    let end = array.length - 1
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if (array[mid] == target) {
            return mid
        } else if(array[mid] > target) {
            end =  mid-1 
        }else{
            start = mid + 1 
        }
    }
    return 'Not found'
}
let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr =[9,8,7,6,5,4,3,2,1]
// console.log(binarySearch(arr,1));

//! Using recursion

function binarySearchRecursive(arr,target){
    return search(arr , target , 0 , arr.length -1)
}

function search(array , target , start, end){
    if(start > end){
        return -1
    }
    let mid = Math.floor((start + end) / 2)
    if (array[mid] == target) {
        return mid
    }
    if (target < array[mid]) {
        return search(array , target , start , mid-1)
    } else {
        return search(array , target , mid+1 , end)
    }

   
}

console.log(binarySearchRecursive(arr,1));