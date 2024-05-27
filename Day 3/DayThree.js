'use strict'

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    function helper(node) {
        if (node === null) {
            return '#';
        }
        return `${node.val} ${helper(node.left)} ${helper(node.right)}`;
    }
    return helper(root);
}

function deserialize(data) {
    function helper(nodes) {
        const val = nodes.next().value;
        if (val === '#') {
            return null;
        }
        const node = new Node(val);
        node.left = helper(nodes);
        node.right = helper(nodes);
        return node;
    }
    
    const nodes = data.split(' ')[Symbol.iterator]();
    return helper(nodes);
}


const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

const serialized = serialize(node);
console.log("Serialized:", serialized);

const deserialized = deserialize(serialized);
console.log("Deserialized:", deserialized);

console.assert(deserialized.left.left.val === 'left.left', "Assertion failed");
