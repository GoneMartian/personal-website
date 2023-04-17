// Get all the audio-container elements
const audioContainers = document.querySelectorAll('.audio-container');

// Add a dragstart event listener to each audio-container element
audioContainers.forEach(audioContainer => {
  audioContainer.addEventListener('dragstart', e => {
    // Set the data for the drag event to the ID of the audio-container element
    e.dataTransfer.setData('text/plain', audioContainer.id
