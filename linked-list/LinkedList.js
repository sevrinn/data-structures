import LinkedListNode from './LinkedListNode'

//this is just here so i can run with coderunner.
class LinkedListNode {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}

// defines LinkedList class which maintains the head pointer of the list
class LinkedList {
	// constructor function initializes obj with properites head and tail.
	// it sets them to null becuase when initally created, it doesnt contain any nodes
	constructor() {
		this.head = null
		this.tail = null
	}

	prepend(value) {
		// creates new node and makes it the head
		const newNode = new LinkedListNode(value, this.head)
		this.head = newNode

		//if no tail exists, make new node the tail
		if (!this.tail) {
			this.tail = newNode
		}
		return this
	}
}

let myList = new LinkedList()
console.log('Upon creation: ', myList)
myList.prepend('A')
console.log('After prepend: ', myList)
