
// I) OUTPUTS


console.log("\n"+ "Excercise 1");
excercise_1(); // should retunr "undefined"
excercise_1_Interpreted(); // should return "undefined"

console.log("\n"+ "Excercise 2");
excercise_2(); // should return "magnet"
excercise_2_Interpreted(); // should return "magnet"

console.log("\n"+ "Excercise 3");
excercise_3(); // should return "super cool"
excercise_3_Interpreted(); // should return "super cool"

console.log("\n"+ "Excercise 4");
excercise_4(); // should return "chicken" and "half-chicken"
excercise_4_Interpreted(); // should return "chicken" and "half-chicken"

console.log("\n"+ "Excercise 5");
//excercise_5(); // should return a run time error: "mean is not a function"
//excercise_5_Interpreted(); //should return a run time error: "mean is not a function"

console.log("\n"+ "Excercise 6");
excercise_6(); // should return "undefined", "rock", "r&b" and "disco"
excercise_6_Interpreted(); // should return "undefined", "rock", "r&b" and "disco"

console.log("\n"+ "Excercise 7");
excercise_7(); // should return "san jose", "seattle", "burbank" and "san jose"
excercise_7_Interpreted(); // should return "san jose", "seattle", "burbank" and "san jose"

console.log("\n"+ "Excercise 8");
//excercise_8(); // should return a run time error: "assignment to constant error"
//excercise_8_Interpreted(); // should return a run time error: "assignment to constant error"

// II) EXCERCISES

// -----------------------------------
//Excercise 1

function excercise_1(){
    
    console.log(hello);                                   
    var hello = 'world';    
}

function excercise_1_Interpreted(){
    
    var hello;
    console.log(hello);                                   
    hello = 'world';    
}

// -----------------------------------
//Excercise 2

function excercise_2(){
    
    var needle = 'haystack';
    test();
    function test(){
        var needle = 'magnet';
        console.log(needle);
    }   
}

function excercise_2_Interpreted(){
    
    var needle;
    needle = 'haystack';
    test();
    function test(){
        var needle;
        needle = 'magnet';
        console.log(needle);
    }     
}

// -----------------------------------
// Excercise 3

function excercise_3(){
    
    var brendan = 'super cool';
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan); 
}

function excercise_3_Interpreted(){
    
    var brendan;
    brendan = 'super cool';
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan); 
}

// -----------------------------------
// Excercise 4

function excercise_4(){
    
    var food = 'chicken';
    console.log(food);
    eat();
    function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }
}

function excercise_4_Interpreted(){
    
    var food;
    food = 'chicken';
    console.log(food);
    eat();
    function eat(){
        var food;
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
    }
}

// -----------------------------------
// Excercise 5

// function excercise_5(){
    
//     mean();
//     console.log(food);
//     var mean = function() {
//         food = "chicken";
//         console.log(food);
//         var food = "fish";
//         console.log(food);
//     }
//     console.log(food);
// }

function excercise_5_Interpreted(){
    
    var mean;
    mean();
    console.log(food);
    mean = function() {
        var food;
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    }
    console.log(food);
}

// -----------------------------------
// Excercise 6

function excercise_6(){
    
    console.log(genre);
    var genre = "disco";
    rewind();
    function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
    }
    console.log(genre);
}

function excercise_6_Interpreted(){
    
    var genre;
    console.log(genre);
    genre = "disco";
    rewind();
    function rewind() {
        var genre;
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    }
    console.log(genre);
}

// -----------------------------------
// Excercise 7

function excercise_7(){
    
    dojo = "san jose";
    console.log(dojo);
    learn();
    function learn() {
        dojo = "seattle";
        console.log(dojo);
        var dojo = "burbank";
        console.log(dojo);
    }
    console.log(dojo);
}

function excercise_7_Interpreted(){
    
    var dojo;
    dojo = "san jose";
    console.log(dojo);
    learn();
    function learn() {
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
    console.log(dojo);
}

// -----------------------------------
// Excercise 7

function excercise_8(){
    
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
}

function excercise_8_Interpreted(){
    
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
}

// -----------------------------------