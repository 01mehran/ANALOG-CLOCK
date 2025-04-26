"use strict";

// Selecting Elements
const elements = {
  hoursWrapper: document.querySelector(".hours__wrapper"),
  secondsWrapper: document.querySelector(".seconds__wrapper"),
  container: document.querySelector(".container"),
  hour: document.querySelector(".hour"),
  minute: document.querySelector(".minute"),
  second: document.querySelector(".second"),
  displayDay: document.querySelector("#displayDay"),
  displayFullDate: document.querySelector("#displayFullDate"),
  digitalClock: document.querySelector("#digitalClock"),
};

// Constants
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Helper Functions
function createElements(wrapper, count, elementCreator) {
  const elements = [];
  for (let i = 1; i <= count; i++) {
    elements.push(elementCreator(i));
  }
  wrapper.insertAdjacentHTML("afterbegin", elements.join(""));
}

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

// Create Clock Elements
createElements(
  elements.hoursWrapper,
  12,
  (i) => `<span style="--index:${i}"><p>${i}</p></span>`
);

createElements(
  elements.secondsWrapper,
  60,
  (i) => `<span style="--index:${i}"><p></p></span>`
);

// Clock Functionality
function updateClock() {
  const date = new Date();

  // Analog Clock
  elements.hour.style.transform = `rotate(${
    date.getHours() * 30 + date.getMinutes() / 2
  }deg)`;
  elements.minute.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
  elements.second.style.transform = `rotate(${date.getSeconds() * 6}deg)`;

  // Digital Clock
  elements.digitalClock.innerHTML = `${formatTime(
    date.getHours()
  )} : ${formatTime(date.getMinutes())} : ${formatTime(date.getSeconds())}`;
}

// Date Display
function updateDate() {
  const date = new Date();
  elements.displayDay.textContent = WEEKDAYS[date.getDay()];
  elements.displayFullDate.innerHTML = `/ ${
    MONTHS[date.getMonth()]
  } / ${formatTime(date.getDate())} / ${date.getFullYear()}`;
}

// Sound Functionality
let soundInterval = null;
let isSoundOn = false;

function toggleSound() {
  isSoundOn = !isSoundOn;

  if (isSoundOn) {
    if (soundInterval) clearInterval(soundInterval);
    soundInterval = setInterval(() => {
      new Audio("./sound.wav").play();
    }, 1000);
  } else if (soundInterval) {
    clearInterval(soundInterval);
    soundInterval = null;
  }
}

// Initialize
updateClock();
updateDate();
setInterval(updateClock, 1000);
elements.container.addEventListener("click", toggleSound);
