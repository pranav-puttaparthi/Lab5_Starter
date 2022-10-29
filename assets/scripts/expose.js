// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById('horn-select');
  const selectAudio = document.getElementsByClassName('hidden');
  const selectAudioObject = document.querySelector("audio");
  const jsConfetti = new JSConfetti();
  console.log(selectAudio);
  selectElement.addEventListener('change', (event) => {
      console.log(event.target.value);
      const name = event.target.value;
      const yum =  document.querySelector("[alt='No image selected']");
      console.log(selectAudio);
      if(name == "air-horn"){
        yum.src = "assets/images/air-horn.svg";
        selectAudioObject.src = "assets/audio/air-horn.mp3";
      }
      else if(name == "car-horn"){
        yum.src = "assets/images/car-horn.svg";
        selectAudioObject.src = "assets/audio/car-horn.mp3";
      }
      else if(name == "party-horn"){
        yum.src = "assets/images/party-horn.svg";
        selectAudioObject.src = "assets/audio/party-horn.mp3";
        jsConfetti.addConfetti();
      }
      else{
        yum.src = "assets/images/no-image.png";
      }
  });
  const inputElement = document.querySelector("[type='range']");
  inputElement.addEventListener('change', (event) => {
      console.log(inputElement);
      const value = event.target.value/100.0;
      const volumeImg =  document.querySelector("[alt='Volume level 2']");
      if (value == 0) {
        volumeImg.src = "assets/icons/volume-level-0.svg";
        selectAudioObject.volume = value;
      }
      else if (value > 0 && value < 0.33) {
        volumeImg.src = "assets/icons/volume-level-1.svg";
        selectAudioObject.volume = value;
      }
      else if (value >= 0.33 && value < 0.67) {
        volumeImg.src = "assets/icons/volume-level-2.svg";
        selectAudioObject.volume = value;
      }
      else {
        volumeImg.src = "assets/icons/volume-level-3.svg";
        selectAudioObject.volume = value;
      }
      console.log(selectAudioObject.volume);
  });
  const buttonElement = document.querySelector("button");
  buttonElement.addEventListener('click',(event) => {
    selectAudioObject.play();
    console.log(selectAudioObject);

  });
  console.log(buttonElement);
}