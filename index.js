function timer([time, txt, color]){
	mainDiv.style.backgroundColor = color;
	
	if(time){
		timeLabel.innerHTML = time;
		time = time - 1;
		timerId = setInterval(function(){
			
			if(time < 0){
				startNewInterval();
			} else {
				if (time == 0){
					longBeep();
				} else if (time<=3){
					shortBeep();
				};
				timeLabel.innerHTML = time;
				time = time - 1;
			}
		}, 1000);
		
	} else {
		timeLabel.innerHTML = txt;
	}
};

function startNewInterval(){
	clearInterval(timerId);
	if (i > howMuchExInKrug - 1){
		i = 0;
		k = k + 1;
		if(k > numberOfKrug){
			k = 1;
			p = p + 1;
		};
	};
	if (i == 0 && p == numberOfPodhody && k == numberOfKrug){
		krug[howMuchExInKrug - 1] = [null, "FINISH", "#4B0082"];
	};
	krugLabel.innerHTML = k + "/" + numberOfKrug;
	podhodLabel.innerHTML = p + "/" + numberOfPodhody;
	timer(krug[i]);
	i = i + 1;
	
};

function parseArg(){
	let v = location.search.slice(1).split("&");
	if(v) {
		numberOfKrug = v[0];
		numberOfPodhody = v[1];
		krug[1][0] = v[2];
	};
};

function longBeep() {
  var audio = new Audio(); 
  audio.src = 'sounds/beep.wav'; 
  audio.autoplay = true; 
}

function shortBeep() {
  var audio = new Audio(); 
  audio.src = 'sounds/short_beep.wav'; 
  audio.autoplay = true; 
}

let timeLabel = document.getElementById("time-label");
let mainDiv = document.getElementById("main");
let krugLabel = document.getElementById("krugLabel");
let podhodLabel = document.getElementById("podhodLabel");
let krug = [[null, "WORK", "red"], [50, null, "blue"]];
let howMuchExInKrug = krug.length;
let k = 1;
let p = 1;
let i = 0;
let timerId;
let numberOfKrug = 4;
let numberOfPodhody = 1;
let softLeftIsRestart = false;

function resetTimer(){
	clearInterval(timerId);
	p = 1;
	k = 1;
	i = 0;
	parseArg();
	document.getElementById("softLeftLabel").innerHTML = "Options";
	mainDiv.style.backgroundColor = "#448FFF";
	timeLabel.innerHTML = "---";
	krugLabel.innerHTML = "-/"+numberOfKrug;
	podhodLabel.innerHTML = "-/"+numberOfPodhody;
}

parseArg();
krugLabel.innerHTML = "-/"+numberOfKrug;
podhodLabel.innerHTML = "-/"+numberOfPodhody;

window.addEventListener('keydown', function(event) {
	//event.preventDefault()
	switch(event.key){
		case "Enter":
			if(!softLeftIsRestart){
				softLeftIsRestart = true;
				document.getElementById("softLeftLabel").innerHTML = "Reset";
				startNewInterval();
			};
			break;
		case "SoftRight":
			startNewInterval();
			break;
		case "SoftLeft":
			if(!softLeftIsRestart){
				window.open("options/options.html?"+numberOfKrug+"&"+numberOfPodhody+"&"+krug[1][0], "_self")
			} else {
				resetTimer();
				softLeftIsRestart = false;
			};
			break;
	}
});