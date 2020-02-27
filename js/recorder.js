/*
Based on Web-Dictaphone: https://github.com/mdn/web-dictaphone
*/
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const soundClips = document.querySelector('#sound-clips');

stop.disabled = true;

if (navigator.mediaDevices.getUserMedia) {
   const constraints = { audio: true };
   let chunks = []; // To hold input

   let onSuccess = function(stream) {
      const mediaRecorder = new MediaRecorder(stream);

      
   }
}