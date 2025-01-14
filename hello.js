console.log("This is written inside the newly made hello.js file ");
//below is a demonstration of how to make a simple function in javascript..

function addition(a,b){
    console.log(`Addition of ${a} and ${b} is ${a+b}.`)
}

addition(20,30) ;

function Person(name){
    this.name = name ; 
    this.greet = function() {
        console.log(`Hello ${this.name}`);
    }
}
let p1 = new Person("Virat Kohli") ;
let p2 = new Person("Rohit Sharma");
p1.greet();
p2.greet();


// Feature	                var	                              let	                         const
// Scope	            Function-scoped	                  Block-scoped	                 Block-scoped
// Hoisting	  Yes, initialized to undefined	       Yes, but uninitialized	        Yes, but uninitialized
// Reassignment	         Allowed	                                Allowed	                Not allowed
// Redeclaration	    Allowed	                           Not allowed	                    Not allowed
// Mutability	       Fully mutable	               Fully mutable	   Immutable binding, mutable content for objects