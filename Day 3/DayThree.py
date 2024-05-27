class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def serialize(root):
    """Encodes a tree to a single string."""
    def helper(node):
        if node is None:
            return '#'
        return f'{node.val} {helper(node.left)} {helper(node.right)}'
    
    return helper(root)

def deserialize(data):
    """Decodes your encoded data to tree."""
    def helper(nodes):
        val = next(nodes)
        if val == '#':
            return None
        node = Node(val)
        node.left = helper(nodes)
        node.right = helper(nodes)
        return node
    
    nodes = iter(data.split())
    return helper(nodes)

# Example usage:
node = Node('root', Node('left', Node('left.left')), Node('right'))
serialized = serialize(node)
print("Serialized:", serialized)
deserialized = deserialize(serialized)
print("Deserialized:", deserialized)
assert deserialized.left.left.val == 'left.left'
