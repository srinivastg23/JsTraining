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
// console.log("10"+5)
// console.log(typeof("10" + 5))                   //op: 105  datatype:string

// console.log(10+true)
// console.log(typeof(10 + true))                  //op: 11    datatype:number

// console.log(false+null)
// console.log(typeof(false + null))               //op:0      data:number

// console.log("Hello" + undefined)
// console.log(typeof("Hello" + undefined))        //op:Helloundefined     datatype:string

// console.log([1,2] + 5)
// console.log(typeof([1,2] + 5))                  //op:1,25   datatype:string

// // Task 2 – Implicit Type Casting
// // Print datatype using typeof.
// // Create examples for:

// // String + Number
// console.log("string"+5)
// console.log(typeof("string"+5))         //op:string5    dt:str

// // Boolean + Number
// console.log(true+5)
// console.log(typeof(true+5))             //op:6    dt:number

// // Array + String
// console.log([1,2,3]+"server")
// console.log(typeof([1,2,3]+"server"))       //op:1,2,3server    dt:str

// // Object + Number
// console.log({k:8}+5)
// console.log(typeof({k:8}+5))            //op:[object object]5    dt:str

// // Null + Number
// console.log(null+5)
// console.log(typeof(null+5))             //op:5    dt:number

// // Task 3 – Explicit Type Casting
// // Convert the following into Number:
// // "500"
// console.log(Number("500"))              //op=500

// // true
// console.log(Number(true))               //op=1

// // false
// console.log(Number(false))      //op=0

// // null
// console.log(Number(null))       //op=0

// // "abc"
// console.log(Number("abc"))      //op=Nan

// // [100]
// console.log(Number([100]))      //op=100
// // Print the outputs.

// // Task 4 – Boolean Constructor
// // Check whether below values are true or false using Boolean().
// // ""
// console.log(Boolean(""))            //op:false

// // "javascript"
// console.log(Boolean("javascript"))      //op:true

// // 0
// console.log(Boolean(0))         //op:false

// // 1
// console.log(Boolean(1))         //op:true

// // null
// console.log(Boolean(null))        //op:false

// // undefined
// console.log(Boolean(undefined))     //op:false

// // []
// console.log(Boolean([]))            //op:true

// // {}
// console.log(Boolean({}))            //op:true

// // Task 5 – Student Pass or Fail
// // Take one variable:
// // let mark = 45
// // Condition:
// // Above 35 → Pass
// // Below 35 → Fail
// // Use if else.
// let mark=45;        //prompt()
// if(mark>35){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }

// // Task 6 – Voting Eligibility
// // Create a variable:
// // let age = 20
// // Conditions:
// // 18 and above → Eligible
// // Otherwise → Not Eligible
// let age=20;         //prompt()
// if(age>=18){
//     console.log("Eligible")
// }
// else{
//     console.log("not Eligible")
// }

// // Task 7 – Greatest Number
// // Find greatest among 3 numbers using if else if.
// // Example:
// let a = 50;
// let b = 80;
// let c = 30;

// if(a>b && a>c){
//     console.log("A is greatest")
// }
// else if(b>a && b>c){
//     console.log("B is greatest")
// }
// else{
//     console.log("C is greatest")
// }

// // Task 8 – Traffic Light System
// // Using switch statement:
// // red → stop
// // yellow → ready
// // green → go

// let Trafficlight="red"          //we can use prompt and alert too

// switch (Trafficlight){
//     case "red": console.log("stop");
//     break;
    
//     case "yellow": console.log("ready");
//     break;

//     case "green": console.log("go");
//     break;

//     default: console.log("have a nice day");
//     break;
// }

// // Task 9 – Login System
// // Create variables:
// // let username = "admin"
// // let password = "1234"
// // Conditions:
// // Both correct → Login Success
// // Otherwise → Invalid Login
// // Use nested if.
// let user="admin"        //prompt()
// let pass= "1234"        //prompt()

