function timer([time, color]){
	mainDiv.style.backgroundColor = color;
	
	if(time){
		timeLabel.innerHTML = time;
		time = time - 1;
		
		timerId = setInterval(function(){
			if(time < 0){
				startNewInterval();
			} else {
				timeLabel.innerHTML = time;
				time = time - 1;
			}
		}, 1000);
		
	} else {
		timeLabel.innerHTML = "WORK";
	}
};

function startNewInterval(){
	clearInterval(timerId);
	try {
		timer(krug[i]);
	} catch {
		i = i - howMuchExInKrug;
		timer(krug[i]);
		k = k + 1;
		krugLabel.innerHTML = k + "/" + numberOfKrug;
	}
	i = i + 1;
};

function parseArg(){
	let v = location.search.slice(1).split("&");
	if(v) {
		numberOfKrug = v[0];
		numberOfPodhody = v[1];
	};
}

let timeLabel = document.getElementById("time-label");
let mainDiv = document.getElementById("main");
let krugLabel = document.getElementById("krugLabel");
let krug = [[null, "red"], [50, "blue"]];
let howMuchExInKrug = krug.length;
let k = 1;
let i = 1;
let timerId;
let numberOfKrug = 4;
let numberOfPodhody = 1;

parseArg();

window.addEventListener('keydown', function(event) {
	switch(event.key){
		case "Enter":
			timer(krug[0]);
			break;
		case "ArrowRight":
		case "SoftRight":
			startNewInterval();
			break;
		case "Delete":
			window.open("options/options.html", "_self")
			break;
	}
});