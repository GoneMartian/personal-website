// Get all draggable elements
const draggableElements = document.querySelectorAll(".draggable");

// Get the drop zone
const dropZone = document.querySelector(".drop-zone");

// Set up event listeners for the draggable elements
draggableElements.forEach((draggable) => {
  draggable.addEventListener("dragstart", dragStart);
  draggable.addEventListener("dragend", dragEnd);
});

// Set up event listeners for the drop zone
dropZone.addEventListener("dragover", dragOver);
dropZone.addEventListener("drop", drop);

// Variables to store the position of the dragged element
let initialX;
let initialY;

function dragStart(event) {
  // Store the initial position of the dragged element
  initialX = event.clientX - event.target.offsetLeft;
  initialY = event.clientY - event.target.offsetTop;

  // Set the data transfer data
  event.dataTransfer.setData("text/plain", event.target.id);
}

function dragEnd(event) {
  // Reset the position of the dragged element
  event.target.style.left = "";
  event.target.style.top = "";
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  // Get the id of the dragged element
  const id = event.dataTransfer.getData("text/plain");

  // Get the dragged element
  const draggable = document.getElementById(id);

  // Calculate the new position of the dragged element
  const x = event.clientX - initialX;
  const y = event.clientY - initialY;

  // Set the position of the dragged element
  draggable.style.left = x + "px";
  draggable.style.top = y + "px";

  // Append the dragged element to the drop zone
  event.target.appendChild(draggable);
}
