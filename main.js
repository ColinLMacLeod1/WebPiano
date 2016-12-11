

function playSound(sound) {
	audioElement = document.createElement('audio');
	audioElement.setAttribute('src', sound);
	audioElement.play();
}

$(document).keypress(function(e) {
	if(e.which == 65 || e.which == 97) {playSound("sounds/a4.wav");}
	else if(e.which == 87 || e.which == 119) playSound("sounds/a-4.wav");
	else if(e.which == 83 || e.which == 115) playSound("sounds/b4.wav");
	else if(e.which == 68 || e.which == 100) playSound("sounds/c5.wav");
	else if(e.which == 82 || e.which == 114) playSound("sounds/c-5.wav");
	else if(e.which == 70 || e.which == 102) playSound("sounds/d5.wav");
	else if(e.which == 84 || e.which == 116) playSound("sounds/d-5.wav");
	else if(e.which == 71 || e.which == 103) playSound("sounds/e5.wav");
	else if(e.which == 72 || e.which == 104) playSound("sounds/f5.wav");
	else if(e.which == 85 || e.which == 117) playSound("sounds/f-5.wav");
	else if(e.which == 74 || e.which == 106) playSound("sounds/g5.wav");
	else if(e.which == 73 || e.which == 105) playSound("sounds/g-5.wav");
	else if(e.which == 75 || e.which == 107) playSound("sounds/a5.wav");
});


$("#A3").click(function() {
	playSound("sounds/a4.wav");
});
$("#A-3").click(function() {
	playSound("sounds/a-4.wav");
});
$("#B3").click(function() {
	playSound("sounds/b4.wav");
});
$("#C4").click(function() {
	playSound("sounds/c5.wav");
});
$("#C-4").click(function() {
	playSound("sounds/c-5.wav");
});
$("#D4").click(function() {
	playSound("sounds/d5.wav");
});
$("#D-4").click(function() {
	playSound("sounds/d-5.wav");
});
$("#E4").click(function() {
	playSound("sounds/e5.wav");
});
$("#F4").click(function() {
	playSound("sounds/f5.wav");
});
$("#F-4").click(function() {
	playSound("sounds/f-5.wav");
});
$("#G4").click(function() {
	playSound("sounds/g5.wav");
});
$("#G-4").click(function() {
	playSound("sounds/g-5.wav");
});
$("#A5").click(function() {
	playSound("sounds/a5.wav");
});