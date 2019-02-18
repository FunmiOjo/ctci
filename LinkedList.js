class Node {
  constructor(value) {
    this.value = value || null
    this.next = null
  }
}

// singly linked list
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToTail(value) {
    const node = new Node(value)
    if (this.tail === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  addToHead(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
  }

  delete(node) {
    if (node === this.head && node === this.tail) {
      this.head = null
      this.tail = null
    } else if (node === this.head) {
      const incumbentHead = this.head
      this.head = this.head.next
      incumbentHead.next = null
    } else if (node === this.tail) {
      let currentNode = this.head
      while (currentNode.next.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = null
      this.tail = currentNode
    } else {
      let currentNode = node
      while (currentNode.next.next !== null) {
        currentNode.value = currentNode.next.value
        currentNode = currentNode.next
      }
      currentNode.value = currentNode.next.value
      currentNode.next = null
      this.tail = currentNode
    }

    /* 
       1 -> 2 -> 3 -> 4 -> 5
       1 -> 3 -> 3 -> 4 -> 5
       1 -> 3 -> 4 -> 4 -> 5
       1 -> 3 -> 4 -> 5 -> 5
    */
  }

  removeDuplicates() {
    let nodeToCompare = this.head
    let currentNode = this.head
    while (nodeToCompare !== null) {
      currentNode = nodeToCompare
      while (currentNode.next !== null) {
        if (currentNode.next.value === nodeToCompare.value) {
          this.delete(currentNode.next)
        }
        currentNode = currentNode.next
      }
      nodeToCompare = nodeToCompare.next
    }
  }

  kToLast(k) {
    if (!k) return this.tail
    let backNode = this.head
    let frontNode = this.head
    let counter = 0
    while (counter < k - 1) {
      frontNode = frontNode.next
      counter++
    }
    while (frontNode.next !== null) {
      frontNode = frontNode.next
      backNode = backNode.next
    }
    return backNode
  }

  string() {
    let values = []
    let currentNode = this.head
    while (currentNode !== null) {
      values.push(currentNode.value)
      currentNode = currentNode.next
    }
    return values.join(' -> ')
  }
}

const numberList = new LinkedList()
numberList.addToTail(1)
numberList.addToTail(2)
numberList.addToTail(3)
numberList.addToTail(1)
numberList.addToTail(6)
numberList.addToTail(5)
console.log(numberList.string())

numberList.delete(numberList.head.next)
console.log(numberList.string())

numberList.removeDuplicates()
console.log(numberList.string())

numberList.removeDuplicates()
console.log(numberList.string())

console.log(numberList.kToLast(2).value)
/*
forgot to consider looking at nodes one or more steps ahead
keep forgetting to go to next node, causing stack overflow

in removeDuplicates 
*/
