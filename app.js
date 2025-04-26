"use strict";
// Selecting Elements;
const hoursWrapper = document.querySelector(".hours__wrapper");
const secondsWrapper = document.querySelector(".seconds__wrapper");
const container = document.querySelector(".container");

//---------------------- Create hours number;
let hoursNumberWrapper = [];

for (let i = 1; i <= 12; i++) {
  hoursNumberWrapper.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}
hoursWrapper.insertAdjacentHTML("afterbegin", hoursNumberWrapper.join(""));

//-------------------- Create Seconds bar;
let secondsBarWrapper = [];

for (let i = 1; i <= 60; i += 1) {
  secondsBarWrapper.push(`<span style="--index: ${i}"><p></p></span>`);
}
secondsWrapper.insertAdjacentHTML("afterbegin", secondsBarWrapper.join(""));

//------------------ Time;
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".second");
const Time = () => {
  const date = new Date();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentSeconds = date.getSeconds();

  hour.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
  minute.style.transform = `rotate(${currentMinutes * 6}deg)`;

  seconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
};
setInterval(Time, 1000);


