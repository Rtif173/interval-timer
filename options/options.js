let nrows = 3;
let ncols = 1;
let navigatableElements = [];
let numberOfKrugi = 4;
let numberOfPodhody = 5;

for(i=1; i<=nrows; i++){
	navigatableElements[i-1] = [];
	for(j=1; j<=ncols; j++){
		console.log(i+""+j+"item");
		navigatableElements[i-1][j-1] = document.getElementById(i+""+j+"item");
	};
};

console.log(navigatableElements);
let selectedElement = [0, 0];

function verticlalNav(direction){
	navigatableElements[selectedElement[0]][selectedElement[1]].style.backgroundColor = "#fff";
	console.log([selectedElement[0], direction])
	if ((selectedElement[0] == 0) && (direction == -1)){
		selectedElement[0] = 2;
	} else {
		selectedElement[0] = (selectedElement[0] + direction)%nrows;
	};
	navigatableElements[selectedElement[0]][selectedElement[1]].style.backgroundColor = "#C4C4C4";
}

function gorizontalSelector(direction){
	switch(selectedElement.join("")){
		case "00":
			numberOfKrugi = numberOfKrugi + direction;
			document.getElementById("numberOfKrugi").innerHTML = numberOfKrugi;
			break;
		case "10":
			numberOfPodhody = numberOfPodhody + direction;
			document.getElementById("numberOfPodhody").innerHTML = numberOfPodhody;
			break;
	};
}

verticlalNav(0);

window.addEventListener("keydown", function(event){
	switch (event.key){
		case "ArrowUp":
			verticlalNav(-1);
			break;
		case "ArrowDown":
			verticlalNav(1);
			break;
		case "ArrowRight":
			gorizontalSelector(1);
			break;
		case "ArrowLeft":
			gorizontalSelector(-1);
			break;
		case "Delete":
			window.open("../index.html?"+numberOfKrugi+"&"+numberOfPodhody, "_self");
	};
})
