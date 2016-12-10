

function playSound(sound) {
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', path);
	audioElement.play();
}