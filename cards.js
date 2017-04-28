console.log("It works.");

// XX Create an HTML page that contains a text area and a button labeled Create.
// XX When the user enters in text into the text area and then clicks the create button, create a
// XX new card element in the DOM that includes it's own delete button.

// variables
var newCard = document.getElementById("newcarddiv");
var input = document.getElementById("text");
var button = document.getElementById("button");
var nested = document.getElementById("nested");
var cardAndDelete = " ";

// create  button
button.addEventListener("click", function(event){
	createAndDelete()
});

// Add text to card and create delete button
function createAndDelete(card){
	newCard.innerHTML += input.value + `<br>` + `<button type="button" id="deleteit">Delete</button>` + cardAndDelete + `<br>`;
	var deleteit = document.getElementById("deleteit");
	deleteit.addEventListener("click", function(event){
	deleteCard()
	});
};

// Delete card from DOM
function deleteCard() {
	document.getElementById("newcarddiv").remove();
	this.remove();
};

// You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM.
// Not just made invisible, actually removed from the DOM.