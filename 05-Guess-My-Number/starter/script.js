'use strict';
const randomeNumber=Math.round(Math.random()*20)+1;

let score=20;
let startingscore=0;



let present=document.querySelector('.score');
let message=document.querySelector('.message');
let highScore=document.querySelector('.highscore')


document.querySelector('.check').addEventListener('click',function(){
    // take input value from the input area
    let guess=Number(document.querySelector('.guess').value);

    if(!guess){
        message.textContent='guess between 1-20';
    }
    else if(guess===randomeNumber)
    {
        if(score>1){
            message.textContent="you won have great party"
            document.querySelector('body').style.backgroundColor="green";
            if(startingscore<score){
                startingscore=score;
             highScore.textContent=startingscore;   
            }
        }
        else{
            message.textContent="you loost the game";
            present.textContent=0;
        }
    }
   else if(score>1){
    if(guess>randomeNumber){
        message.textContent="large number";
        present.textContent=score;
        score--;
    }
    else{
        message.textContent="small number";
        present.textContent=score;

        score--;
    }

   }
   else{
    message.textContent="you lost the game";
    present.textContent=0;
   }



})