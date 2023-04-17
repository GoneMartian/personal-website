// Get all the audio-container elements
const audioContainers = document.querySelectorAll('.audio-container');

// Add a dragstart event listener to each audio-container element
audioContainers.forEach(audioContainer => {
  audioContainer.addEventListener('dragstart', e => {
    // Set the data for the drag event to the ID of the audio-container element
    e.dataTransfer.setData('text/plain', audioContainer.id);
  });
});

// Add a dragover event listener to the document object
document.addEventListener('dragover', e => {
  // Prevent the default behavior of the browser, which is to not allow dropping elements onto non-drop targets
  e.preventDefault();
});

// Add a drop event listener to the document object
document.addEventListener('drop', e => {
  // Prevent the default behavior of the browser, which is to open the dropped file in the browser
  e.preventDefault();

  // Get the ID of the audio-container element from the drag event data
  const id = e.dataTransfer.getData('text/plain');

  // Find the audio-container element with the corresponding ID
  const audioContainer = document.getElementById(id);

  // Move the audio-container element to the drop location
  audioContainer.style.position = 'absolute';
  audioContainer.style.left = `${e.pageX}px`;
  audioContainer.style.top = `${e.pageY}px`;
});
