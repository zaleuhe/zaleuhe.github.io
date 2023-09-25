/*
Question 1: Clean the room function: given an input of
[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function
that organizes these into individual array that is ordered.

For example answer(ArrayFromAbove) should return: 
[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

Bonus: Make it so it organizes strings differently from number 
types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/
const array1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]; // should return 100
const arrayOrdered = array1.sort(function(a, b){return a-b});

var answer1 = document.getElementById("answer1");
answer1.textContent = arrayOrdered.toString();

/*Question 2: Write a javascript function that takes an array of
numbers and a target number. The function should find two different
numbers in the array that, when added together, give the target 
number. For example: answer([1,2,3], 4)should return [1,3]
*/

var answer2 = document.getElementById("answer2");
answer2.textContent = "This works 2";



/*Question 3: Write a function that converts HEX to RGB. Then Make
that function auto-dect the formats so that if you enter HEX color
format it returns RGB and if you enter RGB color format it returns HEX.
*/
var answer3 = document.getElementById("answer3");
answer3.textContent = "This works 3";