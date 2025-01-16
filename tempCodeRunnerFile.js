const player = {
    name : "Virat Kohli",
    age : 36 , 
    skill : "Batter" ,
    greet : function(){
        console.log(this);
        console.log(`${this.name} is the greatest of all time.......`);
    }
}
player.name = "Rohit Sharma" ;
player.greet();