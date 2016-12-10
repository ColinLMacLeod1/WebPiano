

function playSound(sound) {
	audioElement = document.createElement('audio');
	audioElement.setAttribute('src', sound);
	audioElement.play();
}

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
	playSound("sounds/g-5.mp3");
});
$("#A5").click(function() {
	playSound("sounds/a5.mp3");
});