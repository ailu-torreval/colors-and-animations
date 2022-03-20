"use strict";

let darkBtn = document.querySelector("#theme-toggle");

darkBtn.onclick = function () {
  console.log("dark mode activated");
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkBtn.textContent = "Light Mode";
  } else {
    darkBtn.textContent = "Dark Mode";
  }
};
