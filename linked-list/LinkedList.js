import LinkedListNode from './LinkedListNode'

// defines LinkedList class which maintains the head pointer of the list
export default class LinkedList {
	constructor() {
		this.head = null
	}

	/**
	 * 5: Constructor function initializes obj with property "head", giving it a value of "null". This is because when a linked list obj is initally created, it doesnt contain any nodes.
	 *
	 * When we add our first node to it, we will assign it to the head pointer
	 */

	append(value) {
		// creates new node with value and sets next "pointer" to head "pointer" so they are pointing at same node
		const newNode = LinkedListNode(value, this.head)

		//if no head exists, make new node the head
		if (!this.head) {
			this.head = newNode
			this.tail = newNode

			return this
		}
		// attach new node to end of linked list
		this.tail.next = newNode
		this.tail = newNode
	}
}
