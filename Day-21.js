loops 
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
Print numbers from 1-100.
loops - for 
if(){}
for(starting limit, condition with ending limit, steps){}

for(var i = 1; i <= 20; i = i + 1  ){
    console.log(i)
}
for(var i = 1; i <= 20; i = i + 2  ){
    console.log(i)
}
for(var i = 10; i <= 20; i = i + 1  ){
    console.log(i)
}
for(var i = 10; i <= 100; i = i + 5  ){
    console.log(i)
}
for(var i = 1; i <= 50; i = i + 3  ){
    console.log(i)
}
for(var i = 0; i <= 80; i = i + 4  ){
    console.log(i)
}

1 iteration :  var i = 1,  1 <= 5 - true , log(1); i=1 +1; i = 2
2 ieteration ; var i = 2,  2 <= 5 -true , log(2); i = 2 +1  = i =3
3 iertation; var i =3; 3<= 5 - true, log(3); i = 3 +1 = 4
4
5 iteration var i =5; 5 <= 5 -true, log(5); i = 5 + 1 =6
6 iteration var i = 6; 6 <=5 - false = stop


console.log("Outside function..");
function kuchbhi (){
    console.log("Inside function..")
}
kuchbhi();

// Q. Print number from given Range, 
var start = 30;
var end = 40;
function Irise(megha, pratiksha) {
    // console.log(megha, pratiksha, "cehcek here")
    for (var i = megha; i <= pratiksha; i++) {
        console.log(i)
    }
}
Irise(start, end);

var end = 30;
function Irise(hello) {
    // console.log(megha, pratiksha, "cehcek here")
    for (var i = 0; i <= hello; i = i + 2) {
        console.log(i)
    }
}
Irise(end);

// Function condition statement loops 

var end = 250;
function Irise(end) {
    if(end > 80){
        for(var i =0; i < end; i++){
            console.log(i,"- i")
        }
    } else {
        console.log("End is less than 80..")
    }
}
Irise(end);