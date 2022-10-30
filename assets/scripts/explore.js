// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const speechSynthesis = window.speechSynthesis;
  const faceImg =  document.querySelector("[alt='Smiling face']");
  let allVoices = [];

  setTimeout(() => {
    
    allVoices = speechSynthesis.getVoices();
    console.log(allVoices);
    let text;

    const selectSelector = document.querySelector('select');
    for (let i = 0; i < allVoices.length; i++) {
      const langOption = document.createElement('option');
      langOption.textContent = allVoices[i].name;
      langOption.setAttribute('data-name', langOption.textContent);
      selectSelector.appendChild(langOption);
    }
    const buttonElement = document.querySelector("button");
    const textAreaElement = document.querySelector("textarea");
      textAreaElement.addEventListener('input', (event) => {
        text = event.target.value;
      });
    buttonElement.addEventListener('click',(event) => {
      const talk = new SpeechSynthesisUtterance(text);
      const currOption = selectSelector.selectedOptions[0].getAttribute('data-name');
      for (let i = 0; i < allVoices.length; i++) {
        if (allVoices[i].name === currOption) {
          talk.voice = allVoices[i];
        }
      }
      console.log(currOption);
      console.log(text);
      console.log(talk);
      speechSynthesis.speak(talk);
      faceImg.src = "assets/images/smiling-open.png";
    });

    setInterval(function () {
      if (speechSynthesis.speaking == false) {
        faceImg.src = "assets/images/smiling.png"
      }
    }, 50);

  }, 50);


}