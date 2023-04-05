// create an array of frequencies for different tones
const frequencies = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];

// add click and touch event listeners to the document
document.addEventListener('click', playTone);
document.addEventListener('touchstart', playTone);

// function to play a tone based on the position of the click or touch event
function playTone(event) {
  // get the x and y coordinates of the click or touch event
  const x = event.clientX || event.touches[0].clientX;
  const y = event.clientY || event.touches[0].clientY;

  // calculate the frequency based on the position of the click or touch event
  const frequency = frequencies[Math.floor(x / (window.innerWidth / frequencies.length))];

  // create a new AudioContext and OscillatorNode
  const context = new AudioContext();
  const oscillator = context.createOscillator();

  // connect the OscillatorNode to the AudioContext destination
  oscillator.connect(context.destination);

  // set the frequency of the OscillatorNode and start playing it
  oscillator.frequency.setValueAtTime(frequency, context.currentTime);
  oscillator.start();

  // stop the OscillatorNode after 0.5 seconds
  oscillator.stop(context.currentTime + 0.5);
}
