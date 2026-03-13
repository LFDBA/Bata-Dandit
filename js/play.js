// Audio playing function
function play(audioName) {
  //Create new Audio object with the audioName and play the audio
  var audio = new Audio(audioName);
  audio.volume = 0.6
  audio.play();
  audio.preload = "auto";
}

//Vignette and Unvignette animation functions
function vignette() {
  document.body.style = "animation: vignette 0.4s forwards;"
}
function oV() {
  document.body.style = "animation: unvig 0.4s forwards;"
}