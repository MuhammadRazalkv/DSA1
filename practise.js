// // // let arr = [
// // //    [1,2],
// // //    [3,4,5],
// // //    [6]
// // // ]

// // // let newArr = arr.flat()

// // // console.log(newArr);

// // let arr = [6,8,5,3,9,7,0]

// // function sum(arr , tr){
// //    for(let i =0 ; i<arr.length ; i++){
// //       for(let j = i+1 ; j<arr.length; j++){
// //          if (arr[i] + arr[j] == tr) {
// //             // console.log(arr[i] ,', ',arr[j]);
// //             return [arr[i],arr[j]]
// //          }else{
// //             return false
// //          }
// //       }
// //    }
// // }

// // console.log(sum(arr,15));

// // let arr = [1,2,3,4,5,6,7,8,9]/
// // Fibancci sequnce 
// // function fibonacci(n){
// //     if (n < 2) {
// //         return n
// //     }
// //     return fibonacci(n-1) + fibonacci(n-2) 
// // }

// // console.log(fibonacci(6))
// // 0  1 1 2 3 5 8 

// // function linear(arr,n){
// //     for(let i =0 ; i<arr.length;i++){
// //         if (arr[i] == n) {
// //             return i
// //         }
// //     }
// //     return -1
// // }
// // let arr = [1,3,4,5,6,7,10]
// // console.log(linear(arr,9));

// function binarySearch(arr, t){
//     let start = 0 
//     let end = arr.length - 1
//     while(start <= end){
//         let mid = Math.floor((start + end) / 2)
       
//         if (arr[mid] == t) {
//            return mid 
//         }
//         if(t < arr[mid]) {
//             end = mid - 1
//         }else{
//             start = mid + 1
//         }
//     }
//     return -1
// }
// let arr = [1,2,3,4,5]
// console.log(binarySearch(arr,5));

class Node {
    constructor (data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor (){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    append(data){
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    prepend(data){
      
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size ++ 
       
    }

    insert(data,index){

        if (index > this.size || index < 0 ) {  
            console.log('Invalid  index'); 
            return 
        }

        if (index == 0) {
           
            this.prepend(data)
            
        }else{
            
            const node = new Node(data)
            let prev = this.head
            for(let i=0 ; i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

//* Remove the node with the index 
   removeFrom(index){
    if (index < 0 || index >= this.size) {
        console.log('Invalid index');
        return
    }
      let removeVal ;
    if (index == 0) {
        removeVal = this.head
        this.head = this.head.next 
    }else{
        let pre = this.head
        for(let i=0 ; i <index-1;i++){
            pre = pre.next
        }

        removeVal = pre.next
        pre.next = removeVal.next
    }
    this.size --
    return removeVal.data
   }


   //* Remove the node with Value

   removeByValue(data){
    if (this.isEmpty()) {
        console.log('No values found');
        return null
    }

    if (this.head.data == data) {
        this.head = this.head.next
        this.size--
        return data
    }else{
        let pre = this.head
        while(pre.next && pre.next.data !== data){
          pre = pre.next
        }

       if (pre.next) {
      let   removedNode = pre.next
        pre.next = removedNode.next
        this.size --
        return removedNode
       }
       return null
    }


   }


    print(){
       
        if (this.isEmpty()) {
            console.log('List is empty');
        }else{
            let curr = this.head
            let values = ''
            while(curr){
                values +=`${curr.data} `
                curr = curr.next
            }
            console.log('Values',values);
        }
       
    }

}

const list = new LinkedList()

list.print()
list.append(200)
list.insert(100,0)
list.prepend(1)
list.insert(2,1)
list.print()

// console.log(list.removeFrom(2));
console.log(list.removeByValue(100));
list.print()
