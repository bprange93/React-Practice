//using the var variable makes the variable only accessible inside of the function. 
//using the let variable keyword makes the variable only accessible inside of the block it is being used in. 
//Majority of the time get used to using the let keyword
//const is the same as let being only block scoped.
function sayHello(){    
    for (let i =0; i < 5; i++) {
        console.log(i);
    }
}

sayHello();