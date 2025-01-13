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