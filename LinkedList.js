class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0 
    }

    getSize(){
        return this.size
    }

    //* To add the node to the first / head O(1)
    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

// *To add the node to the last  O(n)
    append(value){
        const node = new Node(value)
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

    //* To insert the node  O(n)

    insert(value,index){
        if (index > this.size || index < 0) {
            console.log('Invalid index');
            return
        }
        
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let pre = this.head
            for(let i = 0 ; i<index-1;i++){
            pre = pre.next
        }

            node.next = pre.next
            pre.next = node
            this.size++
        }
     
    }
   
    //* Remove node by index

    removeByIndex(index){
        if (index > this.size || index < 0 ) {
            console.log('Invalid index');
            return
        }
       
        let removedVal
        if (index == 0) {
            removedVal = this.head
            this.head = this.head.next
        }else{
            let pre = this.head 
            for(let i=0; i<index-1 ; i++){
                pre = pre.next
            }
           
            removedVal = pre
            pre.next = removedVal.next 


        }

        this.size -- 
        return removedVal
    }


    //* Remove by Value 

    removeByValue(value){
        if (this.isEmpty()) {
            console.log('List is empty');
        }
       
        let removedVal
        if (this.head.value == value) {
            removedVal = this.head
            this.head = this.head.next
            this.size--
            return removedVal + 'removed successfully'
        }else{
            let pre = this.head
            while(pre.next && pre.next.value !== value){
              pre = pre.next
            }

            if (pre.next) {
                removedVal = pre.next
                pre.next = removedVal.next
                this.size --
                return removedVal +'  removed successfully'
            }

            return 'No item to delete'
        }

        


    }

    searchByValue(value){
        if (this.isEmpty()) {
            return 'List is empty'
        }

          let curr = this.head
          let i =0 
            while(curr){
                if (curr.value == value) {
                    return `Value found at ${i}`
                }else{
                    curr = curr.next
                    i++
                }
            }
        
            return 'Item not found'
        
    }


    print(){
        if (this.isEmpty()) {
            console.log('Log is empty now');
        }else{
           let curr = this.head
           let listValues = ''
           while(curr){
            listValues += `${curr.value} `
            curr = curr.next
           }
          
           console.log(listValues);

        }
    }
}

let list = new LinkedList



list.prepend(10)
list.print()

list.prepend(20)
list.prepend(58)

list.print()

list.append(1000)

list.print()
// console.log(list.removeByIndex(3));
// console.log(list.removeByValue(0));
console.log(list.searchByValue(20));
list.print()