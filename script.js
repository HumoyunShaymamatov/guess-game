'use strict';

// console.log(document.querySelector('.message').textContent);
let secretNum = Math.floor(Math.random() * 20 + 1);
let score = 5;
let highscore = 0;
// console.log(secretNum);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Hech bo`lmasa harakat qilib ko`ring)');
  } else {
    if (guess === secretNum) {
      displayMessage('Qarsaklar');
      document.querySelector('.number').textContent = secretNum;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNum) {
      score--;
      document.querySelector('.score').textContent = score;
      if (score > 0) {
        displayMessage(
          guess < secretNum
            ? 'Kattaroq son o`ylovdim'
            : 'Kichikroq son o`ylovdim'
        );
      } else {
        displayMessage('Yutqizdingiz hi-hi-hi-hi');
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.modul').classList.remove('hidden');
        document.querySelector('.overlay').classList.remove('hidden');
        document.querySelector('.end').classList.remove('hidden');
        document.querySelector('.restart-main').classList.add('hidden');
      }
    }
  }
});
console.log(document.querySelectorAll('.restart').textContent);
for (let i = 0; i < document.querySelectorAll('.restart').length; i++) {
  document
    .querySelectorAll('.restart')
    [i].addEventListener('click', function () {
      secretNum = Math.floor(Math.random() * 20 + 1);
      score = 5;

      displayMessage('⬅Tahminingizni kiriting');
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.modul').classList.add('hidden');
      document.querySelector('.overlay').classList.add('hidden');
      document.querySelector('.end').classList.add('hidden');
      document.querySelector('.restart-main').classList.remove('hidden');
    });
}
