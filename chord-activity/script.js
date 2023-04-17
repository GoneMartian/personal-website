// Select all the draggable audio elements
const audioElements = document.querySelectorAll('.audio');

// Set up event listeners for each audio element
audioElements.forEach((audioElement) => {
  // Set the draggable attribute to true
  audioElement.setAttribute('draggable', true);

  // Add event listeners for the drag events
  audioElement.addEventListener('dragstart', dragStart);
  audioElement.addEventListener('dragend', dragEnd);
});

// Set up event listeners for the drop area
const dropArea = document.querySelector('.drop-area');
dropArea.addEventListener('dragover', dragOver);
dropArea.addEventListener('drop', drop);

// Keep track of the currently dragged element
let currentlyDraggedElement = null;

function dragStart(event) {
  // Set the currently dragged element
  currentlyDraggedElement = event.target;

  // Add the 'dragging' class to the element
  currentlyDraggedElement.classList.add('dragging');
}

function dragEnd(event) {
  // Remove the 'dragging' class from the element
  currentlyDraggedElement.classList.remove('dragging');

  // Reset the currently dragged element
  currentlyDraggedElement = null;
}

function dragOver(event) {
  // Prevent the default action (which is to not allow drops)
  event.preventDefault();
}

function drop(event) {
  // Prevent the default action (which is to open the audio file in the browser)
  event.preventDefault();

  // Add the dragged element to the drop area
  dropArea.appendChild(currentlyDraggedElement);
}
