const dropArea = document.querySelector("#drop-area");
const audioClips = [
  { src: "https://github.com/ardaarslanbakan/personal-website/raw/gh-pages/chord-activity/Chords/I.mp3" },
  { src: "https://github.com/ardaarslanbakan/personal-website/raw/gh-pages/chord-activity/Chords/ii.mp3" },
  { src: "https://github.com/ardaarslanbakan/personal-website/raw/gh-pages/chord-activity/Chords/iii.mp3" },
  { src: "https://github.com/ardaarslanbakan/personal-website/raw/gh-pages/chord-activity/Chords/IV.mp3" },
  { src: "https://github.com/ardaarslanbakan/personal-website/raw/gh-pages/chord-activity/Chords/V.mp3" },
  { src: "https://github.com/ardaarslanbakan/personal-website/raw/gh-pages/chord-activity/Chords/vi.mp3" },
  { src: "https://github.com/ardaarslanbakan/personal-website/raw/gh-pages/chord-activity/Chords/vii0.mp3" },
];

function createAudio(src) {
  const audio = document.createElement("audio");
  audio.src = src;
  audio.controls = true;
  audio.draggable = true;

  audio.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", audio.id);
    setTimeout(() => {
      audio.style.display = "none";
    }, 0);
  });

  audio.addEventListener("dragend", () => {
    audio.style.display = "block";
  });

  return audio;
}

audioClips.forEach((audioClip, index) => {
  const audio = createAudio(audioClip.src);
  audio.id = `audio-${index}`;
  dropArea.appendChild(audio);
});

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  const audioId = event.dataTransfer.getData("text/plain");
  const audio = document.getElementById(audioId);
  dropArea.appendChild(audio);
});