// if(user=="admin"){
//     if(pass=="1234"){
//         console.log("Login Success")
//     }
//     else{
//         console.log("Invalid ")
//     }
// }
// else{
//     console.log("Invalid Login")
// }

// // Task 10 – Session Finder
// // Take hour value:
// // let hour = 14
// // Conditions:
// // 1–12 → Morning
// // 13–15 → Afternoon
// // 16–19 → Evening
// // 20–24 → Night
// // Use else if.

// let hour=16       //prompt()

// if(hour>=1 && hour<=12){
//     console.log("Morning")
// }
// else if(hour>=13 && hour<=15){
//     console.log("Afternoon")
// }
// else if(hour>=16 && hour<=19){
//     console.log("Evening")
// }
// else if(hour>=20 && hour<=24){
//     console.log("Night")
// }
// else{
//     console.log("midnight")
// }

// // Bonus Challenge 🔥
// // Predict outputs without running:
// console.log(true + true)        //op:2

// console.log("5" - 2)            //op:3

// console.log("5" + 2)            //op:52

// console.log(null + 1)           //op:1

// console.log(undefined + 1)      //op:Nan

// console.log(Boolean(" "))       //op:true

// console.log(Number(true))       //op:1


// Looping Statements
// 1. Print Numbers
// Print numbers from 1 to 20 using a for loop.

// for(let a=1; a<=20; a++){
//     console.log(a);
// }

// // 2. Odd Numbers
// // Print all odd numbers from 1 to 50.

// for(let i=1; i<=50; i++){
//     if(i%2==1){
//         console.log(i)
//     }
// }
// // 3. Multiplication Table
// // Print the multiplication table of 7.
// // Example:
// // 7 x 1 = 7
// // 7 x 2 = 14

// for(let i=1; i<=10; i++){
//     console.log("7 x "+i+" = "+(7*i))
// }

// // 4. Reverse Counting
// // Using while loop, print numbers from 20 to 1.

// let i=20
// while(i>0){
//     console.log(i);
//     i--
// }

// // 5. Sum of Numbers
// // Find the total sum of numbers from 1 to 100.
// let totalsum=0
// for (let i=1; i<=100; i++){
//     totalsum+=i
// }
// console.log(totalsum)
// // 6. Array Loop
// // Loop through this array and print all values.

// let fruits = ["apple","banana","orange","grapes"];
// for(let x in fruits){
//     console.log(fruits[x]);
// }

// // 7. Count Even Numbers
// // Count how many even numbers are present between 1 to 50.
// let count=0;
// for(let x=1; x<=50; x++){
//     if(x%2==0){
//         count++
//     }
// }
// console.log(count)
// // 8. Star Pattern
// // Print this pattern using loops:
// // *
// // **
// // ***
// // ****
// // *****
// for(let i=1; i<=5; i++){
//     let star=""

//     for (let j=1; j<=i; j++){
//         star+="*"
//     }
//     console.log(star)
// }
// // Functions
// // 9. Simple Function
// // Create a function named welcome() that prints:
// // Welcome to JavaScript

// function welcome(){
//     console.log("Welcome to Javascript")
// }
// welcome()

// // 10. Function with Parameter
// // Create a function that accepts a name and prints:
// // Hello Naveen

// function  user(name) {
//     console.log("Hello", name)
// }
// user("srinivas")

// // 11. Add Two Numbers
// // Create a function that takes 2 numbers and returns the addition.
// // Example:
// // add(10,20)
// // Output:
// // 30
// function add(num1,num2){
//     return(num1+num2)
// }
// let sum=add(10,20)
// console.log(sum)

// // 12. Salary Bonus
// // Create a function that adds bonus to employee salary.
// // Example:
// // salary = 50000
// // bonus = 5000
// // Output:
// // 55000

// let emp1={
//     salary:50000
// }

// function total(bonus){
//     console.log(emp1.salary+bonus)
// }
// total(5000)

// // 13. Object Loop
// // Print all keys and values using for in.
//  let student = {
//      name : "Rahul",
//      course : "JavaScript",
//      marks : 95
//  }

