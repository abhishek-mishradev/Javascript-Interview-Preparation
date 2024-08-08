1. Write a function that returns the reverse of a string

const str = "abhishek";

console.log(str);

1. Method 
const reversStr = str.split("").reverse().join("");
console.log(reversStr);

2. Method 
function strReverse(str) {
const reversStr = str.split("").reverse().join("");
console.log(reversStr);
}

strReverse("abhishek");

3. Method
function strReverse(str) {
let reversed= "";
for (let i = str.length-1; i >=0; i--) {
reversed += str[i];

    }

console.log(reversed);

}

strReverse("abhishek");


2. Write a function that returns the longest word in the sentence.

const longWord= "i love coding in javascript";

function findLOngestWord(sentence){
    const words = sentence.split(" ");
    let longestWord= "";
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord= word;
        }
    }
    console.log(longestWord);
}


findLOngestWord(longWord) 


3. Write a function that checks whether a given string is palindrome or not ?

  function checkpalindrom(str){
    const palindromstr= str.split('').reverse().join('');
    if(str===palindromstr) {
        console.log(true);

    }
    else{
        console.log(false);
    }
   
}

checkpalindrom("racecar");


4. write a function to remove duplicate element from an array.

Method 1
const arr= [1,2,3,4,4,3,2,6,7];
const unique = new Set(arr);
console.log([...unique]);

Method 2.

function removeDuplicate(arr){

    const uniqueElement= [];

    for (let i = 0; i< arr.length; i++) 
        {  
            if(uniqueElement.indexOf(arr[i]) === -1)
                uniqueElement.push(arr[i]);
        }  
   
        console.log(uniqueElement);
    
}

removeDuplicate([1,2,3,4,3,2,5,6]); 


5. Write a function that checks whether two strings are anagrams or not?

 console.log(areAnagrams)("listen", "silent")
function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  if (sortedStr1 === sortedStr2) {
    console.log("anagrams");
  } else {
    console.log("The strings are not anagrams.");
  }
}

areAnagrams("listen", "silent");


6. write a function that returns the number of vowels in a string.

function checkVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(count);
}

checkVowels("Hello World");

7. write a function to find the largest number in an array?

function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  console.log(largest);
}

findLargestNumber([1, 2, 3, , 7, 5, 9]);

8. write a function to check if a given number is prime or not?

function checkPrime(number){
    for(let i =2;i<number/2; i++ ){
        if(number % i === 0){
            return false;
        }

    }

    return true;
}

9. write a function to calculate the factorial of the number.

function factorial(num){
    if(num ===0){
        return 1
    }

    let factorial= 1;
    for(let i=1; i<=num; i++){
        factorial *= i;
    }
    console.log(factorial);
}

factorial(5); // Output: 120

10. write a program to remove all whitespaces characters from a string.

function removeWhiteSpeces(str){
    const result = str.replace(/\s/g, "");
    console.log(result);
}

removeWhiteSpeces("Hello             World"); // Outputs: HelloWorld



