// Get the audio containers
const audioContainers = document.querySelectorAll('.audio-container');

// Add event listeners to each audio container
audioContainers.forEach(container => {
  container.addEventListener('dragstart', handleDragStart);
});

// Get the drop area element
const dropArea = document.querySelector('#drop-area');

// Add event listeners to the drop area
dropArea.addEventListener('dragover', handleDragOver);
dropArea.addEventListener('drop', handleDrop);

// Define the event handlers for the audio containers
function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Define the event handlers for the drop area
function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
  event.preventDefault();
  const droppedElementId = event.dataTransfer.getData('text/plain');
  const droppedElement = document.getElementById(droppedElementId);
 
