export default class LinkedListNode {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}

console.log(typeof LinkedListNode)

/**
 * My attempt at breaking this down line by line
 *
 * 1: defines a L.L.Node class. (and exports it with export default)
 * 2: When an instance of node is created, the constructor func is called, initializing two properties:
 *    - value
 *    - a "pointer" named next (with a default value of null)
 * 7: LLNode is created with a toString node
 */
