// fibonacci with recursion

function fibonacci(n){
    if (n < 2) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2) 
}

console.log(fibonacci(6)) // 0 1 1 2 3 5  8 ans is 8  