//  for (let z in student){
//     console.log(z,":",student[z])
//  }

// // 14. Find Largest Number
// // Create a function to find the largest number between two values.
// // Example:
// // largest(10,50)
// // Output:
// // 50

// function largest(value1,value2){
//     if(value1>value2){
//         console.log(value1)
//     }
//     else{
//         console.log(value2)
//     }
// }
// largest(10,50)

// // 15. Mini Employee Task
// // Create an employee object and print:
// // Employee Name
// // Department
// // Salary
// // Salary after bonus
// // Using:
// // object
// // function
// // parameter
// // console.log()

// let Employee={
//     name:"Srinivas",
//     department:"IT",
//     salary:100000
// }

// function Data(bonus){
//     console.log(Employee.name);
//     console.log(Employee.department);
//     console.log(Employee.salary)
//     console.log(Employee.salary+bonus);
// }
// Data(20000)

                                                    //Task-4
// Task 1 — Basic Function
// Create a function called welcomeUser.
// Requirements:
// Accept name
// Print:
// Welcome Naveen
// Example:
// welcomeUser("Naveen")

// function welcomeUser(name){
//     console.log("Welcome",name)
// }
// welcomeUser("Srinivas")

// // Task 2 — Parameter + Return
// // Create a function squareNumber.
// // Requirements:
// // Accept one number
// // Return square value
// // Example:
// // squareNumber(5)
// // Output:
// // 25

// function square(num){
//     return(num**2)
// }
// let squareRoot=square(5)
// console.log(squareRoot)

// // Task 3 — Object Function
// // Create an object:
// // {
// //    name : "Rahul",
// //    salary : 50000
// // }
// // Requirements:
// // Create a function:
// // employeeBonus(bonus)
// // Output:
// // Rahul
// // 55000

// let Emp={
//     name:"saisrinivas",
//     salary:50000
// }

// function totalSalary(bonus){
//     console.log(Emp.name)
//     console.log(Emp.salary+bonus);
    
// }
// totalSalary(5000)

// // Task 4 — Scope Checking
// // Inside a function:
// // Create var
// // Create let
// // Create const
// // Requirements:
// // Try accessing them outside block
// // Observe which works and which gives error

// function scopeCheck(){
//     if(true){
//         var a="var is a global scope";
//         let b="let is block scope";
//         const c="const is also block scope"
//     }
//     console.log(a);         //true
//     //console.log(b);          //trie
//     //console.log(c);       //true
// }
// scopeCheck()

// // Task 5 — Arrow Function
// // Convert this into arrow function:
// // function add(a,b){
// //    console.log(a+b);
// // }

// var add=(a,b)=>{
//     console.log(a+b)
// }
// add(10,20)

// // Task 6 — Callback Function
// // Create:
// // multiply
// // calculator
// // Requirements:
// // calculator should accept:
// // callback function
// // two numbers
// // Example:
// // calculator(multiply,5,2)
// // Output:
// // 10

// function calculator(callback,a,b){
//     callback(a,b)
// }
// function multiply(a,b){
//     console.log(a*b)
// }
// calculator(multiply,5,2)

// // Task 7 — Generator Function
// // Create generator function offers.
// // Requirements:
// // Yield:
// // "50% OFF"
// // "Free Delivery"
// // "Cashback"
// // Use:
// // next()
// // to print values one by one.

// function* generator(){
//     yield "50% OFF";
//     yield "Free Delivery";
//     yield "Cashback"
// }
// let offers=generator()

// console.log(offers.next().value)
// console.log(offers.next().value)
// console.log(offers.next().value)

// // Task 8 — Default Parameter
// // Create:
// // student(name,course="JavaScript")
// // Requirements:
// // If course not passed,
// // default should become "JavaScript".

// function student(name,course="javascript"){
//     console.log("name:"+name,"course:"+course)
// }
// student("srinivas","passed");
// student("Ram");
// student("sai","passed")

// // Task 9 — Currying
// // Create currying function for multiplication.
// // Example:
// // multi(2)(3)(4)
// // Output:
// // 24

