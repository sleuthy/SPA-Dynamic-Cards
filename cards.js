console.log("It works.");

// variables
var newCard = document.getElementById("newcarddiv");
var input = document.getElementById("text");
var button = document.getElementById("button");
var cardAndDelete = " ";

// create button
button.addEventListener("click", function(event){
	createAndDelete()
});

// Add text to card and create delete button
function createAndDelete(card){
	newCard.innerHTML += `<br><div id="nested">${input.value}<p><button type="button" id="deleteit">Delete</button></p></div><br>`;
	var deleteIt = document.getElementById("deleteit");
	deleteIt.addEventListener("click", function(event){
	deleteCard()
	};
});

// Delete card from DOM

function deleteCard(card){
	for (i = 0; i < newCard.length; i++){
    	deleteIt[i].addEventListener("click", function(event){
        var deleteIt = event.target.closest("div").remove();
    	});
    }
};

// When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM.
// Not just made invisible, actually removed from the DOM.