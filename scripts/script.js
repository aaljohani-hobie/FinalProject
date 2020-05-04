const jsName = "script.js";
const jsVersion = "1.0.0";
	var xhttp = new XMLHttpRequest();
	// Function to load the date	
	function clickedIn(){
		console.log("click the button");
		xhttp.open("GET","https://aaljohani-hobie.github.io/json-examples/devProfile.json", true);
		xhttp.send();
	}
	
	
	// Function to add new data to the existing profile 
	function Update(){
		var editBio = document.getElementById("editBio");
		var bioText = document.getElementById("bioText");
		var bioInput= editBio.value;
		editBio.value = "";
		bioText.innerText = bioInput;
	}
	
	// Data from json-examples/devProfile
	function updateWindow(rawData){
		var data = JSON.parse(rawData);
		var div = document.getElementById("logIn");
		var text = "";
		
		text += `<div class="card" display: inline-block>`;
		text += `<h1 class="cardText">` + data.info.name + `</h1>`;
		text += `<center><img src="` + data.info.pic + `"alt = "XX" height="300" width="300" display: inline-block></center>`;
		text += `<p class="cardText">`+ data.info.university +`</p>`;
		text +=`<a href="`+data.info.github+`" target="_blank"><i class="github"></i> Hobie's github page</a>`;
		text +=`<a href="`+data.info.midterm+`" target="_blank"><i class="github"></i> Portfolio-Project</a>`;
		text += `<p class="cardText" id="bioText">`+ data.info.add +`</p>`;
		
		text += `<div class="input-group cardText">
		<textarea class="form-control" aria-label="With textarea" id="editBio"></textarea>
		<div class="input-group-append">
		<button class="w3-button w3-small" type="button" onclick="Update()">Update</button>
		</div>
		</div>
		`;
		
		
		div.innerHTML = text;
	}
	
	
	xhttp.onload = function(){
		updateWindow(xhttp.responseText)
	}
