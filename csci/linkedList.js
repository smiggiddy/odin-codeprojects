class LinkedList {
  constructor() {
    this.size = 0;
    this.tail = null;
    this.head = null;
  }


  append(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.nextNode = temp;
    }
    if (this.tail == null) {
      this.tail = newNode;

    }

    this.size += 1;
  }

  prepend(value) {
    let newNode = new Node(value);

    if (this.tail == null) {
      this.tail = newNode;
      if (this.head == null) {
        this.head = newNode;
      }
    } else {
      const temp = this.tail;
      temp.nextNode = newNode;
      this.tail = newNode;

    }
    this.size += 1;
  }

  at(index) {
    function nodeAtIndex(index, count, node) {
      if (index === count) {
        return node;
      } else if (node.nextNode == null) {
        return null;
      } else {
        return nodeAtIndex(index, count + 1, node.nextNode);
      }
    }

    return nodeAtIndex(index, 0, this.head);
  }
  pop() {
    if (this.head.nextNode == null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.nextNode;

    }
    this.size -= 1;
  }

  contains(value) {
    function searchNodes(node, value) {
      if (node.value === value) {
        return true;
      } else if (node.nextNode == null) {
        return false;
      } else {
        return searchNodes(node.nextNode, value);
      }
    }

    return searchNodes(this.head, value);

  }

  find(value) {
    let index = 0;
    function searchNodes(node, value, index) {
      if (node.value === value) {
        return index;
      } else if (node.nextNode == null) {
        return null;
      } else {
        return searchNodes(node.nextNode, value, index + 1);
      }
    }

    return searchNodes(this.head, value, index);

  }

  insertAt(value, index) {
    let previousNode = null;
    let newNode = new Node(value);
    let currentNode = this.head;

    let count = 0;

    if (index === 0) {
      this.append(value);
      return;
    }

    while (currentNode != null) {
      if (count == index) {
        if (currentNode.nextNode == null) {
          this.prepend(value);
          return;
        } else {
          let nextNode = currentNode;
          previousNode.nextNode = newNode;
          newNode.nextNode = nextNode;
          return;
        }
      }

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count += 1;
    }
  }

  removeAt(index) {
    let previousNode = null;
    let currentNode = this.head;

    let count = 0;

    if (index === 0) {
      this.pop();
      return;
    }

    while (currentNode != null) {
      if (count == index) {
        if (currentNode.nextNode == null) {
          previousNode.nextNode = null;
          return;
        } else {
          previousNode.nextNode = currentNode.nextNode;
          return;
        }
      }

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count += 1;
    }
  }

  toString() {
    let nodes = [];
    let current = this.head;


    while (current != null) {
      nodes.push(current.value);
      current = current.nextNode;
    }

    console.log(nodes.join(" -> ") + " -> null");
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

let list = new LinkedList();

list.append("test 5");
list.prepend("test 8");
list.append("test 1");
list.append("test 2");
list.append("test 3");
list.append("test 4");
list.prepend("Deez Nuts");
list.toString();
console.log(list.find("Deez Nuts"));
console.log(list.find("test "));
console.log(list.contains("test 3"));

console.log(list.size);
console.log(list.at(1).value);
console.log("popping last element");
list.pop();
list.toString();
list.insertAt("inserted 3", 3);
// list.insertAt("inserted 1", 1);
list.toString();
list.insertAt("inserted 1", 1);
list.toString();
list.removeAt(6);
console.log("Removing element 6");
list.toString();
console.log('removing inserted elements')
list.removeAt(1);
list.removeAt(3);
list.toString();
console.log("Removing element 1");
list.removeAt(0);
list.toString();
console.log("Removing element Deez Nuts");
list.removeAt(3);

list.toString();
