let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

const firstDice = document.querySelector(".img1");
const secondDice = document.querySelector(".img2");

firstDice.setAttribute("src", `images/dice${randomNumber1}.png`);
secondDice.setAttribute("src", `images/dice${randomNumber2}.png`);