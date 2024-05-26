"use strict";

const body = document.querySelector("body");

function setBackground() {
  const URL =
    "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?" +
    "q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3f" +
    "DF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  fetch(URL)
    .then((response) => {
      console.log(`Status: ${response.status}`);
      body.style.background = `url(${response.url}) no-repeat center center 
      / cover fixed`;
      console.log("Asynchronous task completed!");
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    });
}

setBackground();
