class Node {
    constructor(d = null) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class balancedBinaryTree {
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

        // don't insert duplicates
        if (value === node.data) return node;

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
            if (n == null) return null;
            if (n.data === value) {
                found = n;
                return n;
            }
            n.left = searchTree(n.left);
            n.right = searchTree(n.right);
            return n;
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
    levelOrder(callback = null) {
        const queue = [];
        const values = [];
        let node = this.tree;

        function processQueue(arr) {
            while (arr.length > 0) {
                let item = arr.shift();
                if (item) {
                    callback ? callback(item) : values.push(item.data);
                }
                if (item.left) queue.push(item.left);
                if (item.right) queue.push(item.right);
            }
        }

        function proccessQueueRecursively(level) {
            function _helper(n, level) {
                if (n == null) return;

                if (level === 1) {
                    callback ? callback(n) : values.push(n.data);
                } else {
                    _helper(n.left, level - 1);
                    _helper(n.right, level - 1);
                }
            }

            for (let i = 1; i <= level; i++) {
                _helper(node, i);
            }
        }

        if (!node) {
            console.log('Need a tree with some values dude');
            return;
        }
        queue.push(node);

        // get tree height for recursion
        // let h = this.height(node);

        processQueue(queue);
        // proccessQueueRecursively(h);

        return values;
    }

    inOrder(callback = null) {
        const tree = this.tree;
        const values = [];

        function inOrderHelper(n) {
            if (tree == null) {
                return;
            }
            if (n.left) inOrderHelper(n.left);
            callback ? callback(n.data) : values.push(n.data);
            if (n.right) inOrderHelper(n.right);
        }
        inOrderHelper(tree);
        return values;
    }

    preOrder(callback = null) {
        const tree = this.tree;
        const values = [];

        function preOrderHelper(n) {
            if (tree == null) {
                return;
            }
            callback ? callback(n.data) : values.push(n.data);
            if (n.left) preOrderHelper(n.left);
            if (n.right) preOrderHelper(n.right);
        }
        preOrderHelper(tree);
        return values;
    }

    postOrder(callback = null) {
        const tree = this.tree;
        const values = [];

        function postOrderHelper(n) {
            if (tree == null) {
                return;
            }
            if (n.left) postOrderHelper(n.left);
            if (n.right) postOrderHelper(n.right);
            callback ? callback(n.data) : values.push(n.data);
        }
        postOrderHelper(tree);
        return values;
    }

    height(node) {
        function heightHelper(n) {
            if (n == null) return 0;
            let leftHeight = heightHelper(n.left);
            let rightHeight = heightHelper(n.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
        return heightHelper(node) - 1;
    }

    depth(node) {
        let treeHeight = this.height(this.tree);
        let nodeHeight = this.height(node);

        return treeHeight - nodeHeight;
    }

    isBalanced() {
        let self = this;
        let isBalanced = true;

        function balanceHelper(node) {
            let left;
            let right;

            if (node.left) left = self.find(node.left.data);
            if (node.right) right = self.find(node.right.data);

            let leftHeight = self.height(left);
            let rightHeight = self.height(right);

            return Math.abs(leftHeight - rightHeight) <= 1;
        }

        this.levelOrder((n) => {
            if (!balanceHelper(n)) isBalanced = false;
        });

        return isBalanced;
    }

    rebalance() {
        let tree = this.inOrder();
        this.tree = this.buildTree(tree, 0, tree.length - 1);
    }
}

function main() {
    let getRandomNumber = (max) => Math.floor(Math.random() * max);
    let buildArray = () => {
        let arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(getRandomNumber(100));
        }
        return arr;
    };
    let unbalanceTree = (bst) => {
        for (let i = 0; i < 50; i++) {
            bst.insert(getRandomNumber(200));
        }
    };

    console.log('WELCOME TO THE BINARY TREE STUFF');
    console.log('BUILDING TREE WITH 100 RANDOM NUMBERS');
    let testArr = buildArray();
    let tree = new balancedBinaryTree(testArr);
    tree.prettyPrint(tree.tree);
    console.log('UNBALANCING THIS JOINT');
    unbalanceTree(tree);
    tree.prettyPrint(tree.tree);
    console.log('LET ME SEE IF THAT WOKRED');
    console.log(`IS THE TREE BALANCED G? ${tree.isBalanced()}`);
    tree.rebalance();
    console.log('LETS FIX THAT BUDDY');
    tree.prettyPrint(tree.tree);
    console.log('LETS DO THE TRAVERSALS NOW');
    console.log('LEVEL ORDER');
    console.log(tree.levelOrder());
    console.log('PRE ORDER');
    console.log(tree.preOrder());
    console.log('IN ORDER');
    console.log(tree.inOrder());
    console.log('POST ORDER');
    console.log(tree.postOrder());
}

main();
