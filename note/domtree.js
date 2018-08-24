function traverseDF(root, cb) {
    (function dfs(node) {
        for (var i = 0, len = node.children.length; i < len; i++) {
            dfs(node.children[i]);
        }
        cb(node);
    })(root)
}
function traverseBF(root, cb) {
    var queue = [];
    queue.push(root);
    var currentNode = queue.shift();
    while(currentNode){
        for(var i = 0, len = currentNode.children.length; i < len; i+=){
            queue.push(currentNode.children[i]);
        }
        cb(currentNode);
        currentNode = queue.shift();
    }
}

const diff = (oldtree, newtree) => {
    let index = 0;
    const patches = {};
    dfswlak(oldtree, newtree, index, patches);
    return patches
}
const dfswalk = (oldtree, newtree, index, patches) => {
    let difference = {}
    patches[index] = difference
    diffChildren(oldtree.children, newtree.children, index, patches)
}
const diffChildren = (oldchildren, newchildren, index, patches) => {
    let leftNodes = null;
    let currentNodeIndex = index;
    oldchildren.forEach((child, i) => {
        let newnode = newchildren[i];
        currentNodeIndex = (leftNodes && leftNodes.count) ? currentNodeIndex + leftNodes.count + 1 : currentNodeIndex + 1;
        dfswalk(child, newnode, currentNodeIndex, patches)
        leftNodes = child
    })
}
arguments[fn, 1]
arguments.fn()