// Get items that will be modified
var css = document.querySelector("h3");
var colorLeft = document.querySelector('.colorLeft');
var colorRight = document.querySelector('.colorRight');
var bodyColor = document.getElementById("gradient");
var percentage = 33;

colorLeft.addEventListener("input", setGradient);
colorRight.addEventListener("input", setGradient);

function setGradient(){
	bodyColor.style.background = "linear-gradient(to right, " + colorLeft.value 
			+ ", " + colorLeft.value + " " + percentage +"%, " + colorRight.value + ")";

	// Set text content
	css.textContent = bodyColor.style.background + ";";
}


// SLIDER FUNCTIONALITY
var slider = document.getElementById("colorRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  percentage = this.value;
  setGradient();
}