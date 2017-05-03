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

// create button
button.addEventListener("click", function(event){
	createAndDelete()
});

// Add text to card and create delete button
function createAndDelete(card){
	newCard.innerHTML += `<div>${input.value}<button type="button" id="deleteit">Delete</button></div><br>`;
	var deleteIt = document.getElementById("deleteit");
	deleteIt.addEventListener("click", function(event){
	deleteCard()
	});
};

// Delete card from DOM

function deleteCard(card){
	for (i = 0; i < newCard.length; i++){
    	deleteIt.item(i).addEventListener("click", function(event){
        var deleteIt = event.target.closest("div").remove();
    	});
    }
};

// You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM.
// Not just made invisible, actually removed from the DOM.