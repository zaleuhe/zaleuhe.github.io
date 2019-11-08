var addButton = document.getElementById("addItem");
var userInput = document.getElementById("userInput");
var ourList = document.querySelector("ul");

function hasInput(){
	return userInput.value.length > 0
}

function addToList(){
	var li = document.createElement("li");
	// Add text to the li element
	li.appendChild(document.createTextNode(userInput.value));
	// attach li element to the ul element.
	ourList.appendChild(li);
	//reset user input field
	userInput.value = "";
}

// On button click
addButton.addEventListener("click", function() {
	if(hasInput()){
		addToList();
	}
})
// On enter press
userInput.addEventListener("keypress", function(event){
	if(hasInput() && event.keyCode === 13){
		addToList();
	}
})

/* ALTERNATE METHOD

function addListAfterClick(){
	if(hasInput()){
		addToList();
	}
}
addButton.addEventListener("click", addListAfterClick);

function addListAfterKeypress(event){
	if(hasInput() && event.keyCode === 13){
		addToList();
	}
}
userInput.addEventListener("keypress", addListAFterKeypress)