// function multi(a){
//     return function(b){
//         return function(c){
//             console.log(a*b*c);
//         }
//     }
// }
// multi(2)(3)(4)

// // Task 10 — Spread Operator
// // Merge these arrays:
// // [1,2,3]
// // [4,5,6]
// // Final Output:
// // [1,2,3,4,5,6]

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let totalArr=[...arr1,...arr2]

// console.log(totalArr)

// // Task 11 — Object Spread
// // Merge two objects:
// // {name:"Navi"}
// // {role:"Developer"}
// // Final Output:
// // {
// //   name:"Navi",
// //   role:"Developer"
// // }

// let person={
//     name:"Srinivas"
// }
// let jobRole={
//     role:'Developer'
// }

// let Details={...person,...jobRole}

// console.log(Details);

// // Task 12 — Rest Operator
// // Create function:
// // numbers(...num)
// // Requirements:
// // Print all numbers
// // Print total sum
// // Example:
// // numbers(1,2,3,4)
// // Output:
// // [1,2,3,4]
// // 10

// function numbers(...num){
//     console.log(num[0],num[1],num[2],num[3]);
//     console.log(num[0]+num[1]+num[2]+num[3])
// }
// numbers(1,2,3,4)

// // Mini Challenge 🔥
// // Create one small Student Management System using:
// // function
// // callback
// // object
// // array
// // spread operator
// // rest operator
// // Features:
// // Add student
// // Print students
// // Calculate marks

// // Add bonus marks

// let school={
//     name:"stackly",
//     class:10,
//     section:2
// }
// let school2={
//     name1:"code",
//     class1:9,
//     section1:2
// }

// let totalschool={...school,...school2,"start date": "10th may 26"}      //add start date(obj spread)
// console.log(totalschool)

// let sec1=["ram","sam","sai"];
// let sec2=["sree","mouni","renu"]

// let totalsec=[...sec1,...sec2,"srinivas","sekhar"]          //add student, spread opeartor
// console.log(totalsec)

// function newstudents(...student){
//     console.log(student[0],student[1],student[2],student[3])
// }
// newstudents("vamsi","rohith","anji","krishna")    //print students,rest parameter

// function totalMarks(add,sub1,sub2,sub3){            //callback function,calculate marks
//     add(sub1,sub2,sub3)
// }

// function marks(sub1,sub2,sub3){
//     console.log(sub1+sub2+sub3)
// }
// totalMarks(marks,100,250,175)

// let total=525                               //bonus marks adding

// function bonusMarks(bonus){
//     console.log(total+bonus)
// }
// bonusMarks(75)

//                                             //Task-5
// // Task 1 — Student Registration Form
// // Create a program using:
// // prompt()
// // variables (let, const)
// // console.log()
// // Requirements:
// // Ask student name
// // Ask department
// // Ask age
// // Print all details using template string
// // Example Output:
// // Welcome Naveen
// // Department: CSE
// // Age: 20

// function form(){
//     let name=prompt("name");
//     let department=prompt("dep");
//     const age=prompt("age")

//     console.log("Welcome",name);
//     console.log("Department:",department);
//     console.log("age:",age);
// }
// //form()

// // Task 2 — ATM Withdrawal System
// // Use:
// // if else
// // comparison operators
// // logical operators
// // Requirements:
// // User balance = 10000
// // Ask withdrawal amount
// // If amount <= balance → "Transaction Successful"
// // Else
// // → "Insufficient Balance"
// // Bonus:
// // Minimum withdrawal = 100

// let balance=10000

// function withdrawl(amount){
//     if(amount >= 100 && amount <= balance){
//         console.log("Transaction successful")
//     }
//     else{
//         console.log("Insufficient balance")
//     }
// }
// withdrawl(9000)

// // Task 3 — Swiggy Discount Checker
// // Use:
// // ternary operator
// // Requirements:
// // If order amount > 499
// // Show:
// // "Free Delivery Available"
// // Else:
// // "Delivery Charges Applied"

// let orderAmount=500;

