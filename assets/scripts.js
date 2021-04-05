//
const guy1 = document.querySelector(".guy1");
const bad = document.querySelector(".enemy");
const background = document.querySelector(".background");
const floor = document.querySelector(".floor");
const dead = document.querySelector(".dead");
const deathNote = document.querySelector(".deathNote");
const score = document.querySelector(".scoreGame");

const jump = () => {
  if (guy1.classList != "jump") {
    guy1.classList.add("jump");
  }
  setTimeout(() => {
    guy1.classList.remove("jump");
  }, 1000);
};

const control = (e) => {
  if (e.keyCode === 32) {
    jump();
  }
};

document.addEventListener("keydown", control);
document.addEventListener("keydown", (control) => {
  document.querySelectorAll(".jumping").forEach((ele) => {
    ele.classList.toggle("leap");
    setTimeout(() => {
      ele.classList.remove("leap");
    }, 1000);
  });
});

let counter = 0
 let hasLost = false
if (hasLost){
  dead == false;
  hasLost = false;
} else {
  dead == true;
  hasLost = true;
}
 

 setInterval(() => {
  let guy1Top = parseInt(window.getComputedStyle(guy1).getPropertyValue("top"));
  let badLeft = parseInt(window.getComputedStyle(bad).getPropertyValue("left"));

const dead = (badLeft < 30 && badLeft > 20 && guy1Top >= 220);
 
if (dead) {
    bad.style.animation = "none";
    bad.style.display = "none";
    guy1.style.animation = "none";
    guy1.style.display = "none";
    background.style.animation = "none";
    floor.style.animation = "none";
    deathNote.style.visibility = "visible";
    score.style.visibility = "hidden";
  }

}, 10);
setInterval (() => {
  counter++;
  console.log(counter);
  document.getElementById('scoreGame').innerHTML = counter;
},3000) 