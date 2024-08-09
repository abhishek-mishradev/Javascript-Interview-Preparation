const inputField = document.getElementById("myInput");
inputField.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  if (inputValue.length > 3) {
    console.log("good", event.target.value);
  } else {
    console.log("bad");
  }
});



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


const data= ["My", "name", "is", "abhishek"];

const searchItem= "abhi";

const filterData= data.filter((item, index)=>{
    return item.includes(searchItem)

});

console.log(filterData);

fetch("https://api.example.com/api")
.then((response) =>response.json())
.then(data=> console.log(data))
.catch((err) => {
    console.log(err);
    
})


const input= document.getElementById("myInput");
input.addEventListener("input", (event)=>{
const searchText= event.target.value
fetch(`/search/suggestions?query=${searchText}`)
.then((data)={
    // display search suggestion to user
})   
})










