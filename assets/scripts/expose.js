// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById('horn-select');
  selectElement.addEventListener('change', (event) => {
      console.log(event.target.value);
      const name = event.target.value;
      const yum =  document.querySelector("[alt='No image selected']");
      const selectAudio = document.getElementsByClassName('hidden');
      console.log(selectAudio);
      if(name == "air-horn"){
        yum.src = "assets/images/air-horn.svg";
        selectAudio.src = "assets/audio/air-horn.mp3";
      }
      else if(name == "car-horn"){
        yum.src = "assets/images/car-horn.svg";
        selectAudio.src = "assets/audio/car-horn.mp3";
      }
      else if(name == "party-horn"){
        yum.src = "assets/images/party-horn.svg";
        selectAudio.src = "assets/audio/party-horn.mp3";
      }
      else{
        yum.src = "assets/images/no-image.png";
      }

  });
}