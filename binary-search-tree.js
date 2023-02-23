class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null) {
      this.root = new Node(val);
    }
    let current = this.root;
    while(current) {
      if(current.val === val) {
        return this;
      }
      else if(val > current.val) {
        if(!current.right) current.right = new Node(val);
        current = current.right;
      }
      else {
        if(!current.left) current.left = new Node(val);
        current = current.left;
      }
    }
  }

  
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if(this.root === null) {
      this.root = new Node(val);
      return this;
    }
    return this.insertRecursivelyHelper(this.root, val);
  }

  insertRecursivelyHelper(node, val) {
    if(node.val === val) return this;
    if(node.val < val) {
      if(node.right === null) {
        node.right = new Node(val);
      }
      return this.insertRecursivelyHelper(node.right, val);
    }
    if(node.left === null) {
      node.left = new Node(val);
    }
    return this.insertRecursivelyHelper(node.left, val);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while(current) {
      if(current.val === val) return current;
      if(current.val > val) current = current.left;
      current = current.right;
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function findHelper(node) {
      if(node === null) return;
      if(node.val === val) return node;
      if(node.val > val) {
        return findHelper(node.left);
      }
      return findHelper(node.right);
    }
    return findHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const nodes = [];
    function helperDfsPreOrder(node) {
      nodes.push(node.val);
      if(node.left) helperDfsPreOrder(node.left);
      if(node.right) helperDfsPreOrder(node.right);
      return nodes;
    }
    return helperDfsPreOrder(this.root);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const nodes = [];
    function helperDfsInOrder(node) {
      if(node.left) helperDfsInOrder(node.left);
      nodes.push(node.val);
      if(node.right) helperDfsInOrder(node.right);
      return nodes;
    }
    return helperDfsInOrder(this.root);
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const nodes = [];
    function helperDfsPostOrder(node) {
      if(node.left) helperDfsPostOrder(node.left);
      if (node.right) helperDfsPostOrder(node.right);
      nodes.push(node.val);
      return nodes;
    }
    return helperDfsPostOrder(this.root);
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = [this.root];
    let visited = [];
    while(toVisitQueue.length) {
      let current = toVisitQueue.shift();
      visited.push(current.val);
      if(current.left) toVisitQueue.push(current.left);
      if(current.right) toVisitQueue.push(current.right);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
