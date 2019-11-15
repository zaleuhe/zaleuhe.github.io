/*var addButton = document.getElementById("addItem");
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
})*/

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
*/

var input=document.getElementById("userInput");
var button=document.getElementById("addItem");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

function inputLength(){
	return input.value.length;
}

function clearInputField() {
	input.value="";
}

function createButton (){
	var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("X"));
 	btn.onclick = removeParent;
 	btn.className = "deleteButton";
 	return btn;
}

function createListElement(){
var li=document.createElement("li");
	li.appendChild(createButton());
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	

 	clearInputField();
}


function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();
    }
}

function isItemInList(addedItem){

}

function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}



ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 