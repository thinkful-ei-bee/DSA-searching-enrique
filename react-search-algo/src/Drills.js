const BinarySearchTree= require('./BinarySearchTree')



// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. 
// Identify the sequence of numbers that each recursive call will search to find 8.

    //  1st call:   start: 3, end: 18, midpoint: 11
    //  2nd call: start: 3, end: 8, midpoint: 5
    //  3rd call: start: 6, end: 8, midpoint: 6
   //   4th call:  start: 8, end: 8, midpoint: 8
    // returns index of 3
   
//=============================

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. 
// Identify the sequence of numbers that each recursive call will search to find 16?
    //1st call start: 3, end: 18, middle: 11
    //2nd call start: 12, end: 18, middle: 15
    //3rd call start: 17, end: 18, middle: 17
    //returns -1
    
//=============================

   // Given a binary search tree whose in-order and pre-order traversals are 
   //respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90.

//                         35
//                      /      \
//                    25        89
//                    / \      /  \
//                   15  27   79   91
//                  /  \           /
//                14    19       90


   // What would be its postorder traversal?
        //14,19,15,27,25,79,90,91,89,35

//=============================

    //The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
         // 8,6,5,7,10,9,11   


                    //         8
                    //       /   \
                    //      6     10 
                    //     / \    / \
                    //    5   7  9  11

//=============================



  
  function preOrderTraversal(node){
    console.log(node.key)
  
    if(node.left) {
      preOrderTraversal(node.left);
    }
    if(node.right){
      preOrderTraversal(node.right);
    }
  }
  
  function inOrderTraversal(node) {
    if(node.left) {
      inOrderTraversal(node.left);
    }
    
    console.log(node.key);
  
    if(node.right){
      inOrderTraversal(node.right);
    }
    
  }
  
  function postOrderTraversal(node) {
    if(node.left) {
      postOrderTraversal(node.left);
    }
    
    if(node.right){
      postOrderTraversal(node.right);
    }
    
    console.log(node.key);
  }
  
  function codeTree(arr) {
    const tree = new BinarySearchTree();
    arr.forEach(num => tree.insert(num, num));
    // console.log(tree)



    console.log('+++++Pre order traversal:');
    preOrderTraversal(tree)
  
    console.log('******Inorder traversal:');
    inOrderTraversal(tree)
  
    console.log('&&&&&PostOrder traversal:');
    postOrderTraversal(tree)
  }
  
  
  function main() {
    const arr = [35, 89, 91, 90, 79, 25, 27, 15, 19, 14];
   
    
    const arr1 = [ 8, 10, 11, 9, 6, 5, 7];
  

   codeTree(arr1)
  }
  
  main();






