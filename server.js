// // Section 1: Variables (1–8)
// // What is the output?
// var a = 10;
// a = 15;
// console.log(a);     //output=15

// // What happens here?
// // let b = 20;
// // let b = 30;         //op=error b is already used in let we cant redeclare
    
// // What is the output?
// const c = 50;
// console.log(c);     //op=50

// // Identify error:
// // const x = 10;
// // x = 20;             //OP= x(var) cant be reused/reinitialised in const

// // Output?
// var p = 5;
// var p = 10;
// console.log(p);     //op=10 in var we can reused/reintialise

// // Output?
// let q = 25;
// q = q + 10;
// console.log(q);     //op=35

// // Output?
// const r = 7;
// console.log(r + 3);     //op=10

// // Fill correct keyword:
// // ___ a = 10;  
// var a =10
// console.log(a)

// // 🟢 Section 2: Console Methods (9–12)

// // Which method prints normal output?
// console.log("normal")       //prints statement/data on console

// // Which method shows warning?
// console.warn("warning")     //shows warning on console along with data

// // Which method shows error?
// console.error("error")      //shows error sign along with data on console

// // console.clear();         //clears data on console and also we can console was cleared.

// // 🟢 Section 3: Data Types (13–18)
// // Output?
// let ac = "hello";
// console.log(typeof ac);      //op=string type

// // Output?
// let bc = 100;
// console.log(typeof bc);      //op=number

// let cd = false;
// console.log(typeof cd);      //op=Boolean

// let dd;
// console.log(dd);             //op=undefined

// // What is type of null?       
// console.log(typeof(null))       //op=object/empty value

// // Convert string to number:
// // "25"
// var z=Number("25")
// console.log(typeof z)

// // 🟢 Section 4: Arrays (19–24)
// // Create array of 3 fruits.
// // Output?
// var fruit=["apple","banana",'orange']
// console.log(fruit)

// let arr1 = ["a","b","c"];
// console.log(arr1[1]);        //op= b

// let arr2 = ["x","y","z"];
// console.log(arr2[arr2.length-1]);        //op= z

// // How to get first element?
// let arr3=["first","second","third"]
// console.log(arr3[0])

// let arr = ["apple","banana"];
// console.log(arr.length);            //op=2

// // Add new element to array.
// let arr4=["a","b","c"]
// arr4.push("d")
// console.log(arr4)

// // 🟢 Section 5: Objects (25–28)
// // Create object with name & age.
// var user={
//     name:"srinu",
//     age:25
// }
// console.log(user.name)
// console.log(user.age)

// let obj = {name:"Naveen"};
// console.log(obj.name);      //op="Naveen"

// let obj1 = {
//   fruits: ["apple","banana"]
// };
// console.log(obj1.fruits[1]);     //op=banana

// // How to access last element inside object array?
// let sports={
//     indoor:["shuttle","chess","tennis","carroms"],
//     outdoor:["cricket","football"]
// }
// console.log(sports.indoor[sports.indoor.length-1])


// // 🟢 Section 6: Arithmetic Operators (29–32)

// console.log(5 + 3);    //op=8

// console.log(10 % 3);    //op=1  % it give remainder

// console.log(2 ** 3);    //op= 2**3=2*2*2 =8

// console.log(10 / 2);    //op=5 gives modulus


// // 🟢 Section 7: Increment / Decrement (33–36)

//  let a1 = 5;
// a1++;
// console.log(a1);         //op=6

// let b1 = 5;
// let c1 = b1++;
// console.log(b1, c1);      //op= 6,5

// let x = 5;
// let y = ++x;
// console.log(x, y);          //op= 6,6

// let m = 3;
// let n = m--;
// console.log(m, n);          //op= 2,3


// // 🟢 Section 8: Comparison & Logical (37–39)

// console.log(5 == "5");          //op= true - 2 equals/loose type only checks value

// console.log(5 === "5");         //op= false - 3 equals/strictly type checks value and type

// console.log(true && false || true);         //op= true because in and one false it will give false as op in or one true gives true as op.

// // 🟢 Section 9: Ternary (40)

// 5 > 3 ? console.log("Yes") : console.log("No");         //op= Yes because 5 is > than 3 so first condition is true so yes is the op

// JavaScript Tasks – Type Casting & Flow Control
// Task 1 – Predict the Output
// Write the output and datatype for below:
console.log("10"+5)
console.log(typeof("10" + 5))                   //op: 105  datatype:string

console.log(10+true)
console.log(typeof(10 + true))                  //op: 11    datatype:number