// orderAmount>499 ? console.log("Free Delivery"):console.log("Delivery Charges Applied");


// // Task 4 — Instagram Login System
// // Use:
// // nested if
// // Requirements:
// // Correct username = "admin"
// // Correct password = "1234"
// // Conditions:
// // If username correct → ask password
// // If password correct → Login Success
// // Else → Wrong Password
// // Else → Invalid Username

// let username="admin";
// let password="1234";

// if(username == "admin"){
//     let pass= "1234" //prompt("password")
//     console.log(pass);

//     if (pass == password){
//         console.log("Login success")
//     }
//     else{
//         console.log("wrong password");
        
//     }
// }
// else{
//     console.log("Invalid username");
// }

// // Task 5 — Traffic Signal System
// // Use:
// // switch statement
// // Requirements:
// // Input:
// // red / yellow / green
// // Output:
// // STOP
// // READY
// // GO

// let Trafficsystem="red";

// switch(Trafficsystem){
//     case "red": console.log("STOP");
//     break;

//     case "yellow": console.log("READY");
//     break;

//     case "green": console.log("GO")
//     break;

//     default: console.log("Good ride");
//     break;
// }

// // Task 6 — Employee Salary Calculator
// // Use:
// // function
// // parameters
// // return
// // Requirements:
// // Create function salaryCalculation
// // Basic salary + bonus
// // Return total salary
// // Example:
// // salaryCalculation(25000,5000)
// // Output:
// // 30000

// let emp={
//     name:"srinivas",
//     salary:25000
// }

// function salaryCalculation(bonus){
//     return (emp.salary+bonus)
// }
// let totalSalary=salaryCalculation(5000)
// console.log(totalSalary);

// // Task 7 — E-Commerce Cart Total
// // Use:
// // Array
// // for loop
// // Requirements:
// // Store product prices inside array:
// // [100,200,300,400]
// // Find:
// // Total price
// // Average price

// let storeProducts=[100,200,300,400]
// let totalPrice=0
// let avgPrice=0
// let countofProdcuts=0

// for (let x in storeProducts){
//     countofProdcuts++
//     totalPrice+=storeProducts[x]
//     avgPrice=totalPrice/countofProdcuts
// }
// console.log(totalPrice)
// console.log(avgPrice);

// // Task 8 — WhatsApp Contact Book
// // Use:
// // Object
// // for in loop
// // Requirements:
// // Store:
// // name
// // phone
// // status
// // Print all details dynamically

// let Store=[{
//     name:"srinivas",
//     phone:999999999,
//     status:"online",
// },{
//     name2:"meera",
//     phone2:999888889,
//     status2:"offline",
// },{
//     name3:"Ram",
//     phone3:6767677788,
//     status3:"online",
// }]

// for (let i in Store){
//     console.log(i,":",Store[i])
// }

// // Task 9 — Movie Ticket Booking
// // Use:
// // function
// // callback function
// // Requirements:
// // Create:
// // bookTicket()
// // payment()
// // After booking complete,
// // callback payment function automatically.

// function BoookTicket(Book){
//     console.log("Payment is loading");
//     Book()
// }
// function Payment(){
//     console.log("Booking is completed ");
// }
// BoookTicket(Payment)

// // Task 10 — Food Delivery Time Tracker
// // Use:
// // Generator Function
// // Requirements:
// // Show order stages one by one:
// // Order Confirmed
// // Preparing Food
// // Out for Delivery
// // Delivered

// function* FoodDelivery(){
//     yield "Order Confirmed";
//     yield "Preparing Food";
//     yield "Out for delievery";
//     yield "Delievered"
// }
// let Tracking=FoodDelivery()

// console.log(Tracking.next().value);
// console.log(Tracking.next().value);
// console.log(Tracking.next().value);
// console.log(Tracking.next().value);


// // ==========================================
// // 5 Real-Time JavaScript Questions
// // Topic : Array + Object + HOF + Spread
// // ==========================================

