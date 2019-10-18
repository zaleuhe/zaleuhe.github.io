var database = [
	{
		username: "George",
		password: "supersecret",
	},
	{
		username: "Ezekiel",
		password: "elephant",
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from learning.",
	},
	{
		username: "Sally", 
		timeline: "Javascript is rocking",
	}
];


function signIn(){
	var usernamePrompt = prompt("Username:");
	var passwordPrompt = prompt("Password:");

	for (i = 0; i < database.length; i++) 
	if(usernamePrompt === database[i].username && passwordPrompt === database[i].password){
		return usernamePrompt;
	}
	alert("Incorrect username or password");
	return null;
}

var username = null;

while(username === null){
	username = signIn();
}

alert("Hello, " + username);





