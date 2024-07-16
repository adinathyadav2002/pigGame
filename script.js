"use strict";

const button_roll = document.querySelector(".button-roll-dice");
const section_right = document.querySelector(".section-right");
const section_left = document.querySelector(".section-left");
const score_temp_left = document.getElementsByClassName("score-temp")[0];
const score_temp_right = document.getElementsByClassName("score-temp")[1];
const button_hold = document.querySelector(".button-hold");
const current_score_left = document.getElementsByClassName("current-score")[0];
const current_score_right = document.getElementsByClassName("current-score")[1];
const new_game = document.querySelector(".button-new-game");
const dice_img = document.querySelector(".dice-img");

// function to rotate the turn
const rotate_turn = function () {
  dice_img.classList.add("hidden");
  if (section_right.classList.contains("current-turn")) {
    add_to_right_score();
    section_right.classList.remove("current-turn");
    section_left.classList.add("current-turn");
  } else {
    add_to_left_score();
    section_right.classList.add("current-turn");
    section_left.classList.remove("current-turn");
  }
};


// adding temp score to current score for left player
const add_to_left_score= function(){
  current_score_left.textContent =Number(current_score_left.textContent)+ Number(score_temp_left.textContent)
  score_temp_left.textContent = 0;
};

// adding temp score to current score for right player
const add_to_right_score= function(){
  current_score_right.textContent = Number(current_score_right.textContent)+ Number(score_temp_right.textContent)
  score_temp_right.textContent = 0;
};


// event to roll the dice on clicking the roll button
button_roll.addEventListener('click',function(){
  // math.random return number between (0 <= number < 1)
  let dice_score = Math.floor(Math.random()*6)+1;

  let dice_src =  `images/dice${dice_score}.svg`

  dice_img.src = dice_src;

  dice_img.classList.remove("hidden");

  if(dice_score===1){
    // if the dice score is 1 then just rotate the turn
    score_temp_left.textContent = 0;
    score_temp_right.textContent = 0;
    rotate_turn();
    dice_img.classList.add("hidden");
    return;
  }
  if(section_right.classList.contains("current-turn")){
    score_temp_right.textContent = Number(score_temp_right.textContent)+dice_score;
  }else{
    score_temp_left.textContent = Number(score_temp_left.textContent)+dice_score;
  }
})

// event that will rotate turn on clicking the hold button
button_hold.addEventListener('click', rotate_turn)