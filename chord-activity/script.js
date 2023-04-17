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
