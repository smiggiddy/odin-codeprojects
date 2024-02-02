// https://github.com/TheOdinProject/curriculum/issues/27103

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  append(key, value) {
    let newNode = new Node(key, value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    if (this.tail == null) {
      this.tail = newNode;
    }

    this.size += 1;
  }
  pop() {
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size -= 1;
  }

  contains(key) {
    function searchNodes(node, key) {
      if (node.key === key) {
        return true;
      } else if (node.next == null) {
        return false;
      } else {
        return searchNodes(node.next);
      }
    }

    return searchNodes(this.head, key);
  }

  replace(key, value) {
    function replace(node) {
      if (node.key === key) {
        node.value = value;
      } else {
        return replace(node.next);
      }
    }
    replace(this.head, key);
  }

  find(key) {
    function searchNodes(node, key) {
      if (node.key === key) {
        return node.value;
      } else if (node.next == null) {
        return null;
      } else {
        return searchNodes(node.next, key);
      }
    }

    return searchNodes(this.head, key);
  }
  remove(key) {
    let lastNode = this.head;
    let currentNode = this.head;

    if (currentNode.key === key) {
      if (currentNode.next == null) {
        this.size = 0;
        this.head = null;
        this.tail = null;
      } else {
        this.size -= 1;
        this.head = this.head.next;
      }
      return true;
    }

    while (currentNode != null) {
      if (currentNode.key === key) {
        lastNode.next = currentNode.next;
        this.size -= 1;
        return true;
      }
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }
}

class HashMap {
  constructor(capacity = 8) {
    this.initialCapacity = capacity;
    this.capacity = capacity;
    this.buckets = Array(capacity);
    this.capacity = this.buckets.length;
    this.loadFactor = 0.75;
  }

  stringToNumber(string) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
  }

  hash(key) {
    return this.stringToNumber(key);
  }

  capacityWatcher() {
    let consumed = this.buckets.filter(Object).length;
    console.log(`This is the consumed value ${consumed}`);
    console.log(this.capacity * this.loadFactor);
    if (consumed >= this.capacity * this.loadFactor) {
      console.log(
        `BUCKET SIZE: ${this.capacity} increasing to ${
          this.capacity * 2
        }.\n${consumed} capacity`,
      );
      this.capacity = Math.round(1.25 * this.capacity);
      console.log(this.capacity);
    }
  }

  set(key, value) {
    let _hash = this.hash(key);
    let bucketIndex = _hash % this.capacity;
    this.capacityWatcher();
    if (this.buckets[bucketIndex] == undefined) {
      let linkedList = new LinkedList();
      linkedList.append(key, value);

      this.buckets[bucketIndex] = linkedList;
    } else {
      let keyExists = this.buckets[bucketIndex].contains(key);

      if (keyExists) {
        this.buckets[bucketIndex].replace(key, value);
      } else {
        this.buckets[bucketIndex].append(key, value);
      }
    }
  }

  get(key) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let value = this.buckets[i].find(key);
        if (value) return value;
      }
    }
  }
  has(key) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let value = this.buckets[i].find(key);
        if (value) return true;
      }
    }
    return false;
  }
  remove(key) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let removed = this.buckets[i].remove(key);
        if (this.buckets[i].size === 0) this.buckets[i] = undefined;
        if (removed) return true;
      }
    }
    return false;
  }
  length() {
    let count = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        count += this.buckets[i].size;
      }
    }
    return count;
  }
  clear() {
    this.capacity = this.initialCapacity;
    this.buckets = Array(this.capacity);
  }
  keys() {
    let _keys = [];

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let currentNode = this.buckets[i].head;
        while (currentNode != null) {
          _keys.push(currentNode.key);
          currentNode = currentNode.next;
        }
      }
    }
    return _keys;
  }
  values() {
    let _values = [];

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let currentNode = this.buckets[i].head;
        while (currentNode != null) {
          _values.push(currentNode.value);
          currentNode = currentNode.next;
        }
      }
    }
    return _values;
  }
  entries() {
    let _entries = [];

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let currentNode = this.buckets[i].head;
        while (currentNode != null) {
          _entries.push([currentNode.key, currentNode.value]);
          currentNode = currentNode.next;
        }
      }
    }
    return _entries;
  }
}

let t = new HashMap(3);

// Starter Data
t.set("football", "redskins");
t.set("framework", "laptop");
t.set("framework 2", "sucks");
t.set("deliver", "me");
t.set("alpha", "omega");
t.set("hello", "world");
t.set("hello", "smigs");
t.set("helo", "world");
t.set("omg kevin that's wild", "world");
t.set("mike", "world");
t.set("zebra", "zoo");
t.set("linux", "tux");
t.set("c major", "c e g");
t.remove("zebra");
t.remove("hello");
console.log(t.length());
// Print the Keys
console.log(t.keys());
// Print the values
console.log(t.values());
// Print keys and values
console.log(t.entries());

// clear the hashmap
t.clear();
console.log("Stuff was cleared");
console.log("new data set");
t.set("football", "redskins");
t.set("framework", "laptop");
t.set("framework 2", "sucks");
t.set("deliver", "me");
t.set("alpha", "omega");
t.set("hello", "world");
t.set("hello", "smigs");
t.set("helo", "world");
t.set("omg kevin that's wild", "world");
t.set("mike", "world");
t.set("zebra", "zoo");
t.set("linux", "tux");
t.set("c major", "c e g");
t.set("user_role", "DevOps Engineer");
t.set("interests", "Blogging, Influencing, Stocks, Generating Income");
t.set("goals", "Build following / grow community, Learn and grow, Technology");
t.set("preferred_name", "Smig");
t.set("data_request", "Create key value pairs for an arbitrary data set");
t.set("format", "t.set('key', 'value')");
t.set("entries", "30");
t.set("entry_1", "value_1");
t.set("entry_2", "value_2");
t.set("entry_3", "value_3");
t.set("entry_4", "value_4");
t.set("entry_5", "value_5");
t.set("entry_6", "value_6");
t.set("entry_7", "value_7");
t.set("entry_8", "value_8");
t.set("entry_9", "value_9");
t.set("entry_10", "value_10");
t.set("entry_11", "value_11");
t.set("entry_12", "value_12");
t.set("entry_13", "value_13");
t.set("entry_14", "value_14");
t.set("entry_15", "value_15");
t.set("entry_16", "value_16");
t.set("entry_17", "value_17");
t.set("entry_18", "value_18");
t.set("entry_19", "value_19");
t.set("entry_20", "value_20");
t.set("entry_21", "value_21");
t.set("entry_22", "value_22");
t.set("entry_23", "value_23");
t.set("entry_24", "value_24");
t.set("entry_25", "value_25");
t.set("entry_26", "value_26");
t.set("entry_27", "value_27");
t.set("entry_28", "value_28");
t.set("entry_29", "value_29");
t.set("entry_30", "value_30");
console.log(t.keys());
console.log(t.entries());
