1. How to validate user input as they type in a form ?

by using event handeling or event listener on input event

const inputField = document.getElementById("myInput");
inputField.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  if (inputValue.length > 3) {
    console.log("good", event.target.value);
  } else {
    console.log("bad");
  }
});


2. How to handel asynchronous operation in JS?
  By using promises or async/await mechanism

  async function fetchData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data= await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

fetchData();

3. How to implement pagination for displaying large sets of data?

4. How to store key value pairs & efficiently access and mainipulate the data?
   By using object or Map

5. How to implement drag-and-drop functionality for  element on a web page?

6. How to iterate over element in array and perform a specific operation on each element?
   By using Array methods forEach() or map() or for...of loop

7. How to implement a feature that allows user to search for specific items in a large dataset?
   By using array methods filter() and includes()
  const data= ["My", "name", "is", "abhishek"];

const searchItem= "abhi";

const filterData= data.filter((item, index)=>{
    return item.includes(searchItem)

});

console.log(filterData);

8. what method is used to retrieve from an external API?
   By using fetch() API

   fetch("https://api.example.com/api")
.then((response) =>response.json())
.then(data=> console.log(data))
.catch((err) => {
    console.log(err);
    
})

9. How to implement a features that allows users to perform live search suggestions as they type?

  const input= document.getElementById("myInput");
input.addEventListener("input", (event)=>{
const searchText= event.target.value
fetch(`/search/suggestions?query=${searchText}`)
.then((data)={
    // display search suggestion to user
})   
})

10. How to create an infinite scroling feature using JS when a user reaches the bottom of webpage?

    

