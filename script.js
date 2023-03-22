"use strict";
const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("card-content");
const generateBtn = document.getElementById("generate-btn");

const API_URL = "https://api.adviceslip.com/advice";
const INTERVAL_MS = 5000;
let intervalID = null;

function fetchAdviceAndRender() {
  fetch(API_URL)
    .then((response) => response.json()) 
    .then(({ slip }) => {
      const { id, advice } = slip;
      adviceId.textContent = `ADVICE #${id}`;
      adviceContent.textContent = `'${advice}'`;
      console.log({id, advice})
    });
}

fetchAdviceAndRender();

intervalID = setInterval(fetchAdviceAndRender, INTERVAL_MS);

generateBtn.addEventListener("click", function () {
  if (intervalID) {
    clearInterval(intervalID);
  }
  fetchAdviceAndRender();
});
