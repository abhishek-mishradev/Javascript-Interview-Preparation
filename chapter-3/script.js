const myButton = document.getElementById("myBtn");

myButton.addEventListener("click", handelClick);

function handelClick(event){
    console.log("Button Clicked", event.type);
    // alert("Hello World!");
}