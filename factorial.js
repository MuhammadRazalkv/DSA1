// With out recursive

function findFactorial(n){
    let sum = 1
    for(let i=1;i<=n;i++){
       sum = sum*i
    }
    return sum
}

// console.log(findFactorial(5));

//* Finding factorial using recursive
// The Big O time complexity is  O(n)

function recursiveFactorial(n){
   if (n == 0) {
    return 1 
   }
   return n * recursiveFactorial(n-1)
}

// console.log(recursiveFactorial(3)); 