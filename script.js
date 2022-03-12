"use strict";

let runs = document.querySelector(".runs");
let overs = document.querySelector(".overs");
let overClass = document.querySelector(".over");
let box = document.querySelector(".box");

let outButton = document.querySelector(".outbutton");
let out = document.querySelector(".out");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let six = document.querySelector(".six");
let noball = document.querySelector(".noball");
let wideball = document.querySelector(".wideball");
let balls = document.querySelector(".balls");

let arrayOfBalls = [];
function exe(ball) {
  let lastArray = arrayOfBalls.slice(-1);
  let html = `<div class="box">${lastArray}</div>`;
  overClass.insertAdjacentHTML("beforeend", html);
}

function over() {
  let getTextContentOfOvers = overs.textContent;
  let convertOversFromStringToInt = parseInt(getTextContentOfOvers);
  console.log(convertOversFromStringToInt);
  overs.textContent = convertOversFromStringToInt + 1;
}

function ball() {
  let getTextContentOfballs = balls.textContent;
  let convertballsFromStringToInt = parseInt(getTextContentOfballs);
  if (convertballsFromStringToInt == 6) {
    balls.textContent = 1;
    arrayOfBalls = [];
    exe();
    over();
  } else {
    balls.textContent = convertballsFromStringToInt + 1;
  }
}

one.addEventListener("click", function () {
  let getTextContentOfRuns = runs.textContent;
  let convertRunsFromStringToInt = parseInt(getTextContentOfRuns);
  runs.textContent = convertRunsFromStringToInt + 1;
  ball();
  arrayOfBalls.push("1");
  exe();
});

two.addEventListener("click", function () {
  let getTextContentOfRuns = runs.textContent;
  let convertRunsFromStringToInt = parseInt(getTextContentOfRuns);
  runs.textContent = convertRunsFromStringToInt + 2;
  ball();
  arrayOfBalls.push("2");
  exe();
});

three.addEventListener("click", function () {
  let getTextContentOfRuns = runs.textContent;
  let convertRunsFromStringToInt = parseInt(getTextContentOfRuns);
  runs.textContent = convertRunsFromStringToInt + 3;
  ball();
  arrayOfBalls.push("3");
  exe();
});

four.addEventListener("click", function () {
  let getTextContentOfRuns = runs.textContent;
  let convertRunsFromStringToInt = parseInt(getTextContentOfRuns);
  runs.textContent = convertRunsFromStringToInt + 4;
  ball();
  arrayOfBalls.push("4");
  exe();
});

six.addEventListener("click", function () {
  let getTextContentOfRuns = runs.textContent;
  let convertRunsFromStringToInt = parseInt(getTextContentOfRuns);
  runs.textContent = convertRunsFromStringToInt + 6;
  ball();
  arrayOfBalls.push("6");
  exe();
});

noball.addEventListener("click", function () {
  let getTextContentOfRuns = runs.textContent;
  let convertRunsFromStringToInt = parseInt(getTextContentOfRuns);
  runs.textContent = convertRunsFromStringToInt + 1;
  arrayOfBalls.push("NB");
  exe();
});

wideball.addEventListener("click", function () {
  let getTextContentOfRuns = runs.textContent;
  let convertRunsFromStringToInt = parseInt(getTextContentOfRuns);
  runs.textContent = convertRunsFromStringToInt + 1;
  arrayOfBalls.push("WB");
  exe();
});

outButton.addEventListener("click", function () {
  let getTextContentOfOut = out.textContent;
  let convertTextContentOfOut = parseInt(getTextContentOfOut);
  out.textContent = convertTextContentOfOut + 1;
  ball();
  arrayOfBalls.push("OT");
  exe();
});
