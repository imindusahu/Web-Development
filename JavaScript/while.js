<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While loop</title>
</head>
<body>
    <h1>While Loop</h1>
    <script>
    //while loop
let i=0;
while(i<5){
    console.log("Namaste India!");
    i++;
}

//do.....while loop
let j=0;
do{
    console.log("Namaste London!")
    j++;
}
while(j<5);

//for...in loop
//Object
let animal={
    name1:"Zebra",
    name2:"Elephant"
};
for(let key in animal){
console.log(key,animal[key]);
}
//Dot Notation
console.log(animal.name1);

//Bracket Notation
console.log(animal["name2"]);


//Arrays
let names=["Akhand","Ujjwal","Pavitra","Manas","Sanskar","Saubhagya","Saurya"];
for(let index in names){
    console.log(index,names[index]);
}

//for.....of loop
for(let name of names){
    console.log(name);
}   

let selectBooks = ["The Rudest book Ever","Think and Grow Rich","Invisible Man"]    
 console.log(selectBooks.reverse());
 console.log(selectBooks.length);
 console.log(selectBooks.sort());

 let number = 10;
 let number_1 = 10;
 console.log(number);
 console.log(number)

</script>
</body>
</html>
