const containers = document.querySelectorAll('.audio-container');
let draggedContainer = null;

// Add event listeners to each audio container
containers.forEach(container => {
  container.addEventListener('dragstart', function() {
    draggedContainer = container;
  });

  container.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  container.addEventListener('drop', function() {
    const containerParent = container.parentNode;
    const draggedContainerParent = draggedContainer.parentNode;
    containerParent.insertBefore(draggedContainer, container);
    draggedContainerParent.insertBefore(container, draggedContainer);
    draggedContainer = null;
  });
});

// Get the drop area element
const dropArea = document.querySelector('#drop-area');

// Add event listeners to the drop area
dropArea.addEventListener('dragover', handleDragOver);
dropArea.addEventListener('drop', handleDrop);

// Define the event handlers for the drop area
function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
  event.preventDefault();
  const droppedElementId = event.dataTransfer.getData('text/plain');
  const droppedElement = document.getElementById(droppedElementId);
  dropArea.insertBefore(droppedElement, dropArea.firstChild);
}
