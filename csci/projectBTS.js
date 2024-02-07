class Node {
    constructor(d = null) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr = []) {
        this.sort(arr);
        this.set();
        this.tree = this.buildTree(this.arr, 0, this.arr.length - 1);
    }
    buildTree(arr, start, end) {
        if (start > end) return null;

        const mid = Math.round((start + end) / 2);
        let node = new Node(arr[mid]);

        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);

        return node;
    }

    sort(arr) {
        this.arr = arr.sort((a, b) => a - b);
    }

    set() {
        let tempArr = [];

        for (let i = 0; i < this.arr.length; i++) {
            if (!tempArr.includes(this.arr[i])) {
                tempArr.push(this.arr[i]);
            }
        }
        this.arr = tempArr;
    }

    insert(value, node = this.tree) {
        if (node == null) {
            node = new Node(value);
            return node;
        }
        if (value < node.data) {
            node.left = this.insert(value, node.left);
        } else {
            node.right = this.insert(value, node.right);
        }
        return node;
    }

    delete(value, node = this.tree) {
        if (node == null) return node;

        if (node.data == value) {
            if (node.left && node.right) {
                let temp = node.right;
                node = node.left;
                node.right = temp;
            } else if (node.left || node.right) {
                node = node.left ? node.left : node.right;
            } else {
                node = null;
            }
            return node;
        }

        if (value < node.data) {
            node.left = this.delete(value, node.left);
        } else {
            node.right = this.delete(value, node.right);
        }

        return node;
    }

    find(value, node = this.tree) {
        let found = null;

        function searchTree(n) {
            if (n == null) return;
            if (n.data === value) {
                console.log(node);
                found = n;
                return found;
            } else {
                n.left = searchTree(n.left);
                n.right = searchTree(n.right);
            }
            return node;
        }
        searchTree(node);
        return found;
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? '│   ' : '    '}`,
                false,
            );
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? '    ' : '│   '}`,
                true,
            );
        }
    }
    levelOrder(callback) {
        // TODO implement
    }
}

// let testArr = [-1, -0.5, 0, 3, 4, 23, 8, 3, 5, 7, 8, 9, 10, 67, 6345, 324];
let testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let t = new Tree(testArr);
t.prettyPrint(t.tree);
t.insert(2);
t.delete(67);
t.delete(6345);
t.delete(13);
t.prettyPrint(t.tree);
let search = t.find(-2);
console.log(search);
