// Section 1: Variables (1–8)
// What is the output?
var a = 10;
a = 15;
console.log(a);     //output=15

// What happens here?
// let b = 20;
// let b = 30;         //op=error b is already used in let we cant redeclare
    
// What is the output?
const c = 50;
console.log(c);     //op=50

// Identify error:
// const x = 10;
// x = 20;             //OP= x(var) cant be reused/reinitialised in const

// Output?
var p = 5;
var p = 10;
console.log(p);     //op=10 in var we can reused/reintialise

// Output?
let q = 25;
q = q + 10;
console.log(q);     //op=35

// Output?
const r = 7;
console.log(r + 3);     //op=10

// Fill correct keyword:
// ___ a = 10;  
var a =10
console.log(a)

// 🟢 Section 2: Console Methods (9–12)

// Which method prints normal output?
console.log("normal")       //prints statement/data on console

// Which method shows warning?
console.warn("warning")     //shows warning on console along with data

// Which method shows error?
console.error("error")      //shows error sign along with data on console

// console.clear();         //clears data on console and also we can console was cleared.

// 🟢 Section 3: Data Types (13–18)
// Output?
let ac = "hello";
console.log(typeof ac);      //op=string type

// Output?
let bc = 100;
console.log(typeof bc);      //op=number

let cd = false;
console.log(typeof cd);      //op=Boolean

let dd;
console.log(dd);             //op=undefined

// What is type of null?       
console.log(typeof(null))       //op=object/empty value

// Convert string to number:
// "25"
var z=Number("25")
console.log(typeof z)

// 🟢 Section 4: Arrays (19–24)
// Create array of 3 fruits.
// Output?
var fruit=["apple","banana",'orange']
console.log(fruit)

let arr1 = ["a","b","c"];
console.log(arr1[1]);        //op= b

let arr2 = ["x","y","z"];
console.log(arr2[arr2.length-1]);        //op= z

// How to get first element?
let arr3=["first","second","third"]
console.log(arr3[0])

let arr = ["apple","banana"];
console.log(arr.length);            //op=2

// Add new element to array.
let arr4=["a","b","c"]
arr4.push("d")
console.log(arr4)

// 🟢 Section 5: Objects (25–28)
// Create object with name & age.
var user={
    name:"srinu",
    age:25
}
console.log(user.name)
console.log(user.age)

let obj = {name:"Naveen"};
console.log(obj.name);      //op="Naveen"

let obj1 = {
  fruits: ["apple","banana"]
};
console.log(obj1.fruits[1]);     //op=banana

// How to access last element inside object array?
let sports={
    indoor:["shuttle","chess","tennis","carroms"],
    outdoor:["cricket","football"]
}
console.log(sports.indoor[sports.indoor.length-1])


// 🟢 Section 6: Arithmetic Operators (29–32)

console.log(5 + 3);    //op=8

console.log(10 % 3);    //op=1  % it give remainder

console.log(2 ** 3);    //op= 2**3=2*2*2 =8

console.log(10 / 2);    //op=5 gives modulus


// 🟢 Section 7: Increment / Decrement (33–36)

 let a1 = 5;
a1++;
console.log(a1);         //op=6

let b1 = 5;
let c1 = b1++;
console.log(b1, c1);      //op= 6,5

let x = 5;
let y = ++x;
console.log(x, y);          //op= 6,6

let m = 3;
let n = m--;
console.log(m, n);          //op= 2,3


// 🟢 Section 8: Comparison & Logical (37–39)

console.log(5 == "5");          //op= true - 2 equals/loose type only checks value

console.log(5 === "5");         //op= false - 3 equals/strictly type checks value and type

console.log(true && false || true);         //op= true because in and one false it will give false as op in or one true gives true as op.

// 🟢 Section 9: Ternary (40)

5 > 3 ? console.log("Yes") : console.log("No");         //op= Yes because 5 is > than 3 so first condition is true so yes is the op

