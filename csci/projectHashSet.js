// import { LinkedList } from './linkedList';
import { LinkedList } from './linkedList.js';

class HashSet {
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
        if (consumed >= this.capacity * this.loadFactor) {
            this.capacity = Math.round(1.25 * this.capacity);
        }
    }

    set(key) {
        let _hash = this.hash(key);
        let bucketIndex = _hash % this.capacity;

        // Check if we need to add more buckets
        this.capacityWatcher();

        if (
            this.buckets[bucketIndex] == undefined ||
            this.buckets[bucketIndex] == null
        ) {
            let linkedList = new LinkedList();
            linkedList.append(key);

            this.buckets[bucketIndex] = linkedList;
        } else {
            let keyExists = this.buckets[bucketIndex].contains(key);

            if (keyExists) {
                // no dups
                return;
            } else {
                this.buckets[bucketIndex].append(key);
            }
        }
    }

    get(key) {
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                let _key = this.buckets[i].find(key);
                if (_key) return true;
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
                while (currentNode) {
                    _keys.push(currentNode.value);
                    currentNode = currentNode.nextNode;
                }
            }
        }
        return _keys;
    }
}

export { HashSet };

// const _set = new HashSet();
// _set.set('test');
// _set.set('test');
// _set.set('hello');
// _set.set('deeeez');
// _set.set('deeez');
// _set.set('deez');
// _set.set('dez');
// _set.set('trueskii');
// _set.set('mike');
// console.log(_set.keys());
// _set.remove('test');
// console.log(_set.buckets);
