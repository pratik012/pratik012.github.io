const box = document.getElementById('box');

// initialize the box's position
let positionX = 0;
let positionY = 0;

// add a keydown event listener to the document
document.addEventListener('keydown', (event) => {
  // get the key code from the event
  const keyCode = event.keyCode;

  // move the box based on the arrow key input
  switch (keyCode) {
    case 37: // left arrow
      positionX -= 10;
      break;
    case 38: // up arrow
      positionY -= 10;
      break;
    case 39: // right arrow
      positionX += 10;
      break;
    case 40: // down arrow
      positionY += 10;
      break;
    default:
      break;
  }

  // update the box's position
  box.style.top = `${positionY}px`;
  box.style.left = `${positionX}px`;
});
