1. what is javascript? what is role of javascript engine?

javascript is a programming language that is used for converting static web pages to interactive and dynamic web pages  
 javascript engine is a software that runs javascript code and executes it in a browser or a server
or A jaavscript engine is a program that present in web browser that execute javascript code

2. what is client side and server side?

   A client is a device, application, or software component that request and consume services or resources from a server
   A server is a device, application, or software component that provides services, resources or functions to clients

3. what are variables? what is different between var, let and const?

   varaible is the name of memory location that is used to store the data or varaibles are used to store data ex:- var count=10;

   function example (){
   if(true){
   var count = 10;
   console.log(count); // output 10
   }
   console.log(count); // output 10
   }
   that why var creates a function scoped variable
   let and const are block scoped variables and they are used to declare variables in es6 and above

   function example(){
   if(true){
   let count = 10;
   console.log(count); // output 10
   }
   console.log(count); // ReferenceError: count is not defined

   }

   in case of let count is not accesible out sode of curly bracket scope ie. let creates block-scoped variable

   const z= 10;
   z = 20; // TypeError: Assignment to constant variable.
   const can be assigned only once, and its va;ue can not be changes afterwards

4. what are some importants string operations in JS?
   concat, substring, string.length, toUpperCase, toLowerCase, split, replace, trim

5. what is DOM? what is difference between HTML and DOM?

   DOM is a tree-like data structure that represents the structure of an HTML or XML document
   The DOM(Document Object Model) represent the web pages as a tree like structure that allows javascript to dynamically access and manipulate the content and structure of a web pages

6. what are selectors in JS?

   selectos in js help to get specific elements from the DOM based on ID's, class name, tag name

   1. getElementById()
   2. getElementsByClassName
   3. getElementsByTagName()
   4. querySelector()
   5. querySelectorAll()

7. what is diffrence between getElementById(), getElementByClassName and getElementByTagName()?
   const elementId = document.getElementById("myDiv");
   console.log(elementId.innerHTML);

const elementClass = document.getElementsByClassName("myClass");
for (let i = 0; i < elementClass.length; i++) {
console.log(elementClass[i].innerHTML);

console.log(elementClass[i].textContent);
}

const elementTag = document.getElementsByTagName("div");

for (let i = 0; i < elementClass.length; i++) {
console.log(elementClass[i].innerHTML);
}

8. what are data types in JS?- A data types determines the type of variables

   primitive and non-primitive

9. what are operators? what are the types of operators?

   operators are symboles or keywords used to perform operations on operands

   1. Arithmetic,
   2. Assignment
   3. Comparison,
   4. Logical,
   5. String

10. what are types of conditions statements in JS?

that gives result as true or false

1.  if/else
2.  ternary
3.  switch

4.  what are loops in JS?

    loop is a programming way to run a piece of code repeatedly until a certain condition met
    types- for, while, do-while, for-of, for-in

5.  what are functions in JS? what are theb types of function?

    function is a reusable bloack of code that performs a specific task

    1. Named function
    2. Anonymous function
    3. Function Expression
    4. Arrow function
    5. IIFE
    6. Callback function
    7. Higer order function

6.  What are Arrow functions in JS? what is its usees?

    Arrow function , also known as fat arrow functions, is simpler and shorter way for defining function in javascript

7.  What are arrays in JS? how to get, add and remove elements from array?

    Array is a data type that allow you to store multiple values in a single variable.

8.  What are objects in JS?

    object is a data type tat allow you to store key-value pairs

9.  what is scope in JS?

    accessibility of particular functions and variable or scope determines where variables are defined and where they can be accessed.

10. What is Hoisting in JS?

Hoisting is a javascript behaviour where functions and variables declarations are moved to the top of their respective scopes during their compilation time

18. What are Error Hanldling in JS?

Error Hanldling is the process of managing the errors by using try and catch blocks

19. what is Asynchronous Programming in JS? what is the its use?

    Asynchronous Programming allows multiple task or operations to be initiated and executed concurrently
    Asynchronous operations do not block the execution of the code

20.
