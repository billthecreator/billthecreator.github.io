// Get all the elements that requiere the effect
var rippleButton = document.querySelectorAll('[data-ripple-effect="button"]');

// The animation function
function rippleEffect(event) {

  // Getting the div that the effect is relative to
  var box = this.lastElementChild,

    // Creating the effect's div
    create = document.createElement('div'),

    // Getting the button's size, distance to top and left
    boxWidth = box.offsetWidth,
    boxHeight = box.offsetHeight,
    boxY = box.getBoundingClientRect().top,
    boxX = box.getBoundingClientRect().left,

    // Getting the mouse position
    mouseX = event.clientX,
    mouseY = event.clientY,

    // Mouse position relative to the box
    rippleX = mouseX - boxX,
    rippleY = mouseY - boxY,

    // Calculate which is the farthest corner
    rippleWidth = boxWidth / 2 < rippleX ? rippleX : boxWidth - rippleX,
    rippleHeight = boxHeight / 2 < rippleY ? rippleY : boxHeight - rippleY,

    // Distance to the farest corner
    boxSize = Math.sqrt(Math.pow(rippleWidth, 2) + Math.pow(rippleHeight, 2)),

    // Getting the custom background value
    color = this.getAttribute('data-ripple-effect-color'),

    // Getting the custom Z-Index value
    zIndex = this.getAttribute('data-ripple-effect-zindex'),

    // Getting the button computed style
    thisStyle = window.getComputedStyle(this);

  // Creating and moving the effect div inside the button
  box.appendChild(create);

  // Ripple style (size, position, color and border-radius)
  create.setAttribute('data-ripple-effect', 'effect');
  create.style.height = 2 * boxSize + 'px';
  create.style.width = 2 * boxSize + 'px';
  create.style.top = mouseY - boxY - boxSize + 'px';
  create.style.left = mouseX - boxX - boxSize + 'px';
  create.style.backgroundColor = color;
  box.style.borderTopLeftRadius = thisStyle.getPropertyValue('border-top-left-radius');
  box.style.borderTopRightRadius = thisStyle.getPropertyValue('border-top-right-radius');
  box.style.borderBottomLeftRadius = thisStyle.getPropertyValue('border-bottom-left-radius');
  box.style.borderBottomRightRadius = thisStyle.getPropertyValue('border-bottom-right-radius');
  box.style.zIndex = zIndex;

  // Delete  div after animation finished
  setTimeout(function() {
    box.removeChild(create);
  }, 800);
}

window.onload = function() {
  // Adding to all the elements the necesary div and the event listener to run
  // the animation
  for (i = 0; i < rippleButton.length; i++) {
    var create = document.createElement('div');

    // Adding the listener to run the effect
    rippleButton[i].addEventListener('mousedown', rippleEffect);

    // Creating a div inside the mask-div to be the reference for the ripple
    // position
    rippleButton[i].appendChild(create);
    create.setAttribute('data-ripple-effect', 'box');
  }
}
