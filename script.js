const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop function if key pressed does not have audio
  audio.currentTime = 0; // reset audio on key press
  audio.play();
  key.classList.add("playing");
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // skip if it's not a transform
  e.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

console.log(this);
