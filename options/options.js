let nrows = 3;
let ncols = 1;
//let navigatableElements = [];
let numberOfKrugi = 4;
let numberOfPodhody = 5;
let restTime = 50;

let krugiLabel = document.getElementById("ei15_17_13_6");
let podhodyLabel = document.getElementById("ei15_21_13_6");
let restTimeLabel = document.getElementById("ei24_21_13_6");
//let chboxRBF = document.getElementById("ei15_87_15_85_24_42");

/*for(i=1; i<=nrows; i++){
	navigatableElements[i-1] = [];
	for(j=1; j<=ncols; j++){
		console.log(i+""+j+"item");
		navigatableElements[i-1][j-1] = document.getElementById(i+""+j+"item");
	};
};*/

let navigatableElements = 	[[document.getElementById("ei15_17_14_0")]
						,[document.getElementById("ei15_21_14_0")]
						,[document.getElementById("ei24_21_14_0")]
						,[document.getElementById("ei15_87_15_99")]];
						
//console.log(navigatableElements);

let selectedElement = [0, 0];

function parseArg(){
	let v = location.search.slice(1).split("&");
	console.log(v);
	if(v) {
		numberOfKrugi = parseInt(v[0]);
		numberOfPodhody = parseInt(v[1]);
		restTime = parseInt(v[2]);
	};
	
};

function verticlalNav(direction){
	navigatableElements[selectedElement[0]][selectedElement[1]].style.background = "#C4C4C4";
	console.log([selectedElement[0], direction])
	if ((selectedElement[0] == 0) && (direction == -1)){
		selectedElement[0] = nrows-1;
	} else {
		selectedElement[0] = (selectedElement[0] + direction)%nrows;
	};
	navigatableElements[selectedElement[0]][selectedElement[1]].style.background = "#000";
};

function gorizontalSelector(direction){
	switch(selectedElement.join("")){
		case "00":
			numberOfKrugi = numberOfKrugi + direction;
			krugiLabel.innerHTML = numberOfKrugi;
			break;
		case "10":
			numberOfPodhody = numberOfPodhody + direction;
			podhodyLabel.innerHTML = numberOfPodhody;
			break;
		case "20":
			restTime = restTime + direction;
			restTimeLabel.innerHTML = restTime;
			break;
	};
};

function startWindow(){
	parseArg();
	verticlalNav(0);
	krugiLabel.innerHTML = numberOfKrugi;
	podhodyLabel.innerHTML = numberOfPodhody;
	restTimeLabel.innerHTML = restTime;
};

startWindow();
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
		case "SoftLeft":
			window.open("../index.html?"+numberOfKrugi+"&"+numberOfPodhody+"&"+restTime, "_self");
	};
})
