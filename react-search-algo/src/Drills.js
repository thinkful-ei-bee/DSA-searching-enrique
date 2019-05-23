const BinarySearchTree= require('./BinarySearchTree')
const Queue = require('./Queue')


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
    console.log(tree)

   

    console.log('+++++Pre order traversal:');
    preOrderTraversal(tree)
  
    console.log('******Inorder traversal:');
    inOrderTraversal(tree)
  
    console.log('&&&&&PostOrder traversal:');
    postOrderTraversal(tree)
  }
  




  function codeStarTrek(arr){
    const tree = new BinarySearchTree();
    

    for(let i=0; i<arr.length; i++){
        let key= Object.keys(arr[i])
        let value= Object.values(arr[i])
  

        tree.insert(key, value)

      
    }
    
    let trekList = []
   let nodeKey = breadthFirstSearch(tree)
   trekList.push(nodeKey)
 console.log('===========TrekList from codeStarTrek=================')
 console.log(trekList)
 console.log(nodeKey)

 console.log('=============================')
  }

  function breadthFirstSearch(node){
    //   console.log('NODE FROM BFS:', node)
    //   console.log('^^^^^^^^^^^^^^^^')
    let values=[]
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    queue.enqueue(node.left)
    // console.log(queue, '<-queue')
    // console.log(`node.key : ${node.key}`)
    // console.log(`node.value : ${node.value}`)
    // console.log(`node.left : ${node.left.BinarySearchTree}`)
    // console.log(`node.right : ${node.right}`)

    while (queue.length) {
       node = queue.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array


        console.log('here')
        console.log('^^^^^^^^^^^^^^^^')
        console.log('values:', values)


        if (node.left) {
            queue.enqueue(node.left);
            breadthFirstSearch(node.left) //add left child to the queue
        }
      
        if (node.right) {
            queue.enqueue(node.right); 
            breadthFirstSearch(node.right)
            // add right child to the queue
        }
        console.log('<-queue',queue )
        return values;
    }
   
}











 function DSFInOrder(){
    if (this.left) {
        this.left.dsfInOrder();
    }
    console.log(this.key);
    if (this.right) {
        this.right.dsfInOrder();
    }
}

  function DSFInOrder2(values=[]) {
    if (this.left) {
        values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
}




/* Exercise 3
Imagine you are looking for a book in a library with a Dewey Decimal index. 
How would you go about it? Can you express this process as a searching algorithm?
*/

    //sample input
    const library = [
      { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
      { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
      { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
      { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
      { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
      { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
      { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
      { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
      { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
      { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
    ];

function find_book(library, dewey, title) {
	var start = 0, end = library.length;
	while (start < end) {
		var middle = Math.floor((start + end) / 2);
		if (library[middle].dewey == dewey) {
			//Found the right code. Great! Did we find the book?
			if (library[middle].title == title) 
				return library[middle];
			//Nope. Linearly search around for the book we want.
			for (var idx = middle + 1; library[idx].dewey == dewey; ++idx)
				if (library[idx].title == title) 
					return library[idx];
			for (var idx = middle - 1; library[idx].dewey == dewey; --idx)
				if (library[idx].title == title) 
					return library[idx];
			//Well, we found the right section, but the book isn't
			//here. Guess someone else has borrowed it. Sorry!
			return null;
		}
		if (library[middle].dewey < dewey)
			start = middle + 1;
		else
			end = middle - 1;
	}
	//We don't have anything of that Dewey code, so that book isn't
	//available. Sorry! Try another library.
	return null;
}






function best_profit(prices){
  if (!prices.length) return 0;
	//Algorithm: Step through potential selling days. If the price
	//is lower than our current buying day, switch to a new buying
	//day. If the price diff between buying and selling days is
	//greater than our current best, it's our new best.
	var buy = prices[0], sell = prices[0], profit = 0;
	for (var i = 1; i < prices.length; ++i) {
		sell = prices[i];
		if (sell < buy) buy = sell;
		if (sell - buy > profit) profit = sell - buy;
	}
	return profit;
}

//Tests for best_profit
//1) The sample array
console.log(best_profit([128, 97, 121, 123, 98, 97, 105]));

function generate_prices(start, step, spread, length) {
	var ret = [];
	while (length--) {
		ret.push(start + Math.floor(Math.random()*spread - spread/2));
		start += step;
	}
	return ret;
}
for (var i = 0; i < 10; ++i) {
	var prices = generate_prices(100, 2, 10, 10);
	console.log("Profit", best_profit(prices), "from", prices);
}
for (var i = 0; i < 10; ++i) {
	var prices = generate_prices(100, -2, 10, 10);
	console.log("Profit", best_profit(prices), "from", prices);
}


/* Exercise 6
Imagine that you wanted to find what the highest floor of a 100 story building 
you could drop an egg was, without the egg breaking. But you only have two eggs. 
Write an algorithm to work out which floors you should drop the eggs from to 
find this out in the most efficient way.
Before you look at the solution - here is a good read: http://datagenetics.com/blog/july22012/index.html
*/

function egg_drop_practical(maxheight) {
	//Anyone who's worked with eggs knows that even a first-floor drop
	//will break an unprotected egg. So don't bother dropping them. Just
	//assume the answer is 0, and enjoy the eggs. :)
	console.log("Fry both eggs and eat them for lunch.");
	return 0;
}

function egg_drop_binary(maxheight) {
	//Okay, this one's for real. Attempt to drop eggs from different
	//heights, and see if they break. Depends on a function drop_egg(h)
	//that returns true if the egg broke, or false if it did not; this
	//function is not implemented here.
	//Optimized for the smallest number of attempts.
	var minheight = 0; ++maxheight;
	while (maxheight > minheight + 1) {
		var height = Math.floor((maxheight + minheight) / 2);
		if (drop_egg(height)) {
			//Oops, egg broke.
			maxheight = height;
		} else {
			//Whew, egg didn't break.
			minheight = height;
		}
	}
	return minheight;
}

function egg_drop_linear(maxheight) {
	//This time, optimize for the smallest number of _failures_. Again,
	//depends on drop_egg(h). Note that this ignores the risk of an egg
	//cracking without completely smashing - it pretends that a "safe"
	//drop lets you reuse the egg.
	for (var height = 1; height <= maxheight; ++height)
		if (drop_egg(height)) return height - 1;
	return maxheight;
}

function egg_drop_triangle(maxheight) {
	//Thirdly, optimizing for number of drops, relying on the fact that
	//we can afford to smash one egg and keep on dropping.
	//Algorithm from http://datagenetics.com/blog/july22012/index.html
	var jump = Math.floor(Math.sqrt(2 * maxheight));
	var floor = jump;
	while (floor <= maxheight && !drop_egg(floor)) {
		// Jump up one less floor each time (because we have done one
		// extra drop).
		if (jump > 1) --jump;
		floor += jump;
	}

	// When it breaks, go back to the highest known good floor
	floor -= jump;

	// Then work up one floor at a time
	while (++floor <= maxheight && !drop_egg(floor)) ;
	return floor - 1;
}

//Tests for egg drop functions. We attempt both algorithms with a variety of
//egg strengths (defined by changing the real_max). The binary search will
//finish a lot more quickly than the linear one will, but it's likely to get
//a few splots along the way.....
var real_max;
function drop_egg(height) {
	console.log("["+real_max+"] Dropping egg from "+height+"...",
		height>real_max ? "SPLOT" : "Safe");
	return height > real_max;
}
console.log("================"); real_max = 0;
console.log("Practical:", egg_drop_practical(100));
console.log("----------------");
console.log("Binary:", egg_drop_binary(100));
console.log("----------------");
console.log("Linear:", egg_drop_linear(100));
console.log("----------------");
console.log("Triang:", egg_drop_triangle(100));
console.log("================"); real_max = 17;
console.log("Binary:", egg_drop_binary(100));
console.log("----------------");
console.log("Linear:", egg_drop_linear(100));
console.log("----------------");
console.log("Triang:", egg_drop_triangle(100));
console.log("================"); real_max = 96;
console.log("Binary:", egg_drop_binary(100));
console.log("----------------");
console.log("Linear:", egg_drop_linear(100));
console.log("----------------");
console.log("Triang:", egg_drop_triangle(100));
console.log("================"); real_max = 200;
console.log("Binary:", egg_drop_binary(100));
console.log("----------------");
console.log("Linear:", egg_drop_linear(100));
console.log("----------------");
console.log("Triang:", egg_drop_triangle(100));
console.log("================");










function main() {
    const arr = [35, 89, 91, 90, 79, 25, 27, 15, 19, 14];
    
    
    const arr1 = [ 8, 10, 11, 9, 6, 5, 7];
    const arr2= [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
    const arr3= [{5:"picard"}, {6:"data"}, {8:'crusher'}, {7:'selar'}, {4:'riker'}, {2:'worf'}, {1:'officer'}, {3:'laforge'} ]
    
    let priceArr = [128, 97, 121, 123, 98, 97, 105]


    // best_profit(priceArr)

    codeStarTrek(arr3)
//    codeTree(arr2)
  }
  
  main();






