// define an object that maps each key code to a frequency
const keyToFrequency = {
    65: 261.63, // A
    66: 277.18, // B
    67: 293.66, // C
    68: 311.13, // D
    69: 329.63, // E
    70: 349.23, // F
    71: 369.99, // G
    72: 392.00, // H
    73: 415.30, // I
    74: 440.00, // J
    75: 466.16, // K
    76: 493.88, // L
    77: 523.25, // M
    78: 554.37, // N
    79: 587.33, // O
    80: 622.25, // P
    81: 659.25, // Q
    82: 698.46, // R
    83: 739.99, // S
    84: 783.99, // T
    85: 830.61, // U
    86: 880.00, // V
    87: 932.33, // W
    88: 987.77, // X
    89: 1046.50, // Y
    90: 1108.73 // Z
};

// add keydown event listener to the document
document.addEventListener('keydown', playTone);

// get the key element
const keyElement = document.getElementById('key');

// function to play a tone and animate the key based on the key pressed
function playTone(event) {
const keyCode = event.keyCode;
const frequency = keyToFrequency[keyCode];
if (frequency) {
    // create an AudioContext
    const audioContext = new AudioContext();

    // create an oscillator node
    const oscillator = audioContext.createOscillator();

    // connect the oscillator to the destination
    oscillator.connect(audioContext.destination);

    // set the frequency of the oscillator
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    // start the oscillator
    oscillator.start();

    // stop the oscillator after 0.5 seconds
    oscillator.stop(audioContext.currentTime + 0.5);
    
    // update the key element with the pressed key value
    keyElement.innerText = event.key;

    // add a bouncing animation to the key element
    keyElement.classList.add('bounce');


    // remove the bouncing animation after 0.5 seconds
    setTimeout(function() {
    keyElement.classList.remove('bounce');
    }, 500);
}
}
  