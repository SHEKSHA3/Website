"use strict";

let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let p0score = document.querySelector("#score--0");
let p1score = document.querySelector("#score--1");
let p0currentScore = document.querySelector("#current--0");
let p1currentScore = document.querySelector("#current--1");

// dice

let dice = document.querySelector(".dice");
let BtnNew = document.querySelector(".btn--new");
let BtnRoll = document.querySelector(".btn--roll");
let BtnHold = document.querySelector(".btn--hold");

// some let variable
let active, currentScore, scores, play;

// change player
const changeplayer = function () {
  // document.getElementById(`score--${active}`).textContent=currentScore;
  // document.getElementById(`current--${active}`).textContent=0
  currentScore = 0;
  active = active == 0 ? 1 : 0;
  player0.classList.toggle(".player--active");
  player1.classList.toggle(".player--active");
};
//
function init() {
  active = 0;
  currentScore = 0;
  scores = [0, 0];
  play = true;
  p0score.textContent = 0;
  p1score.textContent = 0;
  p0currentScore.textContent = 0;
  p1currentScore.textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
}
init();

// roll event

BtnRoll.addEventListener("click", function () {
  if (play) {
    let diceRandom = Math.trunc(Math.random() * 6) + 1;

    // dice.classList.remove('hidden');
    dice.src = `dice-${diceRandom}.png`;
    currentScore += diceRandom;

    //    if(diceRandom!==1){
    //     document.querySelector(`#current--${active}`).textContent=currentScore;
    //    }
    //    else{
    //     changeplayer();
    //    }
    //    }
    scores[active] += diceRandom;
    document.querySelector(`#score--${active}`).textContent = scores[active];
    document.querySelector(`#current--${active}`).textContent = diceRandom;
    if (scores[active] >= 20) {
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      // init();
      play=false;
    } else {
      if (diceRandom !== 6) changeplayer();
     
    }
  }
});

// hold btn

// BtnHold.addEventListener('click',function(){
//    if(play){
//     scores[active]+=currentScore;
//     document.querySelector(`#score--${active}`).textContent=scores[active];
//     if(scores[active]>=20){
//         play=false;
//         dice.classList.add('hidden')
//         document.querySelector(`.player--${active}`).classList.add('player--winner');
//         document.querySelector(`.player--${active}`).classList.remove('player--active');
//     }
//     else{
//         changeplayer();
//     }
//    }
// })

BtnNew.addEventListener("click", init);
