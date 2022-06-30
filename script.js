'use strict';

let secretNumber = getRandumNumber();
let score = Number(document.querySelector('.score').textContent);
let heighScore = 0;
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

function getRandumNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
const decreaseScore = () => score--;

const displayScore = score =>
  (document.querySelector('.score').textContent = score);

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

const setNumberWidth = numberWidth =>
  (document.querySelector('.number').style.width = numberWidth);

const displayBackGroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);

const displayHeighScore = heighScore =>
  (document.querySelector('.highscore').textContent = heighScore);

const makeInputEmpty = () => (document.querySelector('.guess').value = '');

const repeat = function () {
  score = 20;
  secretNumber = getRandumNumber();
  displayScore('20');
  makeInputEmpty();
  displayMessage('Start guessing...');
  displayNumber('?');
  displayBackGroundColor('#222');
  setNumberWidth('15rem');
};

const loseGame = function () {
  displayMessage('😭 You Lose The Game');
  displayScore('0');
  displayBackGroundColor('#cf2424');
};

const setNewHeighScore = function (score) {
  heighScore = score;
  displayHeighScore(String(heighScore));
};

const check = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number🎉');
    displayBackGroundColor('#60b347');
    setNumberWidth('30rem');
    displayNumber(secretNumber);
    if (score > heighScore) {
      setNewHeighScore(score);
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('📈 Too Heigh')
        : displayMessage('📉 Too Low');
      decreaseScore();
      displayScore(score);
    } else {
      loseGame();
    }
  }
};

btnAgain.addEventListener('click', repeat);

btnCheck.addEventListener('click', check);
