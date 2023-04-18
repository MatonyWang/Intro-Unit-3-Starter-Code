let noteButton=document.querySelector(".note-one");
let gameButton=document.querySelector(".game-one");
let mathButton=document.querySelector(".math-botton");
let englishButton=document.querySelector(".english-botton");
let title=document.querySelector(".title");
let reviewNoteButton=document.querySelector(".story-opening-two");
let storyOpening=document.querySelector(".story-opening");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let reviewEnd=document.querySelector(".review-end");



noteButton.onclick=function(){
  storyOpening.style.display="none";
  title.style.display="none";
  optionOneScreen.style.display="block";
  
};

gameButton.onclick=function(){
  title.style.display="none";
  storyOpening.style.display="none";
  optionTwoScreen.style.display="block";
};

mathButton.onclick=function(){
title.style.display="none";
storyOpening.style.display="none";
reviewEnd.style.display="block";
};