console.log("It works.");

// variables
var newCard = document.getElementById("newcarddiv");
var input = document.getElementById("text");
var button = document.getElementById("button");
var cardAndDelete = " ";

var counter = 0;

// create button
button.addEventListener("click", function(event){
	newCard.innerHTML += `<div class="nested">${input.value}<button type="button" class="deleteit">Delete</button></div>`;
	counter++
});

newCard.addEventListener("click", function(event){
	if (event.target.tagName.toLowerCase() === "button") {
		newCard.removeChild(event.target.parentElement);
		console.log(event.target.parentElement);
	}
})