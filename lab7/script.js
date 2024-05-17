'use strict';

//Part 3 - Step 4
const root = document.documentElement;

// Part 2 - Step 2
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', buttonClick);
});

// Part 2 - Step 3
function buttonClick() {
  const btn = event.target;
  btn.classList.toggle('open');
  const content = btn.nextElementSibling;
  content.classList.toggle('open');
  document.querySelectorAll('.accordion-label').forEach(button => {
    if (button !== btn && button.classList.contains('open')) {
      button.classList.remove('open');
      button.nextElementSibling.classList.remove('open');
    }
  });

  // Part 3 - Step 5
  root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');
}