// // 1. Student Attendance System
// // Create two arrays:
// // presentStudents
// // absentStudents
// // Merge both arrays using spread operator
// // Add one new student at last
// // Print final array

// let presentStudents = ["srinivas","ram","sam"];
// let absentStudents = ["madhu","rahul","geetha"];

// let toatlStudents=[...presentStudents,...absentStudents,"saketh","vinay"]

// console.log(toatlStudents);

// // 2. E-Commerce Cart
// // Create object for mobile details
// // Create another object for charger details
// // Merge both objects using spread operator
// // Add deliveryDate property
// // Print final object

// let mobileDetails={
//     brand:"apple",
//     model:"18 pro",
//     price:100000
// }

// let chargerDetails={
//     cprice:2000,
//     type:"c"
// }

// let finalObject={...mobileDetails,...chargerDetails,"Deliverydate":"15/05/2026"}

// console.log(finalObject)

// // 3. Food Delivery App
// // Create function named orderFood()
// // Accept multiple food items using rest operator
// // Print:
// // Total items ordered
// // First item
// // Last item

// function orderFood(...food){
//     console.log(food.length);
//     console.log(food[0]);
//     console.log(food[food.length-1]);   
// }
// orderFood("idly","dosa","sambar rice","curd rice","veg meals","biryani")

// // 4. Employee Salary Filter
// // Create array of employee objects
// // Filter employees whose salary is above 50000
// // Print filtered employees

// let emp=[
//     {emp1:"srinu", salary:60000},
//     {emp2:"ram", salary:49000},
//     {emp3:"sam", salary:70000},
//     {emp4:"meera", salary:50000}
// ]

// let filiteredEmp=emp.filter((c,i,t)=>{
//     return c.salary >50000;
// })
// console.log(filiteredEmp);

// // 5. Online Game Score Board
// // Create array of scores
// // Use reduce()
// // Find total score of all players
// // Print final total

// let gameScores=[90,85,89,76,54]

// let finalScore=gameScores.reduce((acc,c,i,t)=>{
//     return acc+c;
// })

// console.log(finalScore);


// 1. API Task - User Names Uppercase

// API:
// https://jsonplaceholder.typicode.com/users

// Fetch all users.

// Use map()
// Convert all usernames to UPPERCASE.

// Print new array.

let api="https://jsonplaceholder.typicode.com/users";

fetch(api).then((data)=>{

    return data.json()
})
.then((jsdata)=>{
    let uppercase=jsdata.map((x)=>{
        return x.username.toUpperCase()
    })
    console.log(uppercase);
    
})
.catch((error)=>{
    console.log(error);
})

// 2. API Task - Expensive Products

// API:
// https://fakestoreapi.com/products

// Fetch products.

// Use filter()
// Print products price greater than 100.

let api1="https://fakestoreapi.com/products"

fetch(api1).then((products)=>{
    return products.json()    
})
.then((productsData)=>{    
    let filterProduct=productsData.filter((c,i,t)=>{
        return c.price >100;
    })
    console.log(filterProduct);
    
})
.catch((error)=>{
    console.log(error);
    
})

// 3. Date Concept Task - Digital Clock

// Create one Date object.

// Print:
// current hours
// current minutes
// current seconds

// Output Example:
// 10 : 45 : 30

let date1= new Date

console.log(
date1.getHours()+" : "+
date1.getMinutes()+" : "+
date1.getSeconds(),
)

// 4. String Concept Task - Username Checker

// Create one string:
// "   Naveen Kumar   "

// Remove spaces using trim().

// Convert into uppercase.

// Check string includes "KUMAR".

// Print final output.

let user=" sai srinivas "

let finaluser=user.trim().toUpperCase();

console.log(finaluser);

console.log(finaluser.includes("SAI"));



// 5. Array Concept Task - Student Rank System

// Create one array:
// [450, 300, 700, 200, 900]

// Sort marks high to low.

// Print top 3 marks only using slice().

let arr=[450,300,700,200,900]

let sortval=arr.sort((a,b)=>{
    return b-a
})

console.log(sortval.slice(0,3))