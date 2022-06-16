const h3 = document.createElement('h3');
h3.textContent = 1;
h3.style.color = 'red';
const h4 = document.createElement('h4');
h4.textContent = 'Balai:';
const ul = document.createElement('ul');

const scoreBtn = document.createElement('button');
scoreBtn.textContent = 'Įrašyti balą';
const addBtn = document.createElement('button');
addBtn.textContent = '+';
const subtractBtn = document.createElement('button');
subtractBtn.textContent = '-';
const add2Btn = document.createElement('button');
add2Btn.textContent = '+2';
const subtract2Btn = document.createElement('button');
subtract2Btn.textContent = '-2';
const resetBtn = document.createElement('button');
resetBtn.textContent = 'reset';
const divNumbers = document.getElementById('numbers');
const input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('min', 1);
input.setAttribute('max', 10);
input.setAttribute('value', 1);

divNumbers.append(h3, input, addBtn, add2Btn, subtractBtn, subtract2Btn, resetBtn, h4, scoreBtn, ul);
subtractBtn.setAttribute('disabled', true);
subtract2Btn.setAttribute('disabled', true);
let h3Num = +h3.textContent;

function disableEnable() {
  if (h3Num > 8) {
    add2Btn.setAttribute('disabled', true);
  } else {
    add2Btn.removeAttribute('disabled');
  }
  if (h3Num > 9) {
    addBtn.setAttribute('disabled', true);
  } else {
    addBtn.removeAttribute('disabled');
  }
  if (h3Num > 2) {
    subtract2Btn.removeAttribute('disabled');
  } else {
    subtract2Btn.setAttribute('disabled', true);
  }
  if (h3Num > 1) {
    subtractBtn.removeAttribute('disabled');
  } else {
    subtractBtn.setAttribute('disabled', true);
  }
  if (h3Num > 4) {
    h3.style.color = 'green';
  } else {
    h3.style.color = 'red';
  }
  scoreBtn.removeAttribute('disabled');
  h3.textContent = h3Num;
  input.value = h3Num;
}

input.addEventListener('change', () => {
  h3Num = input.value;
  disableEnable();
});

addBtn.addEventListener('click', () => {
  h3Num++;
  disableEnable();
});
add2Btn.addEventListener('click', () => {
  h3Num += 2;
  disableEnable();
});
subtractBtn.addEventListener('click', () => {
  h3Num--;
  disableEnable();
});
subtract2Btn.addEventListener('click', () => {
  h3Num -= 2;
  disableEnable();
});
resetBtn.addEventListener('click', () => {
  h3Num = 1;
  disableEnable();
});

scoreBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = h3Num;
  li.style.color = h3.style.color;
  ul.append(li);
  h3Num = 1;
  disableEnable();
  h3.textContent = h3Num;
  scoreBtn.setAttribute('disabled', true);
});