console.log(false+null)
console.log(typeof(false + null))               //op:0      data:number

console.log("Hello" + undefined)
console.log(typeof("Hello" + undefined))        //op:Helloundefined     datatype:string

console.log([1,2] + 5)
console.log(typeof([1,2] + 5))                  //op:1,25   datatype:string

// Task 2 – Implicit Type Casting
// Print datatype using typeof.
// Create examples for:

// String + Number
console.log("string"+5)
console.log(typeof("string"+5))         //op:string5    dt:str

// Boolean + Number
console.log(true+5)
console.log(typeof(true+5))             //op:6    dt:number

// Array + String
console.log([1,2,3]+"server")
console.log(typeof([1,2,3]+"server"))       //op:1,2,3server    dt:str

// Object + Number
console.log({k:8}+5)
console.log(typeof({k:8}+5))            //op:[object object]5    dt:str

// Null + Number
console.log(null+5)
console.log(typeof(null+5))             //op:5    dt:number

// Task 3 – Explicit Type Casting
// Convert the following into Number:
// "500"
console.log(Number("500"))

// true
console.log(Number(true))

// false
console.log(Number(false))

// null
console.log(Number(null))

// "abc"
console.log(Number("abc"))

// [100]
console.log(Number([100]))
// Print the outputs.

// Task 4 – Boolean Constructor
// Check whether below values are true or false using Boolean().
// ""
console.log(Boolean(""))            //op:false

// "javascript"
console.log(Boolean("javascript"))      //op:true

// 0
console.log(Boolean(0))         //op:false

// 1
console.log(Boolean(1))         //op:true

// null
console.log(Boolean(null))        //op:false

// undefined
console.log(Boolean(undefined))     //op:false

// []
console.log(Boolean([]))            //op:true

// {}
console.log(Boolean({}))            //op:true

// Task 5 – Student Pass or Fail
// Take one variable:
// let mark = 45
// Condition:
// Above 35 → Pass
// Below 35 → Fail
// Use if else.
let mark=45;        //prompt()
if(mark>35){
    console.log("pass")
}
else{
    console.log("fail")
}

// Task 6 – Voting Eligibility
// Create a variable:
// let age = 20
// Conditions:
// 18 and above → Eligible
// Otherwise → Not Eligible
let age=20;         //prompt()
if(age>=18){
    console.log("Eligible")
}
else{
    console.log("not Eligible")
}

// Task 7 – Greatest Number
// Find greatest among 3 numbers using if else if.
// Example:
let a = 50;
let b = 80;
let c = 30;

if(a>b && a>c){
    console.log("A is greatest")
}
else if(b>a && b>c){
    console.log("B is greatest")
}
else{
    console.log("C is greatest")
}

// Task 8 – Traffic Light System
// Using switch statement:
// red → stop
// yellow → ready
// green → go

let Trafficlight="red"          //we can use prompt and alert too

switch (Trafficlight){
    case "red": console.log("stop");
    break;
    
    case "yellow": console.log("ready");
    break;

    case "green": console.log("go");
    break;

    default: console.log("have a nice day");
    break;
}

// Task 9 – Login System
// Create variables:
// let username = "admin"
// let password = "1234"
// Conditions:
// Both correct → Login Success
// Otherwise → Invalid Login
// Use nested if.
let user="admin"        //prompt()
let pass= "1234"        //prompt()

if(user=="admin"){
    if(pass=="1234"){
        console.log("Login Success")
    }
    else{
        console.log("Invalid ")
    }
}
else{
    console.log("Invalid Login")
}

// Task 10 – Session Finder
// Take hour value:
// let hour = 14
// Conditions:
// 1–12 → Morning
// 13–15 → Afternoon
// 16–19 → Evening
// 20–24 → Night
// Use else if.

let hour=16       //prompt()

if(hour>=1 && hour<=12){
    console.log("Morning")
}
else if(hour>=13 && hour<=15){
    console.log("Afternoon")
}
else if(hour>=16 && hour<=19){
    console.log("Evening")
}
else if(hour>=20 && hour<=24){
    console.log("Night")
}
else{
    console.log("midnight")
}

// Bonus Challenge 🔥
// Predict outputs without running:
console.log(true + true)        //op:2

console.log("5" - 2)            //op:3

console.log("5" + 2)            //op:52

console.log(null + 1)           //op:1

console.log(undefined + 1)      //op:Nan

console.log(Boolean(" "))       //op:true

console.log(Number(true))       //op:1
