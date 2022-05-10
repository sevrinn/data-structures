# Linked List

### What is a Linked List?

A linked list is a collection of **data elements** similar to an array.

A data element is represented as a **node** in a linked list.

A node consists of two parts: data and a pointer to the next node.

Data elements are linked using pointers and are **not** stored in contiguous memory like arrays.

![a diagram of a single nodes anatomy](assets/node-anatomy.jpg)

### Properties of a Linked List

- successive nodes connected by pointers
- The last node points to null
- The head pointer points to the first node of the list
- Can grow/shrink in size during execution
- Can be make just as long as needed
- Allocates memory as the list grows. Must know size ahead of time
- Main operations are: insert and delete

### Advantages

- Nodes can be easily inserted/deleted from a linked list without reorganizing the entire data structure.
- Elements can be added indefintely. An array would fill up or have to resize (js)
- Elements are easily removed. Removing elements from an array leaves empty spaces, wasting memory

### Cons

- Search operations are slow. Random access of data elements isnt allowed. Nodes must be sequentially accessed starting from the first node
- Uses more memory than arrays because of storage of pointers.

### Types of Linked Lists

- **Singly Linked Lists:** Each node contains only one pointer to next node.
- **Doubly Linked Lists:** Each node contains two pointers. One to next node and one to previous node.
- **Circular Linked Lists:** Circular linked lists are a variation where the last node points to the first node or any node before it, forming a loop.

### Usage

Linked lists should be used for large lists of data where the total number of items in the list changes.

Conversely, arrays are better for small lists where maximum number is known.

### Resources

[Data Structures: Linked Lists w/ Gayle Laakmann McDowell](https://www.youtube.com/watch?v=njTh_OwMljA&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=3&t=1s)
[Linked Lists In Javascript ES6](https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3)
[Implementing a Linked List in Javascript](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)
[Linked Lists Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
[trekhleb javascript-algorighms](https://github.com/trekhleb/javascript-algorithms)
